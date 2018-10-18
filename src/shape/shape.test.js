import shape from './shape';

test('shape works correctly with "circle"', () => {
    const result = shape({ shape: 'circle' });
    expect(result).toBe('border-radius: 100%;');
});

test('shape works correctly with "square"', () => {
    const result = shape({ shape: 'square' });
    expect(result).toBe('border-radius: 0;');
});

test('shape works correctly with "none"', () => {
    const result = shape({ shape: 'none' });
    expect(result).toBeNull();
});

test('shape works correctly without shape prop', () => {
    const result = shape({});
    expect(result).toBeNull();
});