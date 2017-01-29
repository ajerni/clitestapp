"use strict";
var Person = (function () {
    function Person(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    return Person;
}());
exports.Person = Person;
//diese Person Klasse wird gebraucht um die json Struktur der Web API zu "mappen" -> siehe https://andiapi.apispark.net/v1/persons
//# sourceMappingURL=person.module.js.map