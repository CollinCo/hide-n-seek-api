import { Entity, property, model } from '@loopback/repository';

@model()
export class User extends Entity {

    @property({
        type: 'number',
        id: true,
    })
    uid?: number;

    @property({
        type: 'string',
    })
    username: string;

    @property({
        type: 'string',
    })
    firstname: string;

    @property({
        type: 'string',
    })
    lastname: string;

    @property({
        type: 'string',
        required: true,
    })
    email: string;

    @property({
        type: 'string',
        required: true,
    })
    password: string;

    @property({
        type: 'string',
        required: true,
    })
    confirmpassword: string;

    @property({
        type: 'string',

    })
    phone: string;

    getId() {
        return this.id;
    }
}
