class AwesomeComponent extends HTMLElement {
  static observedAttributes = ["color", "size", "font"];
  constructor() {
    super();

    console.log("Constructor.");

    this.innerHTML = `<h1>Ini adalah Element yang akan tampil</h1>`;
  }

  connectedCallback() {
    console.log("Custom element ditambahkan ke halaman.");
  }

  disconnectedCallback() {
    console.log("Custom element disingkirkan dari halaman.");
  }

  adoptedCallback() {
    console.log("Custom element dipindahkan ke halaman baru.");
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} telah diubah.`);
  }
}

// define awesome element
customElements.define("awesome-component", AwesomeComponent);

//Paragraph COMPONENTS
class myParagraphComponent extends HTMLElement {
  static observedAttributes = ["color", "size", "font"];
  constructor() {
    super();

    this._color = this.getAttribute("color");
    this._size = this.getAttribute("size");
    this._size = this.getAttribute("font");

    //buat element style untuk merubah style
    this._style = document.createElement("style");
  }

  connectedCallback() {
    console.log("Callback Connected");

    this.render();
  }

  //update stylenya

  updateStyle() {
    this._style.textContent = `
    ${this.localName}{
        color: ${this._color};
        font-size: ${this._size}px;
        font-family: ${this._font};
    }

    `;
  }

  render() {
    this.updateStyle();

    this.innerHTML = `
    ${this._style.outerHTML}
    Aku adalah custom element paragraf dengan atribut
    
    color = \"${this._color}\" dan size = \"${this._size}\"
    
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Atribut ${name} telah diubah`);
    console.log(`Nilai lama adalah ${oldValue} `);
    console.log(`Nilai baru adalah ${newValue}`);

    // Ubah nilai atribut yang telah disimpan
    this[`_${name}`] = newValue;
    this.render();
  }
}

customElements.define("my-paragraph", myParagraphComponent);
