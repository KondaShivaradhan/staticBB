class Content extends HTMLElement {
  constructor() {
    super();
    this.loadResources();
  }

  async loadResources() {
    const path = "/Components/Content/";
    try {
      const htmlResponse = await fetch(path + "content.html");
      const htmlContent = await htmlResponse.text();

      const cssResponse = await fetch(path + "styles.css");
      const cssContent = await cssResponse.text();

      const jsResponse = await fetch(path + "script.js");
      const jsContent = await jsResponse.text();

      this.innerHTML = htmlContent;
      const styleElement = document.createElement("style");
      styleElement.textContent = cssContent;
      this.appendChild(styleElement);
      const scriptElement = document.createElement("script");
      scriptElement.textContent = jsContent;
      this.appendChild(scriptElement);
    } catch (error) {
      console.error("Error loading resources:", error);
    }
  }
}
customElements.define("my-content", Content);
