const fs = require('fs');
const path = require('path');

const contactsPath = './backend/contacts';


function getContacts() {
    let fileNames = fs.readdirSync(contactsPath);
    fileNames = fileNames.filter(item => item.match(/\.json$/));
    let result = [];

    //проверка на файл
    const isFile = fileName => {
        return fs.lstatSync(fileName).isFile();
    };

    fileNames.forEach(item=>{
        const fileName = path.join(contactsPath, item);
        if (isFile(fileName)){
            try {
                let data = fs.readFileSync(fileName);
                data = JSON.parse(data);

                if(data.hasOwnProperty('id') && data.hasOwnProperty('lastName')){
                    result.push(data);
                }
            } catch (e) {
                console.log(e.message);
            }
        }
    });

    return JSON.stringify(result);
}

//удаление комплекта
function deleteContact(id){
    const fileName = path.join(contactsPath, id +'.json');
    try {
        fs.unlinkSync(fileName);
        return true;
    }
    catch (e) {
        console.log(e.message);
        return false;
    }
}

function saveContact(data){
    const id = data.id;
    const fileName = path.join(contactsPath, id + '.json');
    try {
        fs.writeFileSync(fileName, JSON.stringify(data, null, '\t'));
        return true;
    }
    catch (e) {
        console.log(e.message);
        return false;
    }
}

module.exports = {
    getContacts,
    deleteContact,
    saveContact,

};