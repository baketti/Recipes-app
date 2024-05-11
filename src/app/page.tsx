import { Typography, Box, Stack } from "@mui/material";
import { PageContainer } from "@/components/PageContainer";
import Image from "next/image";
import illustration from "@/assets/illustration.svg";
import NextLink from "next/link";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Home() {
  return (
    <PageContainer isLandingPage={true}>
      <Box sx={{
        width:"35%",
        height:"45%",
        flexFlow:"wrap",
        marginTop: "100px"
      }}>
        <Stack spacing={2}>
          <Typography variant="h2">Ready for Trying a new recipe?</Typography>
          <NextLink href="/recipes" style={{textDecoration:"none"}}>
            <Typography variant="h4" color="primary" sx={{
              "&:hover":{
                textDecoration:"underline",
              },
            }}>
              Go to recipes <ArrowOutwardIcon />
            </Typography>
          </NextLink>
        </Stack>
      </Box>
      <Box position="absolute" sx={{top:0,right:0,zIndex:-1}}>
        <Image src={illustration} alt="Illustration" />
      </Box>
    </PageContainer>
  );
}