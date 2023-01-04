#! /usr/bin/env node
const today = (): string => {
  let today = new Date();

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let date = today.getDate();
  return `${year}-${month}-${date}`;
};

(() => {
  const args = process.argv.slice(2);
  const timeFormat: Intl.DateTimeFormatOptions = { era: "long" };
  const input = args[0] ?? today();
  const date = new Date(input);
  console.log(
    new Intl.DateTimeFormat("ja-JP-u-ca-japanese", timeFormat).format(date)
  );
})();
