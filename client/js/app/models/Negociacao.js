class Negociacao {
    // The constructor method is used when the class is invoked.
    constructor(data, quantidade, valor) {
        // The arguments will be used when the class is invoked, to attribute the properties properly.
        this._data = new Date( data.getTime() );
        this._quantidade = quantidade;
        this._valor = valor;

        // This method is used to freeze a class, in other words, it do not allow to change the properties latter.
        Object.freeze(this);
    }
    // Getters.
    get data() {
        return new Date(this._data.getTime());
    }
    get quantidade() {
        return this._quantidade;
    }
    get valor() {
        return this._valor; 
    }
    get volume() {
        return this._quantidade * this._valor;
    }
}