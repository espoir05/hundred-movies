import Screen from "../Screen";
import Input from "../Input";
import "./style.css";

export default class SearchScreen extends Screen {
  constructor() {
    const input = new Input({ title: "search" });

    return super({ title: "Search", children: input.render() });
  }
}
