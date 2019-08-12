export class Teachers {

    constructor(_id='', name='', lastName='', gender=''){
        this._id = _id;
        this.name = name;
        this.lastName = lastName;
        this.gender = gender;
    }

    _id: string;
    name: string;
    lastName: string;
    gender: string;
}
