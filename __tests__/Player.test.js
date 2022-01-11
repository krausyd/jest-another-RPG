const Player = require('../lib/Player');
const Potion = require('../lib/Potion');

jest.mock('../lib/Potion');

test('creates a player object', () => {
    const player = new Player('Dave');
  
    expect(player.name).toBe('Dave');
    expect(player.health).toEqual(expect.any(Number));
    expect(player.health).toBeGreaterThanOrEqual(95);
    expect(player.health).toBeLessThan(104);
    expect(player.strength).toEqual(expect.any(Number));
    expect(player.strength).toBeGreaterThanOrEqual(7);
    expect(player.strength).toBeLessThan(12);
    expect(player.agility).toEqual(expect.any(Number));
    expect(player.agility).toBeGreaterThanOrEqual(7);
    expect(player.agility).toBeLessThan(12);
    expect(player.inventory).toEqual(expect.arrayContaining([expect.any(Object)]));
});