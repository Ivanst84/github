import React, { useState, useContext } from 'react';
import { IconButton, Stack, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useThemeContext } from '../../themeContex'; // Ajusta la ruta según tu estructura de carpetas

const Searcher = (props) => {
  const { inputUser, setInputUser } = props;
  const [valueInput, setValueInput] = useState('');
  const { theme } = useThemeContext(); // Usa el hook useThemeContext para obtener el tema actual

  const onSearchValueChange = (event) => {
    const inputValue = event.target.value;
    setValueInput(inputValue);
  };

  const handleSubmit = () => {
    setInputUser(valueInput);
  };

  return (
    <Stack
      direction='row'
      sx={{
        marginTop: '30px',
        width: '80%',
      }}
    >
      <TextField
        id='outlined-basic'
        label='GitHub User'
        placeholder='Octocat'
        variant='outlined'
        size='small'
        value={valueInput}
        onChange={onSearchValueChange}
        sx={{
          width: '90%',
          backgroundColor: theme === 'dark' ? 'gray' : 'white', // Cambia el color de fondo en el tema oscuro
          color: theme === 'dark' ? 'white' : 'black', // Cambia el color del texto en el tema oscuro
        }}
      />

      <IconButton
        onClick={handleSubmit}
        size='small'
        sx={{
          left: '-45px',
        }}
      >
        <SearchIcon />
      </IconButton>
    </Stack>
  );
};

export default Searcher;