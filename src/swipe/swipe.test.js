import swipe from './swipe';

test('swipe works correctly with true', () => {
    const result = swipe({ swipe: true });
    expect(result).toBe(`
            display: flex;
            flex: 1 1 auto;
            max-width:100%;
            overflow:auto;
            -webkit-overflow-scrolling: touch;
            -ms-overflow-style: none;    
            justify-content:space-between;
            &::-webkit-scrollbar {
                display: none;
                background:transparent;
            }
        `);
});

test('swipe works correctly with false', () => {
    const result = swipe({ swipe: false });
    expect(result).toBeNull();
});

test('swipe works correctly without swipe prop', () => {
    const result = swipe({});
    expect(result).toBeNull();
});