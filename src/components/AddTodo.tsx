import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";
import { TextField, Button, Box } from "@mui/material";
import type { AppDispatch } from "../app/store";

const AddTodo: React.FC = () => {
  const [input, setInput] = useState<string>("");
  const dispatch = useDispatch<AppDispatch>();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleAddTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
    inputRef.current?.focus();
  };

  return (
    <Box
      component="form"
      onSubmit={handleAddTodo}
      sx={{
        display: "flex",
        gap: 1,
        mb: 2,
      }}
    >
      <TextField
        inputRef={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        variant="outlined"
        placeholder="Enter your todo"
        fullWidth
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: "#007bff", // Blue button color
          color: "#fff", // White text
          "&:hover": {
            backgroundColor: "#0056b3", // Darker blue on hover
          },
        }}
      >
        Add Todo
      </Button>
    </Box>
  );
};

export default AddTodo;