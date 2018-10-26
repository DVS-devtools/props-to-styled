import filter from './filter';

test('filter works correctly with one value', () => {
    const value = 'drop-shadow(1px 0px 3px rgba(0,0,0,0.3))';
    const result = filter({ filter: value });
    expect(result).toBe(`filter: ${value}; -webkit-filter: ${value};`);
});

test('filter works correctly without filter prop', () => {
    const result = filter({});
    expect(result).toBeNull();
});