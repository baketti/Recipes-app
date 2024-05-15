import React, { memo } from "react";
import { usePageContainer } from "./index.hooks";
import {
  AppBar,
  Box,
  BoxProps,
  Container,
  Stack,
  Theme,
  ThemeProvider,
  Toolbar,
  Typography,
} from "@mui/material";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import logo from "@/assets/logo.svg"; 
import { lightTheme } from "@/themes";

type PageContainerProps = {
  background?: string;
  title?: string;
  sx?: BoxProps["sx"];
  isLandingPage?: boolean;
  children: React.ReactNode;
};

export const PageContainer = memo(
  ({
    background,
    title,
    children,
    sx,
    isLandingPage,
    ...props
  }: PageContainerProps) => {
    const {} = usePageContainer();

    return (
    <ThemeProvider theme={lightTheme}>
        <Box
          sx={{
            width: "100%",
            minHeight: "100vh",
            background: background ? `url(${background})` : undefined,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          {...props}
        >
          <Stack
            sx={{
              minHeight: "100vh",
            }}
          >
              <AppBar>
                <Toolbar>
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
                    >
                      {title}
                    </Typography>
                  </Stack>
                </Toolbar>
              </AppBar>
            <Container
              maxWidth="lg"
              sx={{
                minHeight: "100vh",
              }}
            >
              <Stack
                sx={{
                  width: "100%",
                  pt: {
                    xs: 12,
                  },
                  ...sx,
                }}
              >
                {children}
              </Stack>
            </Container>
           </Stack>
          <Footer />
        </Box>
      </ThemeProvider>
    );
  },
);
PageContainer.displayName = "PageContainer";