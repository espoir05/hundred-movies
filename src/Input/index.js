import "./styles.css";

export default class Input {
    constructor(props) {
        this.props = props;
    }

    render() {
        const { title } = this.props;

        this.content = document.createElement("div");
        this.input = document.createElement("input");
        this.input.setAttribute("type", "text");
        this.input.classList.add(title);

        document.addEventListener("keyup", (event) => {
            const inputValue = event.target.value.trim();
            this.props.onChange(inputValue);
            inputValue.length > 0
                ? this.displayClearButton()
                : this.hideClearButton();
        });

        this.content.appendChild(this.input);

        return this.content;
    }

    displayClearButton() {
        if (document.getElementById("clear") === null) {
            this.clear = document.createElement("button");
            this.clear.setAttribute("id", "clear");
            this.clear.classList.add("clear");
            const clearText = document.createTextNode("✖️");

            this.clear.appendChild(clearText);
            this.clear.addEventListener("click", () => this.handleClearClick());

            this.content.appendChild(this.clear);
        }
    }

    handleClearClick = () => {
        this.input.value = "";
        this.hideClearButton();
    };

    hideClearButton() {
        this.clear?.removeEventListener("click", () => this.handleClearClick());
        this.clear?.remove();
    }
}