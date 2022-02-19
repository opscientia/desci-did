import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import github from '../assets/github.png'
import CardMedia from '@mui/material/CardMedia'

const theme = createTheme();

export default function ConnectGithub() {
  const handleSubmit = (event) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // // eslint-disable-next-line no-console
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
  };

  return (
      <>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Grid containersx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}>
                <Grid item xs> <img src={github} height="140"/> </Grid>
            </Grid>

            <Grid container spacing={2}>

                <Grid item>
                    <Button variant="outlined">
                      Connect Github
                    </Button>

                </Grid>

                <Grid item>
                    <Button variant="outlined">
                      SKIP
                    </Button>
                </Grid>
            </Grid>


          </Box>
        </Container>
      </ThemeProvider>

      </>
  );
}
