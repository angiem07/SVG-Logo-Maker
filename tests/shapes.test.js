const { Triangle, Square, Circle, Text } = require("../lib/shapes");

test("Test triangle shape rendering with blue color", () => {
  const shape = new Triangle();
  const color =('blue')
  shape.setColor(color);
  expect(shape.render()).toEqual(`<polygon points="150,10 280,150 20,150" fill="${color}"/>`);
});

test("Test square shape rendering with red color", () => {
  const shape = new Square();
  const color =('red')
  shape.setColor(color);
  expect(shape.render()).toEqual(`<rect x="75" y="30" width="150" height="150" fill="${color}"/>`);
});

test("Test circle shape rendering with green color", () => {
  const shape = new Circle();
  const color =('green')
  shape.setColor(color);
  expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" fill="${color}"/>`);
});