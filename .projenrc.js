const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  author: 'Mike Gray',
  authorAddress: 'mgray@2ndwatch.com',
  defaultReleaseBranch: 'main',
  name: 'projen-python-project',
  repositoryUrl: 'https://github.com/mgray/projen-python-project.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();