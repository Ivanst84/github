import React from 'react';
import { Typography, Stack } from '@mui/material';
import PaperInformation from '../../componets/PaperInformation';
import LocationInformation from '../../componets/LocationInformation';
import { Fragment } from 'react';
import { useThemeContext } from '../../themeContex'; // Ajusta la ruta según tu estructura de carpetas

const Description = (props) => {
  const { userState } = props;
  const { bio } = userState;

  const { theme } = useThemeContext(); // Obtiene el tema del contexto

  return (
    <Fragment>
      <Stack sx={{ justifyContent: 'center' }}>
        {bio !== null ? (
          <Typography variant='body1' sx={{ color: theme.palette.text.primary }}>
            {bio}
          </Typography>
        ) : (
          <Typography variant='body1'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, blanditiis laboriosam praesentium rem non ad soluta numquam dolorem placeat veritatis? Cupiditate autem eveniet consectetur officiis optio tenetur excepturi adipisci facere!
          </Typography>
        )}
      </Stack>
      <PaperInformation userState={userState} />
      <LocationInformation userState={userState} />
    </Fragment>
  );
};

export default Description;