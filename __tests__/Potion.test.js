const Potion = require('../lib/Potion');

test('creates a health potion object', () => {
    const potion = new Potion('health');
  
    expect(potion.name).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
    expect(potion.value).toBeGreaterThanOrEqual(10);
    expect(potion.value).toBeLessThan(40);
});

test('creates a non health potion object', () => {
    const potion = new Potion('poison');
  
    expect(potion.name).toBe('poison');
    expect(potion.value).toEqual(expect.any(Number));
    expect(potion.value).toBeGreaterThanOrEqual(5);
    expect(potion.value).toBeLessThan(12);
});

test('creates a random potion object', () => {
    const potion = new Potion();
  
    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});