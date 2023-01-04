// eslint-disable-next-line no-undef
module.exports = {
  '**/*.{js,ts}': [() => 'npm run lint:fix', 'npm run cspell', 'prettier --write'],
  'package.json': 'sort-package-json',
};
