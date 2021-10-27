class NegociacaoController {
    
    constructor() {
        
        let $ = document.querySelector.bind(document);
        /*  $ explanation -> 
    
            Assigning a method to a variable...
            but, there's a problem, whenever a method is assignied to a variable, it loses it property of being a method, and becomes a function.
    
            So, in this case the 'document.querySelector' becomes just 'querySelector()' and it does not carry the 'document' and it isn't associated to the document(html) anymore. The property '.this' does not work, but there is a solution that we can use:
    
            document.querySelector.bind(document);
    
            The method bind() can be used to 'append' a object before the element.
            So, we are using the querySelector from the object 'document', to keep the object 'document' on the sentence we 'bind' it using the method 'bind()'.
            
            bind meaning = tie or fasten (something) tighly.
        */
        this.inputData = $('#data');
        this.inputQuantidade = $('#quantidade');
        this.inputValor = $('#valor');
    }
    adicionar(event) {
        event.preventDefault();
        
        // HTML's elements imports.
        console.log(this.inputData.value);
        console.log(this.inputQuantidade.value);
        console.log(this.inputValor.value);
    }

}