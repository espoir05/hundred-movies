import Screen from "../Screen";
import Input from "../Input";
import "./styles.css";

export default class SearchScreen {
  constructor() { }
  render() {
    const content = document.createElement("div");

    const input = new Input({
      title: "search",
      onChange: (value) => this.fetchOmdb(value),
    });

    content.appendChild(input.render());

    const screen = new Screen({ title: "Search", children: content });
    return screen.render();
  }

  fetchOmdb(value) {
    var apiKey = "d3947100";

    fetch(`http://www.omdbapi.com/?i=${value}&apikey=${apiKey}`);
  }
}