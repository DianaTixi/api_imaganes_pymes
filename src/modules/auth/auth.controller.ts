import { Controller, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';

@UsePipes(ValidationPipe)
@ApiTags('Usuarios')
@Controller('usuario')
export class AuthController {
  constructor(private readonly _authService: AuthService) {}
}
