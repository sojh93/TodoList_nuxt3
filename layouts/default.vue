<template>
  <div>
    <header>
      <h1>Todo List</h1>
    </header>
    <main>
      <slot />
    </main>
  </div>
</template>

<style>
header {
  background: #007acc;
  color: white;
  padding: 1rem;
  text-align: center;
}
main {
  padding: 1rem;
}
</style>