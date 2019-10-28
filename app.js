import baseClass from "./baseClass.js";

class codeOne extends HTMLElement {
    constructor() {
        super();

        this._age = this.getAttribute('age');
        this.name = this.getAttribute('name')

        this.base = new baseClass();
    }

    connectedCallback() {
        this.fetchFromServer();

        this.innerHTML = `
            <h1>Hello! ${this.name} | age: ${this.age}</h1>
        `;
    }

    async fetchFromServer() {
        const response = await fetch("./message.json");
        const json = await response.json();
        const { message } = json;

        console.log(message);
        console.log(this.base.start());
    }

    set age(x) {
        this._age = x;
    }
    get age() {
        return this._age;
    }
}

customElements.define("code-one", codeOne);