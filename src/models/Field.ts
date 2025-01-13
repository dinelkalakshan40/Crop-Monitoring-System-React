export class Field{
    code:string;
    name:string;
    location:string;
    fieldSize:number;
    details:string;
    category:string;

    constructor(code:string,name:string,location:string,fieldSize:number,details:string,category:string) {
        this.code=code;
        this.name=name;
        this.location=location;
        this.fieldSize=fieldSize;
        this.details=details;
        this.category=category
    }
}