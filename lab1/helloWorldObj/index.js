var Person = /** @class */ (function () {
    function Person(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    Person.prototype.show = function () {
        document.body.innerHTML = "Witaj " + this.name + " " + this.surname + " mam " + this.age + " lat.";
    };
    return Person;
}());
var John = new Person("John", "Blake", 11);
John.show();
