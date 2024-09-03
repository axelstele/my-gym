import { useIsMobile } from "@/app/hooks"
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material"
import { faceToFaceTraining, Plan, secondaryOptions } from "../../options";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import { Dialog } from "../../components/dialog";
import { Card } from "../../components";
import { Title } from "@/app/components";

type Props = {
  selectedCard: string;
  setSelectedCard: Dispatch<SetStateAction<string | null>>
}

export const PlanList = ({ selectedCard, setSelectedCard }: Props) => {
  const isMobile = useIsMobile();
  const theme = useTheme();
  const planListRef = useRef<HTMLDivElement>(null);

  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const isFaceToFaceTraining = selectedCard === faceToFaceTraining.title;

  const handleClose = () => {
    if (isFaceToFaceTraining) {
      setSelectedCard(null);
    }
    setSelectedPlan(null);
  }

  useEffect(() => {
    if (planListRef.current && !isFaceToFaceTraining) {
      planListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isFaceToFaceTraining, selectedCard]);

  useEffect(() => {
    if (isFaceToFaceTraining) {
      setSelectedPlan(faceToFaceTraining)
    }
  }, [isFaceToFaceTraining])

  return (
    <>
      {!isFaceToFaceTraining && (
        <Stack
          id='plan-list'
          spacing={isMobile ? 4 : 8}
          p={isMobile ? 2 : 8}
          ref={planListRef}
        >
          <Title
            variant={isMobile ? 'h5' : 'h2'}
            fontWeight={600}
            fontStyle={'italic'}
            color={theme.palette.secondary.main}
            textAlign={'center'}
          >
            {selectedCard}
          </Title>
          <Box>
            <Typography variant={isMobile ? 'body2' : 'h6'} fontWeight={600} mb={2}>
              SELECCIONÁ EL QUE MEJOR SE ADAPTE A TUS OBJETIVOS Y NECESIDADES
            </Typography>
            <Grid
              container
              spacing={isMobile ? 4 : 10}
            >
              {secondaryOptions.map((option) => (
                <Grid
                  key={option.title}
                  item
                  xs={12}
                  md={4}
                >
                  <Card
                    title={option.title}
                    bgImg={option.bgImg}
                    onClick={() => setSelectedPlan(option)}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      )}
      <Dialog
        open={Boolean(selectedPlan)}
        onClose={handleClose}
        title={selectedPlan?.title}
        subtitle={selectedPlan?.dialogContent.subtitle}
        items={selectedPlan?.dialogContent.items}
      />
    </>
  )
}