export class Person {
    constructor(
        public id: string,
        public name: string,
        public age: number
        ){}
}

//diese Person Klasse wird gebraucht um die json Struktur der Web API zu "mappen" -> siehe https://andiapi.apispark.net/v1/persons
