import { repository } from '@loopback/repository';
import { UserRepository } from '../repositories/user.repository';
import { User } from '../models';
import { HttpErrors, post, requestBody } from '@loopback/rest';
import { sign } from 'jsonwebtoken';

export class RegistrationController {
  constructor(@repository(UserRepository) protected userRepo: UserRepository) { }

  @post('/registration')
  async registerUser(@requestBody() user: User) {
    // Check that required fields are supplied
    if (!user.email || !user.password) {
      throw new HttpErrors.BadRequest('missing data');
    }

    // Check that user does not already exist
    let userExists: boolean = !!(await this.userRepo.count({
      email: user.email,
    }));

    if (userExists) {
      throw new HttpErrors.BadRequest('user already exists');
    }

    let createdUser = await this.userRepo.create(user);

    let jwt = sign({
      user: createdUser
    },
      'shh', {
        issuer: 'auth.hns.co.za',
        audience: 'hns.co.za'
      });

    return {
      token: jwt
    };
  }
}
