import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import MuiAlert from '@mui/material/Alert';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { IMPORT_URL } from './UrlEndpoints';

const theme = createTheme();

export default function ImportArticles() {

  const [notification, setNotification] = React.useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    let importUrl = IMPORT_URL;
    if (data.get('query')) {
      importUrl += `?query=${data.get('query')}`;
    }
    try {
      await axios.post(importUrl);
      setNotification('success');
    } catch (error) {
      setNotification('error');
    }
  };

  React.useEffect(async () => {
    if(notification) {
      setTimeout(()=> {
        setNotification('');
      }, 5000);
    }
  }, [notification]);


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Query News Articles
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="query"
              label="Query String"
              name="query"
              autoFocus
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              IMPORT
            </Button>
            <Grid container>
              <Grid item>
                <Link href="/articles" variant="body2">
                  {"Navigate to existing articles"}
                </Link>
              </Grid>
            </Grid>
            { notification === 'success' &&
            <MuiAlert elevation={6} variant="filled" severity="success">Import Success</MuiAlert>}
            { notification === 'error' &&
            <MuiAlert elevation={6} variant="filled" severity="error">Error while importing data</MuiAlert>}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}




