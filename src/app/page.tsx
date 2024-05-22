import { Typography, Box, Stack } from "@mui/material";
import { PageContainer } from "@/components/PageContainer";
import Image from "next/image";
import illustration from "@/assets/illustration.svg";
import avocado from "@/assets/avocado.png";
import cheers from "@/assets/cheers.png";
import iceberg from "@/assets/iceberg.png";
import NextLink from "next/link";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

const fadeOutAndZoomAnimation = {
  opacity: 0,
  transform: "scale(1)",
  animation: "fadeOutAndZoom 0.5s ease-out forwards",
  animationDelay: "0.5s",
  '@media (max-width: 978px)': {
    display: "none"
  },
  '@keyframes fadeOutAndZoom': {
    from: {
      opacity: 0,
      transform: "scale(1)",
    },
    to: {
      opacity: 1,
      transform: "scale(0.8)",
    },
  },
};

type HomeProps = {}

export default function Home({}: HomeProps) {

  return (
    <PageContainer isLandingPage={true}>
      <Box sx={{
        width:{ xs: "100%", md: "38%" },
        height:"45%",
        flexFlow:"wrap",
        marginTop: "100px"
      }}>
        <Stack spacing={2} sx={{
            position:{ xs : "absolute", sm: "relative" },
            top: {xs:"520px", sm: "unset" },
            '@media (min-width: 0px) and (max-width: 400px)': {
                top: "450px",
            },
          }}>
          <Stack direction='row' flex={1}>
            <Stack sx={{
              widht:{xs: "50%", sm: "auto"},
            }}>
              <Typography variant="h1" color="primary" sx={{
                '@media (min-width: 520px) and (max-width: 599px)': {
                  width: "60%",
                }
              }}>
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
            </Stack>
            <Stack sx={{
              display:{xs:'none',sm:'flex',md:'none'},
            }}>
              <Image 
                src={avocado}
                alt="avocado-img"
                width={400}
                height={275}
                priority
              />
            </Stack>
          </Stack>
          <Stack width={1} flex={1} 
            minHeight={{ xs: "auto", md: "250px"}} 
            sx={{
                position: "absolute",
                left: -180,
                top: 200,
                ...fadeOutAndZoomAnimation,
              }}>
            <Image 
                src={iceberg} 
                alt="iceberg-salad" 
                width={700}
                height={475}
                sizes="100vw"
                priority
                style={{
                  width: "100%",
                  height: "auto",
                }}
            />  
          </Stack>
        </Stack>
      </Box>
      <Stack 
        direction='row' 
        flex={1} 
        spacing={3} 
        sx={{display:{xs:'none',sm:'flex',md:'none'}}}
      >
          <Image 
            src={iceberg} 
            alt="iceberg-salad" 
            width={400}
            height={275}
            priority
          />  
          <Image 
            src={cheers} 
            alt="cheers-img" 
            width={400}
            height={275}
            priority
          />
      </Stack>
      {/* MAIN BACKGROUND IMAGE */}
      <Box position="absolute" sx={{
        top:0,
        right:0,
        zIndex: { xs:0, md:-1 },
        display: { sm: "none", md: "block" },
      }}>
        <Image 
            src={illustration} 
            alt="Illustration" 
            width={700}
            height={475}
            sizes="100vw"
            priority
            style={{
              width: "100%",
              height: "auto",
            }}
        />
      </Box>
    </PageContainer>
  );
}

{/* 
<Stack>
  <Typography variant="h2" color="primary">
    Welcome to the Vegetarian Recipe App
  </Typography>
  <Typography variant="h4" color="primary">
    Here you can find a lot of vegetarian recipes that you can try at home.
  </Typography>
</Stack> 
*/}