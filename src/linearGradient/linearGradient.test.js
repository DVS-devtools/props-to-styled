import linearGradient from './linearGradient';

test('linearGradient works correctly with two values', () => {
    const topValue = '#FF00FF';
    const bottomValue = '#00FF00';
    const result = linearGradient({ linearGradient: [topValue, bottomValue] });
    expect(result).toBe(`
            background: -webkit-linear-gradient(top, ${topValue} 0%, ${bottomValue} 100%);
            background: linear-gradient(top bottom, ${topValue} 0%, ${bottomValue} 100%);
        `);
});

test('linearGradient works correctly with one value', () => {
    const topValue = '#FF00FF';
    const result = linearGradient({ linearGradient: [topValue] });
    expect(result).toBeNull();
});

test('linearGradient works correctly with no values', () => {
    const result = linearGradient({ linearGradient: [] });
    expect(result).toBeNull();
});

test('linearGradient works correctly without linearGradient prop', () => {
    const result = linearGradient({});
    expect(result).toBeNull();
});