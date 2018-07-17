// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
import { repository } from '@loopback/repository';
import { PaymentRepository } from '../repositories/payment.repository';
import { param, post, HttpErrors, requestBody } from '@loopback/rest';
import { verify } from 'jsonwebtoken';

/*
  http post ("/payment?jwt=jwtToken", {
    token: "charge_id..."
  })
*/

export class PaymentController {
  constructor(
    @repository(PaymentRepository.name) private paymentRepo: PaymentRepository
  ) { }

  @post('/payment')
  async makePayment(
    @param.query.string('jwt') jwt: string,
    @requestBody() data: any
  ) {
    let user = null;
    try {
      let payload = verify(jwt, 'shh') as any;
      user = payload.user;
    } catch (err) {
      throw new HttpErrors.Unauthorized("Invalid token")
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
    } catch (e) {
      console.log(e);
      throw new HttpErrors.InternalServerError("Oops");
    }


  }

}











