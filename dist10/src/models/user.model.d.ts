import { Entity } from '@loopback/repository';
export declare class User extends Entity {
    uid?: number;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    password: string;
    confirmpassword: string;
    phone: string;
    getId(): any;
}
