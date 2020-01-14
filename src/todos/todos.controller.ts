import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todos.interface';
import { CreateTodoDto } from './dto/creat-todo.dto';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService ) {}

    @Get(':id')
    findOne(@Param('id') id: string): Todo {
        return this.todosService.findOne(id);
    }

    @Get()
    findAll(): Todo[] {
        return this.todosService.findAll();
    }

    @Post()
    createTodo(@Body() newTodo: CreateTodoDto) {
        this.todosService.create(newTodo);
    }
}
