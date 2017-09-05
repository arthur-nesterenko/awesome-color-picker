import Color from './../../src/lib/color';

test('Check normalize function', () => {

    const colors = ['green', 'red', '#fff', 'yellow', 'white']
    expect(Color.normalize(colors)).toBe(typeof 'object');

    console.log(Color.normalize(colors));

});