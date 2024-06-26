import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ProblemsService } from './problems.service';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
import { AuthGuard } from '../auth/guard/auth.guard';

@UseGuards(AuthGuard)
@Controller('problems')
export class ProblemsController {
  constructor(private readonly problemsService: ProblemsService) {}

  @Post()
  create(@Body() body: CreateProblemDto) {
    return this.problemsService.create(body);
  }

  @Get()
  findAll() {
    return this.problemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.problemsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body: UpdateProblemDto) {
    return this.problemsService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.problemsService.remove(id);
  }
}
