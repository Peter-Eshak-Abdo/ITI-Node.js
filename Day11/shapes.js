class Shape {
  area() {
    return 0;
  }
  perimeter() {
    return 0;
  }
  toString() {
    return `Area: ${this.area()} - Perimeter: ${this.perimeter()}`;
  }
}
export function a(){
  return "HELLO";
}
export class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    return 2 * (this.width + this.height);
  }
  toString() {
    return `Rectangle: Width = ${this.width}, Height = ${this.height}, ${super.toString()}`;
  }
}

export class Square extends Shape {
  constructor(side) {
    super();
    this.side = side;
  }
  area() {
    return this.side ** 2;
  }
  perimeter() {
    return 4 * this.side;
  }
  toString() {
    return `Square: Side = ${this.side}, ${super.toString()}`;
  }
}

export class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
  toString() {
    return `Circle: Radius = ${this.radius}, ${super.toString()}`;
  }
}
