import './styles.css';

export default class Input {
    constructor(props) {
        this.props = props;
    }

    render() {
        this.wrapper = document.createElement("div");

        const input = document.createElement("input");
        input.setAttribute("type", "text");
        input.classList.add("search");

        input.addEventListener("keyup", (event) => {
            input.value = input.value.trim();
            const hasValue = input.value.length > 0;

            hasValue
                ? this.displayClearButton()
                : this.hideClearButton();
        })

        this.wrapper.appendChild(input);

        return this.wrapper;
    }

    handleClearClick = () => {
        this.input.value = "";
        this.hideClearButton();
    }

    displayClearButton() {
        if (document.getElementById("clear") === null) {
            this.clear = document.createElement("button");
            this.clear.setAttribute("id", "clear");
            this.clear.classList.add("clear");
            const cleartext = document.createTextNode("X");
            this.clear.appendChild(cleartext);

            this.wrapper.appendChild(this.clear);

            this.clear.addEventListener("click", this.handleClearClick);
        }
    }

    hideClearButton() {
        this.clear?.removeEventListener("click", this.handleClearClick)
        this.clear?.remove();
    }
}
