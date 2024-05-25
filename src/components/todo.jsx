import React from 'react';
import { Checkbox, HStack, IconButton, Text } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

const ToDoItem = ({ todo, toggleComplete, deleteToDo }) => {
  return (
    <HStack spacing="24px">
      <Checkbox isChecked={todo.isCompleted} onChange={() => toggleComplete(todo.id)} />
      <Text as={todo.isCompleted ? 's' : ''}>{todo.text}</Text>
      <IconButton
        aria-label="Delete todo"
        icon={<DeleteIcon />}
        onClick={() => deleteToDo(todo.id)}
      />
    </HStack>
  );
};

export default ToDoItem;
