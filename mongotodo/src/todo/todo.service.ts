import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from 'src/schemas/todo.schema';
import { TodoDTO } from './dtos/todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Todo.name) private TodoModel: Model<Todo>) {}
  async create(todo: string): Promise<Todo> {
    const createTodo = new this.TodoModel({ content: todo });
    return createTodo.save();
  }
  async findAll(): Promise<Todo[]> {
    return this.TodoModel.find().exec();
  }

  async findOne(id: string) {
    const myTodo = await this.TodoModel.findOne({ _id: id });
    return myTodo;
  }
}
