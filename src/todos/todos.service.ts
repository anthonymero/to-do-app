import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './interfaces/todos.interface';
import { CreateTodoDto } from './dto/creat-todo.dto';

@Injectable()
export class TodosService {
    todos: Todo[] = [
        {
            id: 1,
            title: 'todos app',
            description: 'Create NodeJs todos app',
            done: false,
        },
        {
            id: 2,
            title: 'bread',
            description: 'buy bread',
            done: true,

        },
        {
            id: 3,
            title: 'wine',
            description: 'buy wine',
            done: true,

        },
    ];
    findOne(id: string): Todo {
        return this.todos.find(todo => todo.id === Number(id));
    }

    findAll(): Todo[] {
        return this.todos;
    }

    create(todo: CreateTodoDto) {
        this.todos = [...this.todos, todo];
    }

    update(id: string, updatedTodo: CreateTodoDto) {
        // retrieve todo to update
        const todoToUpdate = this.todos.find(todo => todo.id === +id);
        if (!todoToUpdate) {
            return new NotFoundException('this todo does not exist!');
        }
        // apply modifications granuraly
        if (updatedTodo.hasOwnProperty('done')) {
            todoToUpdate.done = updatedTodo.done;
        }
        if (!!updatedTodo.description) {
            todoToUpdate.description = updatedTodo.description;
        }
        if (!!updatedTodo.title) {
            todoToUpdate.title = updatedTodo.title;
        }
        const updatedTodos = this.todos.map(t => t.id !== +id ? t : todoToUpdate);
        this.todos = [...updatedTodos];

        return { updatedTodo: 1, todo: todoToUpdate};

    }

    delete(id: string) {
        const todosBeforeDeleteCount = this.todos.length;
        this.todos = [...this.todos.filter(t => t.id !==  +id)];
        if ( this.todos.length < todosBeforeDeleteCount) {
            return { deletedTodo: 1, nbTodos: this.todos.length };
        } else {
            return { deletedTodo: 0, nbTodos: this.todos.length};
        }
    }
}
