import React, {memo} from "react";
import { useBackButton } from "./index.hooks";
import { ChevronLeft } from "@mui/icons-material";
import { Typography, Box } from "@mui/material";
import NextLink from "next/link";

type BackButtonProps = {
    isDetailsScene: boolean;
};

export const BackButton = memo(({isDetailsScene}: BackButtonProps) => {
    const {
        navigate
    } = useBackButton();

    return (
        <>
            {isDetailsScene ? (
                <Box sx={{
                    position:"absolute", 
                    left:0,
                }}>
                    <Box onClick={()=> navigate("/")} sx={{cursor:"pointer",display:"flex",     alignItems:"center"}}>
                        <ChevronLeft
                            sx={{
                            width: "24px",
                            height: "24px",
                            color: "#E39257",
                            }}
                        />
                        <Typography 
                            variant="h6" 
                            color="#E39257" 
                            sx={{
                                "&:hover":{
                                    textDecoration:"underline",
                                }
                            }}
                        >
                            Back to recipes
                        </Typography>
                    </Box>
                </Box>
            ) : (
                <Box sx={{
                    position:"absolute", 
                    left:0, 
                    top:{xs:-2,sm:'unset'},
                    pl:{xs:2,sm:0},
                    }}
                >
                    <NextLink href="/" style={{display:"flex",alignItems:"center",textDecoration:"none"}}>
                        <ChevronLeft
                            sx={{
                            width: "24px",
                            height: "24px",
                            color: "#E39257",
                            }}
                        />
                        <Typography variant="h6" color="#E39257" sx={{ 
                            "&:hover":{
                                textDecoration:"underline",
                            }
                            }}
                        >
                            Back to home
                        </Typography>
                    </NextLink>
                </Box>
            )}
        </>
    );
});

BackButton.displayName = "BackButton";