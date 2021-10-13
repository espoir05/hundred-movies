import Screen from "../Screen";
import Input from "../Input";
import "./styles.css";

export default class SearchScreen {
  constructor() { }
  render() {
    this.content = document.createElement("div");

    const input = new Input({
      title: "search",
      onChange: this.fetchOmdb,
    });

    this.content.appendChild(input.render());

    this.resultList = document.createElement("ul");
    this.content.appendChild(this.resultList);

    const screen = new Screen({ title: "Search", children: this.content });
    return screen.render();
  }

  fetchOmdb = (value) => {
    var apiKey = "b63da2a6";

    fetch(`http://www.omdbapi.com/?apikey=${apiKey}&s=${value}&type=movie`)
      .then((response) => response.json())
      .then(this.displayResultList);
  };

  displayResultList = (result) => {
    var ul = this.resultList.getElementsByTagName("li");
    ul && [...ul].map((li) => li.remove());

    const { Search: movies } = result;

    if (movies) {
      movies.forEach(({ Title: title, Year: year }) => {
        const element = document.createElement("li");
        element.classList.add("result");

        const elementText = document.createTextNode(title);
        element.appendChild(elementText);

        this.resultList.appendChild(element);
      });
    }
  };
}