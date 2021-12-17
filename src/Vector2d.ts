export class Vector2d {
    private x: number;
    private y: number;


    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    /**
     * @returns the x of the vector.
     */
    public getX(): number {
        return this.x;
    }

    /**
     * @returns the y of the vector.
     */
    public getY(): number {
        return this.y;
    }

    /**
     * Do the math for the dot product of this vector with the given vector.
     * @param vector the other vector.
     * @returns the dot product.
     */
    public dot(vector: Vector2d): number {
        return this.x * vector.getX() + this.y * vector.getY();
    }

    /**
     * Do the math for the addition of this vector with the given vector.
     * @param vector the other vector
     * @return the result of the addition.
     */
    public add(vector: Vector2d): Vector2d {
        return new Vector2d(this.x + vector.getX(), this.y + vector.getY());
    }

    /**
     * Do the math to inverse the vector.
     * @return the inverse vector.
     */
    public inverse(): Vector2d {
        return new Vector2d(-this.x, -this.y);
    }

    /**
     * Muliply a vector by a scalar.
     * @param scalar the scalar to multiply this vector by.
     * @returns the result of the multiplication.
     */
    public scalar(scalar: number) {
        return new Vector2d(this.x * scalar, this.y * scalar);
    }


    /**
     * Project the vector onto the given vector.
     * @param vector the vector to project onto.
     * @return the vector that is the result the projection.
     */
    public project(vector: Vector2d): Vector2d {
        return vector.scalar(this.dot(vector) / vector.dot(vector));
    }

    /**
     * Return if the vector is depedant of the given vector.
     * @returns if the vector is dependent of the given vector.
     */
    public isComposed(vector: Vector2d): boolean {
        return (this.x / vector.x == this.y / vector.y);
    }

    public toString(): string {
        return `Vector2d(${this.x}, ${this.y})`;
    }
    
}