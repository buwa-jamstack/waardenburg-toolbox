import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';


export default function IconBreadcrumbs() {
  return (
    <Box  sx={{ my: 2 }} >
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          <Typography
            sx={{ display: 'flex', alignItems: 'center' }}
            color="common.blue"
          >
            Home
          </Typography>

        </Link>

      </Breadcrumbs>
    </Box>
  );
}
