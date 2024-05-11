import React, { FC, memo } from "react";
import { Stack, Typography } from "@mui/material";

type NavbarProps = {};

export const Navbar:FC = memo(({}: NavbarProps) => {
  return (
    <Stack direction="row" spacing={2} position="fixed" top={0} right={0} sx={{
        width:"100%",
        height:"64px", 
        boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        alignItems:"center",
        zIndex: 1000,
    }}>
      <Typography variant="h4" sx={{
        px:"8%",height:"100%",alignContent:"center",backgroundColor:"white"
      }}>Healthy Food</Typography>
    </Stack>
  );
});

Navbar.displayName = "Navbar";