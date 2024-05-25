import React, { useState } from 'react';
import { Box, Heading, Input, Button, VStack, StackDivider } from '@chakra-ui/react';
import ToDoItem from './components/todo';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim() === '') return;
    setTodos([
      ...todos,
      { id: Date.now(), text: inputValue.trim(), isCompleted: false },
    ]);
    setInputValue('');
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => (
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    )));
  };

  const deleteToDo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Box p={5} maxWidth="600px" mx="auto">
      <Heading mb={4}>To-Do List</Heading>
      <VStack
        divider={<StackDivider borderColor="gray.200" />}
        spacing={4}
        align="stretch"
      >
        {todos.map(todo => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteToDo={deleteToDo}
          />
        ))}
      
      </VStack>
      <Box mt={4}>
        <Input
          placeholder="Enter a new to-do"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <Button mt={2} colorScheme="teal" onClick={addTodo}>Add To-Do</Button>
      </Box>
    </Box>
  );
};

export default App;
