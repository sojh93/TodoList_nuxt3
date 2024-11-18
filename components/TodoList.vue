<template>
  <div>
    <input v-model="newTodoText" type="text" placeholder="새로운 할 일 추가" />
    <button @click="addTodo">추가</button>

    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <span>{{ todo.text }} - {{ todo.completed ? '완료' : '미완료' }}</span>
        <button @click="updateTodo(todo.id, { text: todo.text, completed: !todo.completed })">
          {{ todo.completed ? '미완료로 변경' : '완료로 변경' }}
        </button>
        <button @click="deleteTodo(todo.id)">삭제</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const todos = ref([]);
const newTodoText = ref('');

const fetchTodos = async () => {
  todos.value = await $fetch('/api/todos/get');
};

const addTodo = async () => {
  if (!newTodoText.value.trim()) return;
  const newTodo = await $fetch('/api/todos/add', {
    method: 'POST',
    body: { text: newTodoText.value },
  });
  todos.value.push(newTodo);
  // 여기서 get 실행시키면 되지 않나? 불러오기 로직.... 굳이 화면에서 처리해주나?
  newTodoText.value = '';
};

const updateTodo = async (id, updatedTodo) => {
  await $fetch('/api/todos/update', {
    method: 'POST',
    body: { id, ...updatedTodo },
  });
  const index = todos.value.findIndex((todo) => todo.id === id);
  if (index !== -1) {
    todos.value[index] = { ...todos.value[index], ...updatedTodo };
  }
};

const deleteTodo = async (id) => {
  await $fetch('/api/todos/delete', {
    method: 'GET',
    params: { id },
  });
  todos.value = todos.value.filter((todo) => todo.id !== id);
}

onMounted(() => {
  fetchTodos();
})

</script>

<style>
button {
  margin-left: 0.5rem;
}
</style>