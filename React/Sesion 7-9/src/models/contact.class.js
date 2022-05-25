

export class Contact {
    id = 0;
    name = '';
    phone = ''
    conected = false;
    

    constructor(id, name, phone,  conected) {
        this.id = id;
        this.name = name;
        this.phone = phone;
        this.conected = conected;
        
    }
}