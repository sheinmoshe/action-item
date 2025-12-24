import {userName} from "../modules/user";

export function getUserDisplayName(name: userName) : string {
    return `${name.title} ${name.first} ${name.last}`;
}

export function getUserBirthYear (birthdate:Date) : string {
    return  new Date(birthdate).getFullYear().toString();

}