export default class Greetings {
  constructor(name) {
    this.name = name;
  }

  write = () => {
    return `greetings ${this.name}`;
  };
}
