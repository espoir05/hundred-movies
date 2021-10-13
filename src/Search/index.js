import Screen from "../Screen";
import Input from "../Input";
import "./styles.css";

export default class SearchScreen extends Screen {
  constructor() {
    const input = new Input({ title: "search" });

    return super({ title: "Search", children: input.render() });
  }
}
