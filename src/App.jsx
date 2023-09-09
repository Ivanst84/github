import React, { useEffect, useState } from "react";
import { Container, Button , Switch} from "@mui/material";
import Searcher from "./componets/Searcher";
import { getGitHubUser } from "./services/users";
import UserCard from "./containers/userCard";
import { ThemeProvider,Box,Typography} from '@mui/material';
import { useThemeContext } from './themeContex'; // Importa el hook useThemeContext

const App = () => {
  const [inputUser, setInputUser] = useState('octocat');
  const [userState, setUserState] = useState('inputUser');
  const { isDarkTheme, toggleTheme, theme } = useThemeContext(); // Usa el hook useThemeContext para obtener el tema

  const gettinUser = async (user) => {
    const userResponse = await getGitHubUser(user);
    if (userState === 'octocat') {
      localStorage.setItem('octocat', userResponse);
    }
    if (userResponse.message === 'Not Found') {
      const { octocat } = localStorage;
      setInputUser(octocat);
      setNotFound(true);
    } else {
      setUserState(userResponse);
    }
    console.log(userResponse);
  };

  useEffect(() => {
    gettinUser(inputUser);
  }, [inputUser]);

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{
        background: 'whitesmoke',
        width: '80vw',
        height: '500px',
        borderRadius: '16px',
        marginTop: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
         <Box
          sx={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography variant="body2" sx={{ mr: 1 }}>
            Activa tema Oscuro
          </Typography>
          <Switch
            checked={isDarkTheme}
            onChange={toggleTheme}
            color="primary"
            inputProps={{ 'aria-label': 'toggle theme' }}
          />
        </Box>
        
        <Searcher inputUser={inputUser} setInputUser={setInputUser} />
        <UserCard userState={userState} />

        <Switch
            checked={isDarkTheme}
            onChange={toggleTheme}
            color="primary"
            inputProps={{ 'aria-label': 'toggle theme' }}
          />
      </Container>
    </ThemeProvider>
  );
};

export default App;