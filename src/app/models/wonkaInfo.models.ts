export interface ParamsObj {
    age: number;
    first_name: string;
    image:string;
    description:string;
}

export class WonkaInfo {

    age: number;
    first_name: string;
    image:string;
    description:string;

    constructor(obj:ParamsObj) {
        this.age = obj.age;
        this.first_name = obj.first_name;
        this.image = obj.image;
        this.description = obj.description;
    }
}