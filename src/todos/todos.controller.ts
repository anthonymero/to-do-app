import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todos.interface';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService ) {}

    @Get()
    findAll(): Todo[] {
        return this.todosService.findAll();
    }

    @Post()
    createTodo(@Body() newTodo) {
        console.log('newTodo', newTodo);
        this.todosService.create(newTodo);
    }
}
