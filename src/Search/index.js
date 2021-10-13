import './styles.css';
import Screen from "../Screen";

export default class SearchScreen extends Screen {
  constructor() {

    const content = document.createElement("input");
    const input = document.createTextNode("input");
    input.setAttribute("type", "text");
    input.classList.add("search");

    content.appendChild(input);

    super({ title: "Search", children: content });
  }
}
