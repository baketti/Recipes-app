import React, { memo } from "react";
import { 
  Stack, 
  Typography,
  AppBar,
  Toolbar 
} from "@mui/material";
import Image from "next/image";
import logo from "@/assets/logo.svg"; 
import { lightTheme } from "@/themes";
import GitHubIcon from '@mui/icons-material/GitHub';
import Link from 'next/link';

type AppbarProps = {};

export const Appbar= memo(({}: AppbarProps) => {
  return (
      <AppBar>
        <Toolbar>
          <Stack direction="row" width={1} alignItems="center" justifyContent="space-between">
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              justifyContent="center"
            >
              <Image
                src={logo}
                alt="Logo"
                width={40}
                height={40}
              />
              <Typography
                component="h1"
                variant="h3"
                sx={{
                  color: "primary.main",
                  fontSize: {
                    xs: "1rem",
                    sm: "1.5rem",
                    md: "2rem",
                  },
                }}
                letterSpacing={1}
              >
                {"Healthy Meals"}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2}>
              <Link href="https://github.com/baketti/Recipes-app">
                <GitHubIcon color='primary' fontSize='large'/>
              </Link>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
  );
});

Appbar.displayName = "Appbar";