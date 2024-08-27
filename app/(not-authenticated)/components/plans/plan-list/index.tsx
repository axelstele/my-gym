import { useIsMobile } from "@/app/hooks"
import { Box, Grid, Stack, Typography, useTheme } from "@mui/material"
import { Plan, secondaryOptions } from "../options";
import { Card } from "../card";
import { useEffect, useRef, useState } from "react";
import { Dialog } from "./dialog";

type Props = {
  selectedCard: string;
}

export const PlanList = ({ selectedCard }: Props) => {
  const isMobile = useIsMobile();
  const theme = useTheme();
  const planListRef = useRef<HTMLDivElement>(null);

  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  useEffect(() => {
    if (planListRef.current) {
      planListRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [selectedCard]);

  return (
    <>
      <Stack
        id='plan-list'
        spacing={isMobile ? 4 : 8}
        p={isMobile ? 2 : 8}
        ref={planListRef}
      >
        <Typography
          variant={isMobile ? 'h5' : 'h2'}
          fontWeight={600}
          fontStyle={'italic'}
          color={theme.palette.secondary.main}
          textAlign={'center'}
        >
          {selectedCard}
        </Typography>
        <Box>
          <Typography variant={isMobile ? 'body2' : 'h6'} fontWeight={600} mb={2}>
            SELECCIONÁ EL QUE MEJOR SE ADAPTE A TUS OBJETIVOS Y NECESIDADES
          </Typography>
          <Grid
            container
            columnSpacing={isMobile ? 0 : 3}
            rowSpacing={isMobile ? 1 : 3}
            width={'100%'}
          >
            {secondaryOptions.map((option) => (
              <Grid
                key={option.title}
                item
                xs={12}
                md={4}
                onClick={() => setSelectedPlan(option)}
              >
                <Card title={option.title} bgImg={option.bgImg} />
              </Grid>
            ))}
          </Grid>
        </Box>

      </Stack>
      <Dialog
        open={Boolean(selectedPlan)}
        onClose={() => setSelectedPlan(null)}
        title={selectedPlan?.title}
        subtitle={selectedPlan?.dialogContent.subtitle}
        items={selectedPlan?.dialogContent.items}
      />
    </>
  )
}