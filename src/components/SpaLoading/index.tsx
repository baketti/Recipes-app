import React, { memo } from "react";
import {
    Box,
    Stack,
    CircularProgress
 } from "@mui/material";

type SpaLoadingProps = {};

const SpaLoading = memo(({}: SpaLoadingProps) => {
    return (
        <Stack sx={{ p: 2, alignItems:"center", justifyContent:"center", width:"100%"/* , mb:10 */ }} /* spacing={4} */>
            <Box>
                <CircularProgress />
            </Box>
        </Stack>
    );
});

SpaLoading.displayName = "SpaLoading";

export default SpaLoading;