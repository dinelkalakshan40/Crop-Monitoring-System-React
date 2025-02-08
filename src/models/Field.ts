export class Field{
    code:string;
    name:string;
    location:string;
    fieldSize:string;
    category:string;

    constructor(code:string,name:string,location:string,fieldSize:string,category:string) {
        this.code=code;
        this.name=name;
        this.location=location;
        this.fieldSize=fieldSize;
        this.category=category
    }
}