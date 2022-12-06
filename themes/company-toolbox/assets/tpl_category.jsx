import * as React from 'react';
import { createRoot } from 'react-dom/client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';

import App from './components/App';
import ResourceListing from './components/ResourceListing';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Breadcrum from './components/Breadcrum';

import Grid from '@mui/material/Grid';

const rootElement = document.getElementById('root');

const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>

    <CssBaseline />

    <App>
      <Breadcrum dataLink={dataLink} />
      <ResourceListing dataLink={dataLink} />
    </App>

  </ThemeProvider>
);
