import { ImageTitle } from "@/app/components";
import { useIsMobile } from "@/app/hooks";
import { Stack, StackProps } from "@mui/material"
import styled from "styled-components"

type Props = {
  title: string;
  bgImg: string;
  onClick: () => void;
}

type CustomStack = StackProps & {
  $bgImg: string;
}

const StyledStack = styled(Stack)<CustomStack>(({ $bgImg }) => ({
  background: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('${$bgImg}') no-repeat center center / cover`,
  cursor: 'pointer',
  transition: "opacity 0.3s ease",

  "&:hover": {
    opacity: 0.85,
  },
}));

export const Card = ({ title, bgImg, onClick }: Props) => {
  const isMobile = useIsMobile();

  return (
    <StyledStack
      height={isMobile ? 500 : 700}
      alignItems={'center'}
      justifyContent={'center'}
      $bgImg={bgImg}
      borderRadius={3}
      boxShadow={10}
      onClick={onClick}
    >
      <ImageTitle
        variant={isMobile ? 'h5' : 'h4'}
        fontStyle={'italic'}
        color={'white'}
        fontWeight={600}
        textAlign={'center'}
      >
        {title}
      </ImageTitle>
    </StyledStack>
  )
}