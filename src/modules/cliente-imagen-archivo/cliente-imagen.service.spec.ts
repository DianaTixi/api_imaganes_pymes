import { Test, TestingModule } from '@nestjs/testing';
import { ClienteImagenService } from './cliente-imagen.service';

describe('ClienteImagenService', () => {
  let service: ClienteImagenService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClienteImagenService],
    }).compile();

    service = module.get<ClienteImagenService>(ClienteImagenService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
