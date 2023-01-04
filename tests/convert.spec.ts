import { test, expect } from '@playwright/test';
import { convert, today } from '../src/ts/convert';

test('convert', async () => {
  // if empty, return today's era
  expect(convert(null)).toBe(convert(today()));
  // heisei
  expect(convert('2018-01-01')).toBe('平成30/1/1');
  expect(convert('2018')).toBe('平成30/1/1');
  // showa
  expect(convert('1980-01-01')).toBe('昭和55/1/1');
  expect(convert('1980')).toBe('昭和55/1/1');
  // taisho
  expect(convert('1920-01-01')).toBe('大正9/1/1');
  expect(convert('1920')).toBe('大正9/1/1');
  // meiji
  expect(convert('1910-01-01')).toBe('明治43/1/1');
  expect(convert('1910')).toBe('明治43/1/1');
});

test('today', async () => {
  // if empty, return today's era
  expect(today().split('-').length).toBe(3);
});
