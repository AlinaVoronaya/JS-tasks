let calculator = {
  read() {
    this.a = +prompt('Введите число:', '');
    this.b = +prompt('Введите второе число:', '');
  },
  sum() {
  return this.a + this.b;
  },
  mul() {
  return this.a * this.b;
  }
};