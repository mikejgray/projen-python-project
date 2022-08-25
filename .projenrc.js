const {
  cdk
} = require('projen');

const project = new cdk.JsiiProject({
  author: 'Mike Gray',
  authorAddress: 'mike@graywind.org',
  defaultReleaseBranch: 'main',
  name: 'projen-python-project',
  repositoryUrl: 'https://github.com/mikejgray/projen-python-project.git',
  description: "Mike's preferred Python project settings",
  gitignore: [".DS_Store", ".idea/"],
  eslint: false,
  prettier: true,
  devDeps: ["@types/fs-extra"]
});

project.synth();