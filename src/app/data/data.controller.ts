import { Controller, Get, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { DataService } from './data.service';

@Controller()
export class DataController {
  constructor(private dataService: DataService) {}

  @UseGuards(JwtAuthGuard)
  @Get('data')
  async getData() {
    return this.dataService.getData();
  }
}
