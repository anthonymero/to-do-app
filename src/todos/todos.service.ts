import { Injectable } from '@nestjs/common';
import { Todo } from './interfaces/todos.interface';

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

    findAll(): Todo[] {
        return this.todos;
    }

    create(todo: Todo) {
        this.todos = [...this.todos, todo];
    }
}
