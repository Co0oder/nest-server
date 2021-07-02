import { Injectable } from '@nestjs/common';

@Injectable()
export class DataService {
  getData(): any {
    return 'Some Data';
  }
}
