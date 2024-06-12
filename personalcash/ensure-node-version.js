const { execSync } = require('child_process');
const semver = require('semver');
const packageJson = require('./package.json');

const requiredVersion = packageJson.engines.node;
const currentVersion = process.version;

if (!semver.satisfies(currentVersion, requiredVersion)) {
  console.log(`Required node version ${requiredVersion} not satisfied with current version ${currentVersion}.`);
  execSync(`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash && . ~/.nvm/nvm.sh && nvm install ${requiredVersion} && nvm use ${requiredVersion}`);
  console.log(`Node version switched to ${requiredVersion}.`);
} else {
  console.log(`Node version ${currentVersion} satisfies required version ${requiredVersion}.`);
}
