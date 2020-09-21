import md5 from 'crypto-js/md5';

/**
 * @description Вернет ID пользователя. ID является md5-хешем от строки firstName + lastName + phone
 * @param {object} contact
 * @return {string}
 */
export function generateID(contact) {
    return md5(contact.firstName + contact.lastName + contact.phone).toString();
}