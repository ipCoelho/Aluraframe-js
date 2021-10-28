class NegociacaoController {
    // Constructor method.
    constructor() {
        let $ = document.querySelector.bind(document);

        this._inputData = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        /* $ explanation -> 
            Assigning a method to a variable...
            but, there's a problem, whenever a method is assignied to a variable, it loses it property of being a method, and becomes a function.
    
            So, in this case the 'document.querySelector' becomes just 'querySelector()' and it does not carry the 'document' and it isn't associated to the document(html) anymore. The property '.this' does not work, but there is a solution that we can use:
    
            document.querySelector.bind(document);
    
            The method bind() can be used to 'append' a object before the element.
            So, we are using the querySelector from the object 'document', to keep the object 'document' on the sentence we 'bind' it using the method 'bind()'.
            
            bind meaning = tie or fasten (something) tighly.
        */
    }


    adicionar(event) {
        event.preventDefault();

        /* ... explanation ->
            Spreed Operator 
            syntax: '...'

            The Spreed Operator is a operator that can used when passing a array as parameter to a function or Class.

            "It takes in an iterable (e.g an array) and expands it into individual elements. The spread operator is commonly used to make shallow copies of JS objects. Using this operator makes the code concise and enhances its readability."  
        */
        /* .split() ->
            .split() is a method that recieves a char or string as parameter, and it separes the object string, into pieces and storage it in an array. 
        */
        let data = new Date(...
            this._inputData.value.split('-').map((item, indice) => item - indice % 2)
        );
        console.log(data);
        data.map()
        
        let negociacao = new Negociacao(data, this._inputQuantidade.value, this._inputValor.value);
        console.log(negociacao);
    }

}