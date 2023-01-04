#! /usr/bin/env node
import { convert } from './convert';

(() => {
  const args = process.argv.slice(2);
  const input = args[0];
  console.log(convert(input));
})();
