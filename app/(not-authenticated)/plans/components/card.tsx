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
  cursor: 'pointer'
}));

const phoneNumber = '+542914602205';


export const Card = ({ title, bgImg }: Props) => {
  const isMobile = useIsMobile();

  const handleConsultClick = (planName: string) => {
    const message = `Hola! Estoy interesado en el plan ${planName}.`;
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  };

  return (
    <StyledStack height={'100%'} alignItems={'center'} justifyContent={'center'} $bgImg={bgImg} onClick={() => handleConsultClick(title)}>
      <Typography variant={isMobile ? 'h5' : 'h4'} fontStyle={'italic'} color={'white'} fontWeight={600} textAlign={'center'}>
        {title}
      </Typography>
    </StyledStack>
  )
}