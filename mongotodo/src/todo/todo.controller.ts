import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoDTO } from './dtos/todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private TodoService: TodoService) {}

  @Post('/create')
  async CreateTodo(@Body() body: TodoDTO) {
    this.TodoService.create(body.todo);
  }

  @Get('/all')
  async GetAllTodos() {
    const data = await this.TodoService.findAll();
    return { msg: 'Successfully', data };
  }

  @Get('/specific/:id')
  async SpecificTodo(@Param('id') id: string) {
    const myTodo = await this.TodoService.findOne(id);
    return { msg: 'Successfully', data: myTodo };
  }
}
