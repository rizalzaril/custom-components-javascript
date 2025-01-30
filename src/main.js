/* Silakan impor kode di sini */

// image-figure.js
class ImageFigure extends HTMLElement {
  constructor() {
    super();

    // Panggil method render
    this.render();
  }

  render() {
    this.innerHTML = `
        <figure>
          <img src="src/logo-g.jpg" alt="Dicoding Logo G" width="200px">
          <figcaption>Huruf g dalam logo Dicoding</figcaption>
        </figure>
      `;
  }
}

// Definisikan custom element
customElements.define("image-figure", ImageFigure);

class TitleComponent extends HTMLElement {
  constructor() {
    super();

    this.renderTitleComponent();
  }

  renderTitleComponent() {
    this.innerHTML = `
    
    <h1>Belajar Custom Element</h1>
    
    `;
  }
}

// Method define membutuhkan dua buah parameter wajib, yaitu nama custom element dan class element-nya.
// define custom elementnya
customElements.define("title-component", TitleComponent);

// CONNECTED WITH CALLBACK

class MyElement extends HTMLElement {
  ConnectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    window.addEventListener("keydown", () => {});
  }
}

// DICONNECTED CALLBACK

class YourElement extends HTMLElement {
  disconnectedCallback() {
    window.removeEventListener("keydown", () => {});
  }
}

// ATRRIBUTE CHANGE CALLBACK

class AttrComponent extends HTMLElement {
  /**
   * Kita bisa menetapkan lebih dari satu attribute yang diamati.
   * Caranya adalah memisahkan nama attribute menggunakan koma.
   * Contoh: return ['caption', 'title', 'src', .....]
   */

  static get observedAttributes() {
    return ["caption"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Attribute ${name} telah di ubah`);
  }
}
