// Fékk eslint villu þegar ég reyndi að importa þessu, þetta er alveg eins og í sýnidæmi.
// Læt þetta slide-a
// eslint-disable-next-line
import { describe, expect, it } from '@jest/globals';
import { parse, stringToNumber } from '../parse-txt';

describe('stringToNumber', () => {
  it('can parse small, integer numbers', () => {
    const input = '123';
    const parsed = stringToNumber(input);
    expect(parsed).toBe(123);
  });

  it('can parse float numbers', () => {
    const input = '123,123';
    const parsed = stringToNumber(input);
    expect(parsed).toBe(123.123);
  });

  it('can parse numbers with thousands separator', () => {
    const input = '123.123';
    const parsed = stringToNumber(input);
    expect(parsed).toBe(123123);
  });

  it('does not parse null strings', () => {
    const input = null;
    const parsed = stringToNumber(input);
    expect(parsed).toBe(NaN);
  });

  it('does not parse undefined strings', () => {
    const input = undefined;
    const parsed = stringToNumber(input);
    expect(parsed).toBe(NaN);
  });

  it('does not parse comments', () => {
    const input = '# this is a comment';
    const parsed = stringToNumber(input);
    expect(parsed).toBe(NaN);
  });

  it('can parse numbers in scientific notation', () => {
    const input = '1.23e3';
    const parsed = stringToNumber(input);
    expect(parsed).toBe(1230);
  })

  it('can parse numbers with leading whitespace', () => {
    const input = '       123';
    const parsed = stringToNumber(input);
    expect(parsed).toBe(123);
  });
});

describe('parse', () => {
  it('parses a string of numbers to a list of numbers', () => {
    const input = `123
    123
    123`;
    const list = parse(input);
    expect(list).toStrictEqual([123,123,123]);
  });

  it('returns empty for empty string', () => {
    const input = '';
    const list = parse(input);
    expect(list).toStrictEqual([]);
  });

  it('parses a string of numbers with empty lines', () => {
    const input = `123
    123
    123

    `;
    const list = parse(input);
    expect(list).toStrictEqual([123,123,123]);
  });
});


