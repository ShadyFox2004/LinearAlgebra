import { Vector2d } from "../src/Vector2d";

test("should construct a vector", () => {
    let result = new Vector2d(1,2);
    expect(result.toString()).toBe("Vector2d(1, 2)");
});

test("should add the two vectors", () => {
    let result = new Vector2d(2, 1).add(new Vector2d(1, 2));
    expect(result).toEqual(new Vector2d(3, 3));
});

test("should return the dot product of two vectors", () => {
    let result = new Vector2d(2,2).dot(new Vector2d(3,3));
    expect(result).toBe(12);    
});

test("should project the vector(1,0) onto the other vector", () => {
    let result = new Vector2d(1,0).project(new Vector2d(0,1));
    expect(result).toEqual(new Vector2d(0, 0));
});

test("should return the inverse of the vector", () => {
    let result = new Vector2d(2, 1).inverse();
    expect(result).toEqual(new Vector2d(-2, -1));    
});

test("should return if the vector is composeWith vector", () => {
    let result = new Vector2d(2 ,4).isComposed(new Vector2d(1,2));
    expect(result).toBe(true);
});