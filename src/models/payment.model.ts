import { Entity, property, model } from '@loopback/repository';

//transaction history?

@model()
export class Payment extends Entity {

  @property({
    type: 'number',
    id: true,
  })
  uid?: number;

  @property({
    type: 'number',
  })
  firstname: string;

  @property({
    type: 'number',
  })
  lastname: string;

  @property({
    type: 'number',
  })
  amount: number;

  @property({
    type: 'string'
  })
  currency: string;

  @property({
    type: 'string'
  })
  date: string;

  @property({
    type: 'number'
  })
  charge_id: string;

  @property({
    type: 'string'
  })
  receipt_email: string;

  getId() {
    return this.id;
  }
}





