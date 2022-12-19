import * as React from 'react';

import { styled, alpha } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';

import SearchAppBar from './SearchAppBar';

export default function App({children}) {
  return (
    <Container maxWidth="xl">
      <Box sx={{ my: 4 }}>
        <SearchAppBar appCnf={appCnf}/>
        { children }
      </Box>
    </Container>
  );
}


