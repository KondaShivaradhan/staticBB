const ComponentRootPath = "Components/"
const ComponentsPaths = {
    footer: ComponentRootPath + "footer.html",
    sidebar: ComponentRootPath + "sidebar.html",
    banner: ComponentRootPath + "banner.html"
}
const componentNames = Object.keys(ComponentsPaths);

class CustomComponent extends HTMLElement {
    async loadHTMLFile(filePath) {
        try {
            const response = await fetch(filePath);

            if (!response.ok) {
                throw new Error(`Failed to fetch ${filePath}`);
            }

            const htmlContent = await response.text();
            this.innerHTML = htmlContent;
        } catch (error) {
            console.error(error);
        }
    }
}

// Create components dynamically

componentNames.forEach((name) => {
    const elementName = `my-${name}`;
    const CustomElement = class extends CustomComponent {
        connectedCallback() {
            this.loadHTMLFile(ComponentsPaths[name]);
        }
    };
    customElements.define(elementName, CustomElement);
});
