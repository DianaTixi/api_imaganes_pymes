import { JwtStrategy } from './strategies/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { Usuario } from './entities/usuario.entity';

const passportModule = PassportModule.register({ defaultStrategy: 'jwt' });

@Module({
  imports: [
    TypeOrmModule.forFeature([Usuario]),
    ConfigModule,
    passportModule,
    JwtModule.registerAsync({
      imports: [],
      inject: [ConfigService],
      useFactory(config: ConfigService) {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: '365 days',
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, ConfigService, JwtStrategy],
  exports: [JwtStrategy, passportModule, AuthService],
})
export class AuthModule {}
