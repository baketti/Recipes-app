import React, { FC, memo, PropsWithChildren } from "react";
import { Stack } from "@mui/material";
import { Navbar } from "./Navbar";
import { Footer } from "@/components/Footer";

type PageContainerProps = {
    isLandingPage?: boolean;
};

export const PageContainer:FC<PropsWithChildren<PageContainerProps>> = memo(
    ({children, isLandingPage}) => {
        return (
            <Stack alignItems="center" spacing={2} minHeight="100vh">
                <Navbar />
                <Stack sx={{
                    width:"85%",
                    alignItems: isLandingPage ? "flex-start" : "center",
                    justifyContent:"center",
                    flex: '1 0 auto',
                }}>
                    {children}
                </Stack>
                <Stack sx={{flexShrink: 0}}>
                    <Footer />
                </Stack>
            </Stack>
        );
    }
)

PageContainer.displayName = "PageContainer";