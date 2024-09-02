import { useIsMobile } from "@/app/hooks"
import { Grid, Stack, Typography, useTheme } from "@mui/material"
import styled from "styled-components";
import { mainOptions } from "../options";
import { Card } from "../components/card";
import { useState } from "react";
import { PlanList } from "./plan-list";
import { Title } from "@/app/components";

export const TrainingPlans = () => {
  const isMobile = useIsMobile();
  const theme = useTheme();

  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handlePlanGroupClick = (title: string) => {
    setSelectedCard(title);
  };

  return (
    <>
      <Stack
        id='training-plans'
        rowGap={isMobile ? 4 : 8}
        p={isMobile ? 2 : 8}
      >
        <Title
          variant={isMobile ? 'h5' : 'h2'}
          fontWeight={600}
          fontStyle={'italic'}
          color={theme.palette.secondary.main}
          textAlign={'center'}
        >
          ELEGÍ TU PLAN DE ENTRENAMIENTO
        </Title>
        <Grid
          container
          spacing={isMobile ? 4 : 10}
        >
          {mainOptions.map((option) => (
            <Grid
              key={option.title}
              item
              xs={12}
              md={4}
            >
              <Card
                title={option.title}
                bgImg={option.bgImg}
                onClick={() => handlePlanGroupClick(option.title)}
              />
            </Grid>
          ))}
        </Grid>
      </Stack>
      {selectedCard && (
        <PlanList
          selectedCard={selectedCard}
          setSelectedCard={setSelectedCard}
        />
      )}
    </>
  )
}