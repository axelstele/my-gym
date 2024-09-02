import { useIsMobile } from "@/app/hooks"
import { Grid, Stack, useTheme } from "@mui/material"
import { Card } from "../components/card"
import { Dialog } from "../training/plan-list/dialog"
import { useState } from "react"
import { nutritionalPlan } from "../options"
import { Title } from "@/app/components"

export const NutritionPlans = () => {
  const isMobile = useIsMobile();
  const theme = useTheme();

  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <Stack
        id='nutrition-plans'
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
          PLAN DE NUTRICIÓN
        </Title>
        <Grid
          container
          justifyContent={'center'}
        >
          <Grid
            item
            xs={12}
            md={4}
          >
            <Card
              title={'PLAN NUTRICIONAL A DISTANCIA'}
              bgImg={'nutrition.jpeg'}
              onClick={() => setShowDialog(true)}
            />
          </Grid>
        </Grid>
      </Stack>
      <Dialog
        open={showDialog}
        onClose={() => setShowDialog(false)}
        title={nutritionalPlan.title}
        items={nutritionalPlan.dialogContent.items}
      />
    </>
  )
}