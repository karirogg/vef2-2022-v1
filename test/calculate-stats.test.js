import { describe, expect, it } from '@jest/globals';
import { calculateStats } from '../src/calculate-stats';

describe('stats', () => {
  it('can describe simple statistics of a short array with an odd number of elements', () => {
    const input = [3,6,12,10,3];

    const stats = calculateStats(input);

    expect(stats.max).toBe(12);
    expect(stats.min).toBe(3);
    expect(stats.sum).toBe(34);
    expect(stats.mean).toBeCloseTo(6.8);
    expect(stats.median).toBe(6);
    expect(stats.range).toStrictEqual([3,12]);
    expect(stats.variance).toBeCloseTo(16.7);
    expect(stats.std).toBeCloseTo(4.086563);
  });

  it('can describe simple statistics of a short array with an even number of elements and negative numbers', () => {
    const input = [-0.1,0.6, -1.1, 7.2, 5,7];

    const stats = calculateStats(input);

    expect(stats.max).toBeCloseTo(7.2);
    expect(stats.min).toBeCloseTo(-1.1);
    expect(stats.sum).toBeCloseTo(18.6);
    expect(stats.mean).toBeCloseTo(3.1);
    expect(stats.median).toBeCloseTo(2.8);
    expect(stats.range).toStrictEqual([-1.1, 7.2]);
    expect(stats.variance).toBeCloseTo(13.952);
    expect(stats.std).toBeCloseTo(3.735238);
  })

  it('can describe statistics of an empty array', () => {
    const input = [];
    const stats = calculateStats(input);

    expect(stats.max).toBe(NaN);
    expect(stats.min).toBe(NaN);
    expect(stats.sum).toBe(NaN);
    expect(stats.mean).toBe(NaN);
    expect(stats.median).toBe(NaN);
    expect(stats.range).toBe(NaN);
    expect(stats.variance).toBe(NaN);
    expect(stats.std).toBe(NaN);
  })
});
