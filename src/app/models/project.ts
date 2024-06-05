import { User } from "./user";

export class Project {
    id?:string;
    name:string;
    client?: string;
    author?:User;
    stars:number;
    tag:string[];

}
