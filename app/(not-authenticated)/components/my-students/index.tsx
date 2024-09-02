import { responsiveCarousel } from "@/app/constants";
import { useIsMobile } from "@/app/hooks"
import { Stack, StackProps, Typography, useTheme } from "@mui/material"
import Carousel from "react-multi-carousel";
import { options } from "./options";
import styled from "styled-components";
import { Title } from "@/app/components";

type CustomStack = StackProps & {
  $bgImg: string;
}

const StyledStack = styled(Stack)<CustomStack>(({ $bgImg }) => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${$bgImg}') no-repeat center center / cover`,
}));

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
          <StyledStack
            key={option.id}
            height={isMobile ? 450 : 500}
            $bgImg={option.bgImg}
            justifyContent={'flex-end'}
            mr={isMobile ? 1 : 2}
            borderRadius={3}
            overflow={'hidden'}
          >
            <Stack
              bgcolor={theme.palette.primary.main}
              p={isMobile ? 2 : 4}
              spacing={2}
            >
              <Typography variant={isMobile ? 'body2' : 'body1'} fontStyle={'italic'}>
                {option.text}
              </Typography>
              <Typography variant='body2' fontWeight={600}>
                {option.name}, {option.age}
              </Typography>
            </Stack>
          </StyledStack>
        ))}
      </Carousel>
    </Stack>
  )
}