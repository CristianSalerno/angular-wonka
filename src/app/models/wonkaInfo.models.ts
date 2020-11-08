export interface ParamsObj {
    age: number;
    first_name: string;
    image:string;
}

export class WonkaInfo {

    age: number;
    first_name: string;
    image:string;

    constructor(obj:ParamsObj) {
        this.age = obj.age;
        this.first_name = obj.first_name;
        this.image = obj.image;
    }
}