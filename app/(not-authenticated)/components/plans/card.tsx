import { useIsMobile } from "@/app/hooks";
import { Stack, StackProps, Typography } from "@mui/material"
import styled from "styled-components"

type Props = {
  title: string;
  bgImg: string;
}

type CustomStack = StackProps & {
  $bgImg: string;
}

const StyledStack = styled(Stack)<CustomStack>(({ $bgImg }) => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${$bgImg}') no-repeat center center / cover`,
  cursor: 'pointer',
  transition: "opacity 0.3s ease",

  "&:hover": {
    opacity: 0.8,
  },
}));

export const Card = ({ title, bgImg }: Props) => {
  const isMobile = useIsMobile();

  return (
    <StyledStack
      height={isMobile ? 300 : 500}
      alignItems={'center'}
      justifyContent={'center'}
      $bgImg={bgImg}
      borderRadius={3}
      boxShadow={10}
    >
      <Typography
        variant={isMobile ? 'h5' : 'h4'}
        fontStyle={'italic'}
        color={'white'}
        fontWeight={600}
        textAlign={'center'}
      >
        {title}
      </Typography>
    </StyledStack>
  )
}