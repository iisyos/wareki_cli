// eslint-disable-next-line no-undef
module.exports = {
  '**/*.{js,ts}': [() => 'npm run lint:fix', 'prettier --write'],
};
