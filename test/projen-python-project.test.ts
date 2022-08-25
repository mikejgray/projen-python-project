import * as fs from "fs-extra";
import { BasePythonProject } from "../src";
// @ts-ignore
import { mkdtemp, synthSnapshot } from "./testutil";

describe("Check settings specific for project type", () => {
  let tmpTestDir: string = "";
  const originalConsoleError = console.error;

  beforeEach(() => {
    tmpTestDir = mkdtemp();
    fs.ensureDirSync(tmpTestDir);
    console.error = jest.fn();
  });

  afterEach(() => {
    fs.removeSync(tmpTestDir);
    console.error = originalConsoleError;
  });

  const project = new BasePythonProject({
    outdir: tmpTestDir,
    moduleName: "test",
    authorName: "Mike Gray",
    authorEmail: "mike@graywind.org",
    version: "0.1.0",
    name: "test",
  });
  const snap = synthSnapshot(project);

  test("License is not defined for BasePythonProject default", () => {
    expect(snap.LICENSE).toBeUndefined();
  });

  test("Poetry is enabled for BasePythonProject default", () => {
    expect(snap.poetry?.toBeTruthy());
  });

  test("Dev dependencies are set properly for BasePythonProject default", () => {
    expect(snap.devDeps?.toContain("flake8"));
    expect(snap.devDeps?.toContain("bandit"));
    expect(snap.devDeps?.toContain("pydocstyle"));
    expect(snap.devDeps?.toContain("pycodestyle"));
    expect(snap.devDeps?.toContain("black"));
    expect(snap.devDeps?.toContain("pytest"));
    expect(snap.devDeps?.toContain("mypy"));
    expect(snap.devDeps?.toContain("pylint"));
  });

  // One day...
  // test("Gitignore was updated properly for BasePythonProject default", () => {
  //   expect(snap.Gitignore.toContain(".DS_Store"));
  //   expect(snap.Gitignore.toContain(".idea/"));
  // });
});
