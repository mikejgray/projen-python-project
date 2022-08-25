import { PythonProject, PythonProjectOptions } from "projen/lib/python";

export class BasePythonProject extends PythonProject {
  constructor(options: PythonProjectOptions) {
    super(options);
    options.devDeps ?? [
      "flake8",
      "bandit",
      "pydocstyle",
      "pycodestyle",
      "black",
      "pytest",
      "mypy",
      "pylint",
    ];
    options.poetry ?? true;
  }
}
