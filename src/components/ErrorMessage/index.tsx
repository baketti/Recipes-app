import React, { memo } from "react";
import { 
    Typography, 
    Box, 
    Stack, 
    Paper,
    CircularProgress 
  } from "@mui/material";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useErrorMessage } from "./index.hooks";

type ErrorMessageProps = {
    noDataMessage?: string;
};

export const ErrorMessage = memo(({noDataMessage}: ErrorMessageProps) => {
    const {
        errorMessage
    } = useErrorMessage();

    return(
        <Stack alignItems='center' justifyContent='center' textAlign='center' width={{xs:1,sm:0.6}} height='50vh'>
            <Paper sx={{p:3}}>
                <Stack  sx={{ color:"grey"}}>
                <Box sx={{
                    display:"flex", 
                    flexDirection:"column", 
                    alignItems:"center", 
                    justifyContent:"center",
                    gap:1
                    }}
                >
                    <WarningAmberIcon color="error"/>
                    <Typography variant="h4">
                        Sorry,
                    </Typography> 
                </Box>
                <Typography variant="h4">
                    {errorMessage ?? noDataMessage}
                </Typography>
                </Stack> 
            </Paper>
        </Stack>
    )
});

ErrorMessage.displayName = "ErrorMessage";