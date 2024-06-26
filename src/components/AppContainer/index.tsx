import React, { memo } from "react";
import { PageContainer } from "@/components/PageContainer";
import { Outlet } from "react-router-dom";
import { Stack } from "@mui/material";

type AppContainerProps = {};

const AppContainer = memo(({}: AppContainerProps) => {
  return (
    <PageContainer>
        <Stack width={1} alignItems="center">
            <Outlet />
        </Stack>
    </PageContainer>
  );
});

AppContainer.displayName = "AppContainer";

export default AppContainer;