import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import config from '../../config/configurations';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async validateUser(user: { login: string; password: string }): Promise<any> {
    if (
      user &&
      user.login === config.login &&
      user.password === config.password
    ) {
      return { password: user.password };
    }
    return null;
  }

  async login(user: any) {
    const payload = { username: user.username, sub: user.userId };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
