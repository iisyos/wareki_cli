#! /usr/bin/env node
const today = (): string => {
  const today = new Date();

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();
  return `${year}-${month}-${date}`;
};

(() => {
  const args = process.argv.slice(2);
  const timeFormat: Intl.DateTimeFormatOptions = { era: 'long' };
  const input = args[0] ?? today();
  const date = new Date(input);
  console.log(new Intl.DateTimeFormat('ja-JP-u-ca-japanese', timeFormat).format(date));
})();
