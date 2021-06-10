var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var users = [
    { name: 'John', surname: 'Smith', age: 25, role: 'user' },
    { name: 'Adam', surname: 'Johnson', age: 35, role: 'user' },
    { name: 'Andy', surname: 'Cole', age: 18, role: 'user' },
];
var admins = [
    { name: 'Matthew', surname: 'Ryan', age: 43, role: 'admin' },
    { name: 'Adam', surname: 'Terry', age: 24, role: 'admin' },
];
function logPerson(person) {
    console.log(person.name + " " + person.surname + " " + person.age + " " + person.role);
    // TODO: dodać wypisywanie na konsoli danych osoby: "imię nazwisko, wiek, rola"
}
function filterPersons(persons, criteria) {
    var criteriaKey = Object.keys(criteria)[0];
    var criteriaValue = criteria[criteriaKey];
    return persons.filter(function (person) { return person[criteriaKey] === criteriaValue; });
    // TODO: zaimplementować funkcję, która przefiltruje tablicę persons za pomocą predykatu criteria
}
// 1. Przy pomocy funkcji logPerson wypisać osoby z tablicy users i admins (patrz foreach)
console.log('wypisać osoby z tablicy users i admins:');
users.forEach(function (el) { return logPerson(el); });
admins.forEach(function (el) { return logPerson(el); });
// 2. Złączyć tablice users i admins i wypisać zawartość złączonej tablicy na konsoli (patrz operator spread)
console.log('spread:');
var usersAndAdmins = __spreadArray(__spreadArray([], users), admins);
console.log(usersAndAdmins.forEach(function (el) { return logPerson(el); }));
// +++3. Wypisać osoby powyżej 25 lat (patrz operator filter)
console.log('osoby powyżej 25 lat:');
console.log(usersAndAdmins.filter(function (item) { return item.age > 25; }));
// +++ 4. Wypisać osoby o imieniu Adam (zaimplementować funkcję filterPersons) -> const filtered = filterPersons(persons, { name: 'Adam' });
console.log('osoby o imieniu Adam:');
console.log(filterPersons(usersAndAdmins, { name: 'Adam' }));
