
    interface IPerson {
        name: string;
        surname: string;
        age: number;
        role: string;
        // TODO: dodać pola: imię (string), nazwisko (string), wiek (number) oraz rola (string)
    }
    
    const users: IPerson[] = [
        { name: 'John', surname: 'Smith', age: 25, role: 'user'},
        { name: 'Adam', surname: 'Johnson', age: 35, role: 'user'},
        { name: 'Andy', surname: 'Cole', age: 18, role: 'user'},
    ]
    
    const admins: IPerson[] = [
        { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin'},
        { name: 'Adam', surname: 'Terry', age: 24, role: 'admin'},
    ]
    
    function logPerson(person: IPerson) {
        console.log(this.name + this.surname + this.age + this.role);
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
    }
    
    function filterPersons(persons: IPerson[], criteria: object): IPerson[] {
        const criteriaKey = Object.keys(criteria)[0];
        const criteriaValue = criteria[criteriaKey];
        return persons.filter(person => person[criteriaKey] === criteriaValue);
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
    }


    // 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
    const logPersoneResponce = [...users, ...admins].forEach(user => logPerson(user));
    console.log(logPersoneResponce);

    // 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
    const usersAndAdmins = [...users, ...admins];
    console.log(usersAndAdmins.forEach(user => logPerson(user)));

    // 3. Wypisać osoby powyżej 25 lat (patrz operator filter)
    console.log(usersAndAdmins.filter(item => item.age > 25));

    // 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
    console.log(filterPersons(usersAndAdmins, {name: 'Adam'}));
