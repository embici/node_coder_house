class Persona{
    #user

    constructor(opts){
        this.#user = opts
        this.#user.fullname = `${this.#user.name} ${this.#user.lastName}`;
        
    }

    getValue = key => {
        const { [key]: returnValue } = this.#user
        return returnValue
    }

    getFullName = () => this.getValue('fullname');

    addMascota = (petName = 'Firulais') => {
        const pet = this.getValue('pets');
        pet.push(petName);
    }
    countMascotas = () => this.getValue('pets').length;
    
    addBook = ({name = 'Lorem',author = 'Ipsum'}) => {
        const books = this.getValue('books');
        books.push({name,author});
    }

    getBookNames = () => this.getValue('books').map(book => book.name);
}

const userOpts = { 
    'name': 'Esteban',
    'lastName': 'Montero',
    'books': [{
        'name': 'Lord of the Rings',
        'author': 'Lorem'
    },
    {
        'name': 'Harry Potter',
        'author': 'Lorem'
    }],
    'pets': ['Perro','Vaca','Gallina']
};

const p = new Persona(userOpts);

p.addMascota('Caballo');
p.addBook({name:'Hello World', author:'John Doe', pages: 7});
console.log(p.getFullName())
console.log(p.countMascotas())
console.log(p.getBookNames());