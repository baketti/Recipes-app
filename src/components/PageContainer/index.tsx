import React, { memo } from "react";
import { usePageContainer } from "./index.hooks";
import {
  Box,
  BoxProps,
  Container,
  Stack,
  ThemeProvider,
} from "@mui/material";
import { Footer } from "@/components/Footer";
import { lightTheme } from "@/themes";
import Appbar from "@/components/Appbar";

type PageContainerProps = {
  background?: string;
  sx?: BoxProps["sx"];
  isLandingPage?: boolean;
  children: React.ReactNode;
};

export const PageContainer = memo(
  ({
    background,
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
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            background: { 
              xs: isLandingPage ? "linear-gradient(to right, #92d362, #6ab47c, #4b8f61)" : "unset", 
              sm: "unset" 
            },
          }}
          {...props}
        >
          <Stack
            sx={{
              minHeight: "100vh",
            }}
          >
              <Appbar />
              <Container maxWidth="lg" sx={{ minHeight: "100vh" }}>
                <Stack
                  sx={{
                    width: "100%",
                    pt: {
                      xs: isLandingPage ? 4 : 8,
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