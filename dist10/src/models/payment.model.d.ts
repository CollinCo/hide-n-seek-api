import { Entity } from '@loopback/repository';
export declare class Payment extends Entity {
    uid?: number;
    firstname: string;
    lastname: string;
    amount: number;
    currency: string;
    date: string;
    charge_id: string;
    receipt_email: string;
    getId(): any;
}
