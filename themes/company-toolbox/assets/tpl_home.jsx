import * as React from 'react';
import { createRoot } from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import App from './components/App';
import CategoryListing from './components/CategoryListing';
import theme from './theme';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BreadcrumHome from './components/BreadcrumHome';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <ThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App>

      <BreadcrumHome/>
      <CategoryListing dataLink={dataLink} />
    </App>
  </ThemeProvider>
);
