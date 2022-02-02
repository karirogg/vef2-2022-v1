import { describe, expect, it } from '@jest/globals';
import { calculateStats } from '../src/calculate-stats';

describe('stats', () => {
  it('can describe simple statistics of a short array with an odd number of elements', () => {
    const input = [3,6,2,4,3];

    const stats = calculateStats(input);

    expect(stats.max).toBe(6);
    expect(stats.min).toBe(2);
    expect(stats.mean).toBeCloseTo(3.6);
    expect(stats.median).toBe(3);
    expect(stats.range).toStrictEqual([2,6]);
    expect(stats.variance).toBeCloseTo(2.3);
    expect(stats.std).toBeCloseTo(1.516575);
  });

  it('can describe simple statistics of a short array with an even number of elements and negative numbers', () => {
    const input = [-0.1,0.6, -1.1, 7.2, 5,7];

    const stats = calculateStats(input);

    expect(stats.max).toBeCloseTo(7.2);
    expect(stats.min).toBeCloseTo(-1.1);
    expect(stats.mean).toBeCloseTo(3.1);
    expect(stats.median).toBeCloseTo(2.8);
    expect(stats.range).toStrictEqual([-1.1, 7.2]);
    expect(stats.variance).toBeCloseTo(13.952);
    expect(stats.std).toBeCloseTo(3.735238);
  })
});