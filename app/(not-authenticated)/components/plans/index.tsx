import { useIsMobile } from "@/app/hooks"
import { Grid, Stack, Typography, useTheme } from "@mui/material"
import { Card } from "./card";
import { useEffect, useRef, useState } from "react";
import { mainOptions } from "./options";
import { PlanList } from "./plan-list";

export const Plans = () => {
  const isMobile = useIsMobile()
  const theme = useTheme();

  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handlePlanGroupClick = (title: string) => {
    setSelectedCard(title);
  };

  return (
    <>
      <Stack
        id='plans'
        spacing={isMobile ? 4 : 8}
        p={isMobile ? 2 : 8}
      >
        <Typography
          variant={isMobile ? 'h5' : 'h2'}
          fontWeight={600}
          fontStyle={'italic'}
          color={theme.palette.secondary.main}
          textAlign={'center'}
        >
          ELEGÍ TU PLAN DE ENTRENAMIENTO
        </Typography>
        <Grid
          container
          columnSpacing={isMobile ? 0 : 3}
          rowSpacing={isMobile ? 1 : 3}
          width={'100%'}
        >
          {mainOptions.map((option) => (
            <Grid
              key={option.title}
              item
              xs={12}
              md={4}
              onClick={() => handlePlanGroupClick(option.title)}
            >
              <Card title={option.title} bgImg={option.bgImg} />
            </Grid>
          ))}
        </Grid>
      </Stack>
      {selectedCard && (
        <PlanList selectedCard={selectedCard} />
      )}
    </>
  )
}