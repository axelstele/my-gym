import { responsiveCarousel } from "@/app/constants";
import { useIsMobile } from "@/app/hooks"
import { Box, Stack, Typography, useTheme } from "@mui/material"
import Carousel from "react-multi-carousel";
import { options } from "./options";
import { Title } from "@/app/components";
import Image from "next/image";
import styled from "styled-components";

const StyledImage = styled(Image)`
  object-fit: contain;
`

const responsive = {
  desktop: {
    ...responsiveCarousel.desktop,
    items: 3,
  },
  mobile: {
    ...responsiveCarousel.mobile,
    items: 1
  }
};

export const MyStudents = () => {
  const isMobile = useIsMobile();
  const theme = useTheme();

  return (
    <Stack
      id='my-students'
      spacing={isMobile ? 4 : 8}
      p={isMobile ? 2 : 8}
    >
      <Title
        variant={isMobile ? 'h5' : 'h2'}
        fontWeight={600}
        fontStyle={'italic'}
        color={theme.palette.secondary.main}
        textAlign={'center'}
      >
        MIS ALUMNOS DICEN...
      </Title>
      <Carousel
        draggable={isMobile}
        keyBoardControl
        responsive={responsive}
        swipeable={isMobile}
      >
        {options.map((option) => (
          <Stack
            key={option.id}
            borderRadius={3}
            mr={isMobile ? 1 : 2}
            border={`2px solid ${theme.palette.primary.main}`}
            overflow={'hidden'}
          >
            <Box
              height={isMobile ? 250 : 350}
              position={'relative'}
            >
              <StyledImage
                src="/anonymous-girl.jpg"
                alt="Anonymous girl"
                fill
                sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Box>

            <Stack
              bgcolor={theme.palette.primary.main}
              p={isMobile ? 2 : 4}
              spacing={2}
              minHeight={150}
            >
              <Typography variant={isMobile ? 'body2' : 'body1'} fontStyle={'italic'}>
                {option.text}
              </Typography>
              <Typography variant='body2' fontWeight={600}>
                {option.name}
              </Typography>
            </Stack>
          </Stack>
        ))}
      </Carousel>
    </Stack>
  )
}