import { defineStore } from 'pinia'

export const useTodoStore = defineStore('todo', {
    state: () => ({
        todos: [] as { id: number; text: string; completed: boolean }[],
        nextId: 1,
    }),
    actions: {
        addTodo(text: string) {
            this.todos.push({ id: this.nextId, text, completed: false })
            this.nextId++
        },
        removeTodo(id: number) {
            this.todos = this.todos.filter((todo) => todo.id !== id)
        },
        toggleTodo(id: number) {
            const todo = this.todos.find((todo) => todo.id === id)
            if (todo) {
                todo.completed = !todo.completed
            }
        },
        updateTodo(id: number, newText: string) {
            const todo = this.todos.find((todo) => todo.id === id)
            if (todo) {
                todo.text = newText
            }
        },
    },
})