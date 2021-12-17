import { Vector2d } from './Vector2d';

export class Line2d {

    private point: Vector2d;
    private director: Vector2d;

    constructor(point: Vector2d, director: Vector2d) {
        this.point = point;
        this.director = director;
    }

    /**
     * Returns the point of the line.
     * @returns the point at witch the vector starts.
     */
    public getPoint(): Vector2d {
        return this.point;
    }

    /**
     * Sets the point of the line.
     */
    public setPoint(point: Vector2d) {
        this.point = point;
    }

    /**
     * Returms the director of the line.
     * @returns the direction of the line.
     */
    public getDirection(): Vector2d {
        return this.director;
    }

    /**
     * Sets the direction of the line.
     */
    public setDirection(director: Vector2d) {
        this.director = director;
    }

    /**
     * Check if the line is parallel to the other line.
     * @param other the other line
     * @returns true if the line is parallel to the other line
     */
    public isParallel( other: Line2d ): boolean {
        return this.director.isComposed(other.director);
    }
}