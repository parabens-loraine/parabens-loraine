import { Video } from '@/imagens/video'
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  NavigateBeforeIcon,
} from '@/ui'
import React from 'react'

const Final = (
  <React.Fragment>
    <CardContent className={'form-field'}>
      <Grid container justifyContent="center" alignItems="center">
        <Video />
      </Grid>
      <Grid
        container
        wrap="wrap"
        spacing={1}
        paddingTop={'0vh'}
        position={'relative'}
      >
        <Grid
          item
          xs={15}
          md={20}
          container
          justifyContent="center"
          alignItems="center"
        ></Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
)
export default function PageFinalCard(): JSX.Element {
  return (
    <Box>
      <Card>{Final}</Card>
      <Grid
        container
        position={'relative'}
        top={'50px'}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton
          className={`
          btn`}
          disabled={false}
          size="large"
          href="/chapter2/page19"
        >
          <NavigateBeforeIcon fontSize="inherit" />
        </IconButton>
        <IconButton
          className={`
          btn`}
          disabled={true}
        >
          FIM
        </IconButton>
      </Grid>
    </Box>
  )
}
