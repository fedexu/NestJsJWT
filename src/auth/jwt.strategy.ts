import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: JSON.parse(process.env.KEYS).keys[0].k,
    });
  }

  async validate(payload: any) {
    // TODO LOGIC HERE
    return { userId: payload.sub, username: payload.username };
  }
}