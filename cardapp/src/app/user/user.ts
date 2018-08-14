import { address } from "src/app/user/address";

export class user{
    
    constructor(public fName?:string, public lName?:string, public gender?:string,
        public userid?:string, public password?:string, public address?: address) { }

}