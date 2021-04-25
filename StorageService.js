class StorageService {
    constructor() {
        this.mapObjects = new Map();
    }
    add(object) {
        if (object === undefined) {
            console.log("Ошибка при добавлении");
        }
        else {
            this.mapObjects.set(String(this.mapObjects.size), object);
            return this.mapObjects.size - 1;
        }
    }
    getById(id) {
        if (this.mapObjects.has(String(id))) {
            return  this.mapObjects.get(String(id));
        }
        else {
            return null;
        }
    }
    getAll() {
        return this.mapObjects;
    }
    deleteByID(id) {
        if (this.mapObjects.has(String(id)))  {
            this.mapObjects.delete(String(id));
            console.log("Элемент удален");
        }
        else {
            console.log("Элемент не найден");
        }
    }
    updateById(id, object) {
        if (this.mapObjects.has(String(id))) {
            if (typeof object === 'object') {
                for (let keys in object) {
                    this.mapObjects.get(String(id))[keys] = object[keys];
                }
            }
            return this.mapObjects.get(String(id));
        }
        console.log('Не удалось обновить элемент');
    }
    replaceById(id, object) {
        if (this.mapObjects.has(String(id))) {
            this.mapObjects.set(String(id), object);
            console.log("Элемент обновлен")
        } else {
            console.log("Элемент не обновлен")
        }
    }
}


const storageService = new StorageService();

let temp1 = storageService.add({key: 'A1', surname :'Ulitin'});
let temp2 = storageService.add({key: 'B2', surname: 'James'});
let temp3 = storageService.add({key: 'C3', surname: 'Carry'});
let temp4 = storageService.add({key: 'D4', surname: 'Irving'});

console.log("Получение всех элементов:");
let users = storageService.getAll();
console.log(users);

console.log("Получение элемента по ID:");
let user1 = storageService.getById(temp1)
console.log(user1)
let user2 = storageService.getById(temp2)
console.log(user2)
let user3 = storageService.getById(temp3)
console.log(user3)
let user4 = storageService.getById(temp4)
console.log(user4)

console.log("Удалить 3-й элемент")
storageService.deleteByID(3)
console.log(users);

console.log("Обновление:")
storageService.updateById(temp2, {surname: 'Another James'})
console.log(storageService.getById(temp2))

console.log("ReplaceId:")
storageService.replaceById(temp1, {key2: 'AAAA', surname2 :"BBBBB"})
console.log(storageService.getById(temp1))