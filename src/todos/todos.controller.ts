import { Controller, Get, Post, Body, Param, Patch, Delete } from '@nestjs/common';
import { TodosService } from './todos.service';
import { Todo } from './interfaces/todos.interface';
import { CreateTodoDto } from './dto/creat-todo.dto';

@Controller('todos')
export class TodosController {
    constructor(private readonly todosService: TodosService) { }
    @Get()
    findAll(): Todo[] {
        return this.todosService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string): Todo {
        return this.todosService.findOne(id);
    }

    @Post()
    createTodo(@Body() newTodo: CreateTodoDto) {
        this.todosService.create(newTodo);
    }

    @Patch(':id')
    updateTodo(@Param('id') id: string, @Body() todoToUpdate: CreateTodoDto) {
        return this.todosService.update(id, todoToUpdate);
    }

    @Delete('delete/:id')
    deleteTodo(@Param('id') id: string) {
        return this.todosService.delete(id);
    }
}
