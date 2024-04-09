import React, { useState } from "react";
import { Box, Heading, Input, Button, List, ListItem, IconButton, Flex, Text } from "@chakra-ui/react";
import { FaPlus, FaTrash, FaCheck } from "react-icons/fa";

const Index = () => {
  const [todoItem, setTodoItem] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleAddTodo = () => {
    if (todoItem.trim() !== "") {
      setTodoList([...todoList, { text: todoItem, completed: false }]);
      setTodoItem("");
    }
  };

  const handleToggleComplete = (index) => {
    const updatedList = todoList.map((item, i) => {
      if (i === index) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTodoList(updatedList);
  };

  const handleRemoveTodo = (index) => {
    const updatedList = todoList.filter((_, i) => i !== index);
    setTodoList(updatedList);
  };

  return (
    <Box maxWidth="400px" margin="auto" mt={8}>
      <Heading mb={4}>Todo App</Heading>
      <Flex mb={4}>
        <Input value={todoItem} onChange={(e) => setTodoItem(e.target.value)} placeholder="Enter a todo item" mr={2} />
        <IconButton icon={<FaPlus />} onClick={handleAddTodo} aria-label="Add todo" />
      </Flex>
      <List spacing={2}>
        {todoList.map((item, index) => (
          <ListItem key={index} display="flex" alignItems="center">
            <Text flex="1" textDecoration={item.completed ? "line-through" : "none"}>
              {item.text}
            </Text>
            <IconButton icon={<FaCheck />} onClick={() => handleToggleComplete(index)} aria-label="Toggle complete" size="sm" mr={2} />
            <IconButton icon={<FaTrash />} onClick={() => handleRemoveTodo(index)} aria-label="Remove todo" size="sm" />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Index;
