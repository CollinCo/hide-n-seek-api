"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
const repository_1 = require("@loopback/repository");
const payment_repository_1 = require("../repositories/payment.repository");
const rest_1 = require("@loopback/rest");
const jsonwebtoken_1 = require("jsonwebtoken");
/*
  http post ("/payment?jwt=jwtToken", {
    token: "charge_id..."
  })
*/
let PaymentController = class PaymentController {
    constructor(paymentRepo) {
        this.paymentRepo = paymentRepo;
    }
    async makePayment(jwt, data) {
        let user = null;
        try {
            let payload = jsonwebtoken_1.verify(jwt, 'shh');
            user = payload.user;
        }
        catch (err) {
            throw new rest_1.HttpErrors.Unauthorized("Invalid token");
        }
        // Set your secret key: remember to change this to your live secret key in production
        // See your keys here: https://dashboard.stripe.com/account/apikeys
        var stripe = require("stripe")("sk_test_2fvAVmAV7bPjP37vazu0j1nv");
        try {
            const charge = await stripe.charges.create({
                amount: data.amount,
                currency: data.currency,
                source: data.token,
                receipt_email: 'jenny.rosen@example.com',
            });
            // TODO: Create a new Transaction record using the above info...
            return charge;
        }
        catch (e) {
            console.log(e);
            throw new rest_1.HttpErrors.InternalServerError("Oops");
        }
    }
};
__decorate([
    rest_1.post('/payment'),
    __param(0, rest_1.param.query.string('jwt')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], PaymentController.prototype, "makePayment", null);
PaymentController = __decorate([
    __param(0, repository_1.repository(payment_repository_1.PaymentRepository.name)),
    __metadata("design:paramtypes", [payment_repository_1.PaymentRepository])
], PaymentController);
exports.PaymentController = PaymentController;
//# sourceMappingURL=payment.controller.js.map