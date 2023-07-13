import { test, expect } from 'vitest';
import obfuscateContent from '..';

test('obfuscateContent', () => {
  const input = 'Hello World!';
  const output = obfuscateContent(input);
  expect(output).not.toBe(input);
  expect(output.length).toBe(input.length);

  const words = output.split(' ');
  expect(words.length).toBe(2);
  expect(words[0].charAt(0).toUpperCase()).toBe(words[0].charAt(0));
  expect(words[1].charAt(0).toUpperCase()).toBe(words[1].charAt(0));
});
