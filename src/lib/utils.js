/**
 * @description Возвращает новый массив уникальных значений
 * @param {[]} array
 * @return {any[]}
 */
export function getUnique(array){
    return [...new Set(array)];
}


/**
 * @description Сформирует массив для Select из массива объектов
 * @param {[object]} array Массив объектов
 * @param {string} key Поле объектов, по значению которых формируем массив значений
 * @param {string} defaultOption Option соответсвующий value ''
 * @return {[{value: string, option: string}]}
 */
export function getOptionsSelect(array, key, defaultOption) {
    if (!array.length) return [{option: defaultOption, value: ''}];

    let arr = array.map(item => item[key]);

    arr = getUnique(arr);
    arr.sort((a,b) => a.toLowerCase() > b.toLowerCase() ? 1 : -1);
    arr.unshift(defaultOption);

    return arr.map(item =>{
        return {
            option: item,
            value: item === defaultOption ? '' : item,
        };
    });
}

/**
 * @description Вернет массив объектов для выпадающего списка с номерами классов
 * @return {[{value: string, option: string}]}
 */
export function getOptionsGradeSelect() {
    const arr = [{option: 'Все классы', value: ''}];

    for (let i = 1; i <=11 ; i++){
        const option = i.toString();
        arr.push({
            option: option,
            value: option,
        });
    }

    return arr;
}


/**
 * @description Вернет строку с классами для карточки курса на витрине
 * @param {string} string Строка из поля grade объекта course
 * @return {string}
 */
export function getGrade(string){
    if(!string.includes(';')) return `${string} класс`;
    const grades = string.split(';');
    grades.sort((a, b) => +a - +b);
    return `${grades[0]} - ${grades[grades.length - 1]} классы`;
}