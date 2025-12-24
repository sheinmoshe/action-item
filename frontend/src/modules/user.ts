import {Gender} from "./gender.enum";

export interface userName {
    first: string;
    last: string;
    title?: string;
};


export interface User {
    id: number;
    name:userName;
    gender: Gender
    location: {
        country: string;
        street: {
            number: number;
            name: string;
        };
        city: string;
        state: string;
    };
    phone: string
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    dob: {
        age: number;
        date: Date;
    };
    isUserSaved?: boolean
}
