import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models';
import { HttpErrors, post, requestBody } from '@loopback/rest';
import { sign } from 'jsonwebtoken';

export class RegistrationController {
  constructor(@repository(UserRepository) protected userRepo: UserRepository) { }

  @post('/registration')
  async registerUser(@requestBody() user: User) {
    // let regUser = new User();
    // regUser.firstname = user.firstname;
    // regUser.lastname = user.lastname;
    // regUser.email = user.email;

    // regUser.password = user.password;

    // let createdUser = await this.userRepo.create(regUser);
    // let jwt = sign(
    //   {
    //     user: {
    //       id: createdUser.uid,
    //       email: createdUser.email
    //     },
    //   },
    //   'shh',
    //   {
    //     issuer: 'auth.ix.com',
    //     audience: 'ix.com',
    //   },
    // );

    // return {
    //   token: jwt,
    // };
    return await this.userRepo.create(user);
  }
}
