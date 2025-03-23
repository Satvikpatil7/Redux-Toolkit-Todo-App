import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../features/todo/todoSlice';
import { List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo: React.FC = () => {
  const todos = useSelector((state: { todo: { todos: { id: string; text: string }[] } }) => state.todo.todos);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id: string) => {
    dispatch(removeTodo(id));
  };

  return (
    <div style={{
      padding: '16px',
      borderRadius: '8px',
      backgroundColor: '#f8f9fa',
      border: '1px solid #dee2e6', // Light border
    }}>
      <Typography variant="h6" gutterBottom sx={{ color: '#000',  padding:'8px' ,borderBottom: '2px solid #dee2e6',}}>
        Todo List
      </Typography>
      <List>
        {todos.length > 0 ? (
          todos.map((todo) => (
            <ListItem key={todo.id} sx={{
              display: 'flex',
              justifyContent: 'space-between',
              borderBottom: '1px solid #dee2e6', // Border between list items
              padding: '8px 0', // Padding for list items
            }}>
              <ListItemText primary={todo.text} />
              <IconButton edge="end" aria-label="delete" onClick={() => handleRemoveTodo(todo.id)}>
                <DeleteIcon sx={{ color: '#dc3545' }} /> {/* Red color for delete icon */}
              </IconButton>
            </ListItem>
          ))
        ) : (
          <ListItem>
            <ListItemText primary="No todos available" />
          </ListItem>
        )}
      </List>
    </div>
  );
};

export default Todo;