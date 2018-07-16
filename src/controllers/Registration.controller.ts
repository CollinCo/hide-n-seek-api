import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, requestBody, HttpErrors } from "@loopback/rest";
import * as bcryptjs from 'bcryptjs';
import { User } from "../models";

// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';

export class RegistrationController {
  constructor(
    @repository(UserRepository.name) private userRepo: UserRepository
  ) { }

  @post("/registration")
  async createUser(
    @requestBody() user: User
  ) {

    if (!user.email || !user.password || !user.firstname || !user.lastname) {
      throw new HttpErrors.BadRequest('missing data');
    }

    // Check that user does not already exist
    let userExists: boolean = !!(await this.userRepo.count({
      and: [
        { email: user.email }
      ]
    }));

    if (userExists) {
      throw new HttpErrors.BadRequest('user already exists');
    }

    if (user.password === user.confirmpassword) {

      let hashedPassword = await bcryptjs.hash(user.password, 10);

      console.log(hashedPassword);

      let createdUser = await this.userRepo.create({
        email: user.email,
        username: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        phone: user.email,
        password: user.password,
        confirmpassword: user.confirmpassword,
      });

      console.log(createdUser);

      let createUser = {
        id: createdUser.uid,
        email: createdUser.email,
        firstname: createdUser.firstname,
        lastname: createdUser.lastname,
        phone: createdUser.phone
      };

      return createUser;
    } else {
      throw new HttpErrors.BadRequest('password does not match');
    }

  }
}
