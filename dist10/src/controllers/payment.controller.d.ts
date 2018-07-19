import { PaymentRepository } from '../repositories/payment.repository';
export declare class PaymentController {
    private paymentRepo;
    constructor(paymentRepo: PaymentRepository);
    makePayment(jwt: string, data: any): Promise<any>;
}
