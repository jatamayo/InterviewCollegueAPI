export class Students {

    constructor(_id='', name='', lastName='', gender='', birthDay=''){
        this._id = _id;
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
        this.birthDay = birthDay;
    }

    _id: string;
    name: string;
    lastName: string;
    gender: string;
    birthDay: string;
}
