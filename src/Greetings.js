export default class Greetings {
  constructor(name) {
    this.name = name;
  }

  write = () => `greetings ${this.name}`;
}
