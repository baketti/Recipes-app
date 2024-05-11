import React, {FC, memo} from 'react';
import { Stack, Typography } from '@mui/material';

type FooterProps = {};

export const Footer:FC = memo(({}:FooterProps) => {
  return (
    <Stack width="100%" height="52px" alignItems="space-around" justifyContent="flex-end">
      <Typography sx={{m:"0 auto"}}>© Copyright 2024 Stack. All Rights Reserved</Typography>
    </Stack>
  );
});

Footer.displayName = 'Footer';