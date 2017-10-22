'use strict';

let phoneBook = {};

phoneBook['0123456789'] = { email: 'top@kek.usa', name: 'Pepe' };
phoneBook['5553330033'] = { name: 'C' };
phoneBook['5551110011'] = { email: 'b@a.com', name: 'B' };
phoneBook['5552220022'] = { email: 'a@b.com', name: 'A' };

function formatPhone(phone) {
    let formattedPhone = '';
    formattedPhone = formattedPhone.concat('+7', ' (', phone.slice(0, 3), ') ',
        phone.slice(3, 6), '-', phone.slice(6, 8), '-', phone.slice(8, 10));

    return formattedPhone;
}

function createResultString(inputClass, toFind, counter) {
    let resultString = '';
    if (inputClass[toFind[counter]].email === '' ||
        inputClass[toFind[counter]].email === undefined) {
        resultString = inputClass[toFind[counter]].name.concat(', ', formatPhone(toFind[counter]));

        return resultString;
    }
    resultString = inputClass[toFind[counter]].name.concat(', ', formatPhone(toFind[counter]),
        ', ', inputClass[toFind[counter]].email);

    return resultString;
}

function searchEngine(query, searchSpace) {
    let searchEngineResult = [];
    let i = 0;
    for (let key in searchSpace) {
        if (key.toLowerCase().indexOf(query.toLowerCase()) !== -1 ||
        (searchSpace[key].email && searchSpace[key].email.toLowerCase().indexOf(query.toLowerCase()) !== -1) ||
        (searchSpace[key].name.toLowerCase().indexOf(query.toLowerCase()) !== -1)) {
            searchEngineResult[i] = key;
            i++;
        }
    }

    return searchEngineResult;
}

function sortObject(inputObject) {
    let bookSortable = [];
    let objectKeys = [];
    objectKeys = inputObject.keys();

    for (let i = 0; i < objectKeys.length; i++) {
        bookSortable[i][0] = objectKeys[i];
        bookSortable[i][1] = inputObject[objectKeys[i]];
    }

    bookSortable.sort(function (a, b) {
        return (a[1].name > b[1].name) ? 1 : ((b[1].name > a[1].name) ? -1 : 0);
    });

    let outputObject = {};

    for (let i = 0; i < objectKeys.length; i++) {
        outputObject[bookSortable[i][0]] = bookSortable[i][1];
    }

    return outputObject;
}

function find(query) {
    let searchResult = [];
    let bookSorted = sortObject(phoneBook);

    if (query === '') {

        return searchResult;
    } else if (query === '*') {
        let toFind = Object.keys(bookSorted);
        let i = 0;
        for (i; i < toFind.length; i++) {
            searchResult[i] = createResultString(bookSorted, toFind, i);
        }

        return searchResult;
    }

    let toFind = searchEngine(query, bookSorted);
    let i = 0;
    for (i; i < toFind.length; i++) {
        searchResult[i] = createResultString(bookSorted, toFind, i);
    }

    return searchResult;
}

console.log(find('*'));
