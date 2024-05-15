import { Typography, Box, Stack } from "@mui/material";
import { PageContainer } from "@/components/PageContainer";
import Image from "next/image";
import illustration from "@/assets/illustration.svg";
import NextLink from "next/link";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

export default function Home() {
  return (
    <PageContainer>
      <Box sx={{
        width:"38%",
        height:"45%",
        flexFlow:"wrap",
        marginTop: "100px"
      }}>
        <Stack spacing={2} sx={{
            position:{ xs : "absolute", sm: "relative" },
            top: { xs: 350, sm: "unset" }
          }}>
          <Typography variant="h1" color="primary" >
            Ready for trying a new vegetarian recipe?
          </Typography>
          <NextLink href="/recipes" style={{textDecoration:"none"}}>
            <Typography variant="h3" color="#0000FF" sx={{
              "&:hover":{
                textDecoration:"underline",
              },
            }}>
              Go to recipes <ArrowOutwardIcon />
            </Typography>
          </NextLink>
          <Stack width={1} flex={1} minHeight={{ xs: "auto", md: "250px"}}>

          </Stack>
        </Stack>
      </Box>
      <Box position="absolute" sx={{
        top:0,
        right:0,
        zIndex:-1,
        display: { sm: "none", md: "block" },
      }}>
        <Image 
            src={illustration} 
            alt="Illustration" 
            width={700}
            height={475}
            sizes="100vw"
            style={{
              width: "100%",
              height: "auto",
            }}
        />
      </Box>
    </PageContainer>
  );
}