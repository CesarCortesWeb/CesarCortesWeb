class MiFooter extends HTMLElement{
    connectedCallback(){
        this.innerHTML = /* html */
        `Copyright &copy; 2021 Hernández Cortés Julio César.`;
    }
}

customElements.define("mi-footer", MiFooter);