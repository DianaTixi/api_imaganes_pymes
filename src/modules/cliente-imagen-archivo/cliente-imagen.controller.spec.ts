import { Test, TestingModule } from '@nestjs/testing';
import { ClienteImagenController } from './cliente-imagen.controller';

describe('ClienteImagenController', () => {
  let controller: ClienteImagenController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClienteImagenController],
    }).compile();

    controller = module.get<ClienteImagenController>(ClienteImagenController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
