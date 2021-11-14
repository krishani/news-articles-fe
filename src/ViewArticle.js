import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAlert from '@mui/material/Alert';
import { useParams } from 'react-router-dom';
import { ARTICLES_URL } from './UrlEndpoints';
import axios from 'axios';

const theme = createTheme();

export default function ViewArticle() {
  const [article, setArticle] = React.useState({});
  const [errors, setErrors] = React.useState('');

  let { article_id } = useParams();

  React.useEffect(async () => {
    const articleUrl = `${ARTICLES_URL}/${article_id}`;
    try {
      const response = await axios.get(articleUrl);
      setArticle(response.data);
      setErrors('');
    } catch (error) {
      setErrors('error');
    }
  }, [article_id]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          { errors === 'error' &&
          <MuiAlert elevation={6} variant="filled" severity="error">Error while fetching articles</MuiAlert>}
          <Typography component="h1" variant="h5">
            {article.title}
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/articles" variant="body2">
                  {"Navigate to existing articles"}
                </Link>
              </Grid>
            </Grid>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  id="sourceId"
                  label="Source ID"
                  multiline
                  maxRows={20}
                  fullWidth
                  value={article.sourceId}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="sourceName"
                  label="Source Name"
                  multiline
                  maxRows={20}
                  fullWidth
                  value={article.sourceName}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="description"
                  label="Description"
                  multiline
                  maxRows={20}
                  fullWidth
                  value={article.description}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="content"
                  label="Content"
                  multiline
                  maxRows={20}
                  fullWidth
                  value={article.content}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="author"
                  label="Author"
                  multiline
                  maxRows={20}
                  fullWidth
                  value={article.author}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="publishedAt"
                  label="Published At"
                  multiline
                  maxRows={20}
                  fullWidth
                  value={article.publishedAt}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="url"
                  label="URL"
                  multiline
                  maxRows={20}
                  fullWidth
                  value={article.url}
                  disabled
                />
              </Grid>
              <Grid item xs={12}>
              <TextField
                id="imageUrl"
                label="Image Url"
                multiline
                maxRows={20}
                fullWidth
                value={article.imageUrl}
                disabled
              />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
