import { User } from "src/app/interfaces/user.interface";

export class Config {
    _id?: string;
    user?: User;
    language: string;
    letterSize: string;
    lastChange: string;


    constructor(language: string, letterSize: string, lastChange: string, user?: User) {
        this.user = user;
        this.language = language;
        this.letterSize = letterSize;
        this.lastChange = lastChange;
    }

}