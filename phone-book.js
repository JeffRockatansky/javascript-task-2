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

function validNumber(number) {
    let regulars = new RegExp('^[\d]{10}$');
    let numberIsValid = regulars.test(number);

    return numberIsValid;
}

function validEmail(email) {
    let regStr = '^((\\w+)((\\.\\w+)+)|\\w+)@((\\w+)((\\.\\w+)+)|\\w+)$';
    let regular = new RegExp(regStr);
    let emailIsValid = regular.test(email);

    return emailIsValid;
}

/**
 * Добавление записи в телефонную книгу
 * @param {String} phone
 * @param {String} name
 * @param {String} email
 */
exports.add = function (phone, name, email) {
    // validate number format (10 any integers) - regexp: 
    // validate name - any string, not empty, not repeating?
    // validate email - empty OR has valid email format - someone@example.com - regexp: 
};

/**
 * Обновление записи в телефонной книге
 * @param {String} phone
 * @param {String} name
 * @param {String} email
 */
exports.update = function (phone, name, email) {
    // updates phone's name and email
    // email can be empty - validate
    // name can't - validate
};

/**
 * Удаление записей по запросу из телефонной книги
 * @param {String} query
 */
exports.findAndRemove = function (query) {

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
 * @returns {Number} – количество добавленных и обновленных записей
 */
exports.importFromCsv = function (csv) {
    // Парсим csv
    // Добавляем в телефонную книгу
    // Либо обновляем, если запись с таким телефоном уже существует

    return csv.split('\n').length;
};
