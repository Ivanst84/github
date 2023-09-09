import { CardMedia, Grid, Stack } from "@mui/material"
import React from "react"
import PrincipalInformation from "../PrincipalInformation"
import Description from '../Description'
import { useThemeContext } from '../../themeContex'; // Ajusta la ruta según tu estructura de carpetas

const UserCard = (props) => {
  const { userState } = props;
  const { avatar_url } = userState;

  const { theme } = useThemeContext(); // Obtiene el tema del contexto

  return (
    <Grid
      container
      spacing={2}
      sx={{ marginTop: '15px' }}
    >
      <Grid item xs={3}>
        <CardMedia
          component='img'
          alt="GitHub User"
          image={avatar_url}
          sx={{
            borderRadius: '50%',
            marginLeft: '5px',
            filter: theme.palette.mode === 'dark' ? 'grayscale(100%)' : 'none', // Cambia el filtro de la imagen según el tema
          }}
        />
      </Grid>
      <Grid item xs={9}>
        <Stack
          direction="column"
          spacing={1}
          sx={{ margin: '30px' }}
        >
          <PrincipalInformation userState={userState} />
          <Description userState={userState} />
        </Stack>
      </Grid>
    </Grid>
  )
}

export default UserCard