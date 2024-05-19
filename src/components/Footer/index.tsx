import React, {FC, memo} from 'react';
import { Stack, Typography } from '@mui/material';

type FooterProps = {};

export const Footer:FC = memo(({}:FooterProps) => {
  return (
    <Stack 
      width="100%" 
      height="32px" 
      alignItems="space-around" 
      justifyContent="flex-end"
      sx={{
        position: "fixed",
        left: 0,
        bottom: 0,
        backgroundColor: "#92d362",
        boxShadow: "0 -5px 10px rgba(0, 0, 0, 0.5)",
        p:"6px 0",
      }}
    >
      <Typography sx={{m:"0 auto"}} color="primary">
        © Copyright 2024 Stack. All Rights Reserved
      </Typography>
    </Stack>
  );
});

Footer.displayName = 'Footer';