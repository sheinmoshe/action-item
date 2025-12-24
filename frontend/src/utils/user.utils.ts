import {userName} from "../modules/user";

export function getUserDisplayName(name: userName) : string {
    const title = name?.title ? name.title : '';
    const first = name?.first ? name.first : '';
    const last = name?.last ? name.last : '';
    return `${title} ${first} ${last}`;
}

export function getUserBirthYear (birthdate:Date) : string {
    return  new Date(birthdate).getFullYear().toString();

}