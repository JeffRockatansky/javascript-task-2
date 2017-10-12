'use strict';

/**
 * Сделано задание на звездочку
 * Реализован метод importFromCsv
 */
exports.isStar = true;

/**
 * Телефонная книга
 */
var phoneBook = {};

function validPhone(phone) {
    let regular = new RegExp('^\\d{10}$');
    let phoneIsValid = regular.test(phone);

    return phoneIsValid;
}

function validName(name) {
    if (typeof name === 'string' && name !== '') {
        return true;
    }

    return false;
}

function validEmail(email) {
    if (email === '' || email == null) {
        return true;
    } else {
        let regular = new RegExp('^((\\w+)((\\.\\w+)+)|\\w+)@((\\w+)((\\.\\w+)+)|\\w+)$');
        let emailIsValid = regular.test(email);
    
        return emailIsValid;
    }
}

function formatPhone(phone) {
    let formattedPhone = '';
    // eslint-disable-next-line max-len
    formattedPhone = formattedPhone.concat('+7', ' (', phone.substring(0, 3), ') ', phone.substring(3, 6), '-', phone.substring(6, 8), '-', phone.substring(8, 10));
    return formattedPhone;
}

/**
 * Добавление записи в телефонную книгу
 * @param {String} phone
 * @param {String} name
 * @param {String} email
 */
exports.add = function (phone, name, email) {
    if (!(phone in phoneBook) && validPhone(phone) && validName(name) && validEmail(email)) {
        phoneBook[phone] = { name, email };

        return true;
    }

    return false;
    // validate phone format (10 any integers) 
    // validate name - any string, not empty
    // validate email - empty OR has valid email format - someone@example.com 
};

/**
 * Обновление записи в телефонной книге
 * @param {String} phone
 * @param {String} name
 * @param {String} email
 */
exports.update = function (phone, name, email) {
    if (phone in phoneBook && validName(name) && validEmail(email)) {
        phoneBook[phone] = { name, email };

        return true;
    }

    return false;

    // updates phone's name and email
    // email can be empty - validate
    // name can't - validate
};

/**
 * Удаление записей по запросу из телефонной книги
 * @param {String} query
 */
exports.findAndRemove = function (query) {
    let counter = 0;
    
    return counter;
    /* 
    На вход принимает запрос в виде строки
    Находит (смотри __find__) и удаляет все найденные записи
    Возвращает число удаленных записей
    */
};

/**
 * Поиск записей по запросу в телефонной книге
 * @param {String} query
 */
exports.find = function (query) {

    /*
    На вход принимает запрос в виде строки
    Ищет вхождение этой строки хотя бы в одно из полей «Телефон», «Имя» и «Электронную почту»
    Возвращает отсортированный по «Имени» массив строк в формате name, phone, email
    «Имя» и «Электронную почту» выводит как есть, а «Телефон» в формате +7 (555) 666-77-88
    Пустой запрос не должен ничего находить
    Запрос «*» находит все записи
    */
};

/**
 * Импорт записей из csv-формата
 * @star
 * @param {String} csv
 * @returns {phone} – количество добавленных и обновленных записей
 */
exports.importFromCsv = function (csv) {
    // Парсим csv
    // Добавляем в телефонную книгу
    // Либо обновляем, если запись с таким телефоном уже существует

    return csv.split('\n').length;
};
