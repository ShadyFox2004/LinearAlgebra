import { Vector2d } from './../src/Vector2d';
import { Line2d } from './../src/Line2d';

test('should make a line', () => {
    let result = new Line2d(new Vector2d(2,2), new Vector2d(2,2));    
    expect(result.vectorial()).toBe("[2 2] + k[2 2]");
});

