# wareki_cli

The wareki_cli is tools for command line execution.
Displays the current Japanese calendar in Japan or the Japanese calendar for the year given as a command line argument.
Working like

## Installation ・ Usage

You can use this cli by npx

```bash
npx wareki_cli
```

If you specify date

```bash
# return 平成12/1/1
npx wareki_cli 2000-01-01
```

## Development

### Setup

1. `npm i`
2. `npx gulp`

Gulp is running tsc and dumping ts file under src folder to dist folder.

Executing compiled JavaScript is

3. `node dist/js/index.js`

### CI/CD

The following libraries are primarily used to maintain this repository.

1. [cspell](https://www.npmjs.com/package/cspell)
2. [Prettier](https://www.npmjs.com/package/prettier)
3. [ESLint](https://www.npmjs.com/package/eslint)
4. [sort-package-json](https://www.npmjs.com/package/sort-package-json)

And [husky](https://www.npmjs.com/package/husky) run these libraries in pre-commit.

### Testing

PlayWrite is used for testing.
https://playwright.dev/

If you use VSCode, I recommend you introduce this extension.

https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
