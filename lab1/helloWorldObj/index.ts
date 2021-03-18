class Person {
    name: string;
    surname: string;
    age: number;

    constructor(name: string, surname: string, age: number ) {
        this.name = name;
        this.surname = surname;
        this.age = age
      }

    show() {
        document.body.innerHTML = "Witaj " + this.name + " " + this.surname + " mam " + this.age + " lat.";
      }
    }

let John = new Person("John", "Blake", 11);
John.show();
