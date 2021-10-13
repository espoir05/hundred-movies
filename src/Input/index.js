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

    displayClearButton() {
        if (document.getElementById("clear") === null) {
            this.clear = document.createElement("button");
            this.clear.classList.add("id", "clear");
            const cleartext = document.createTextNode("X");
            clear.appendChild(cleartext);

            this.wrapper.appendChild(clear);
        }
    }

    hideClearButton() {
        this.clear?.remove();
    }
}
