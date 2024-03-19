import { ImagemCapa } from '@/imagens'
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  NavigateNextIcon,
  Typography,
} from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya700 = Alegreya({
  weight: '700',
  subsets: ['latin'],
})
const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

const Capa = (
  <React.Fragment>
    <CardContent className={'form-field'}>
      <Grid container justifyContent="center" alignItems="center">
        <ImagemCapa />
      </Grid>
      <Grid container wrap="wrap" spacing={1} paddingTop={2}>
        <Grid
          item
          xs={15}
          md={20}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            className={`${alegreya700.className} text-light-textPrimary`}
            variant="h5"
          >
            Wingrid Loraine Alvez Muniz
          </Typography>
        </Grid>
        <Grid
          item
          xs={20}
          md={20}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="subtitle2"
          >
            Uma pequena história de uma grande mulher...
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
)
export default function CapaCard(): JSX.Element {
  return (
    <Box>
      <Card>{Capa}</Card>
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
          disabled={true}
        >
          01
        </IconButton>
        <IconButton
          className={`
          btn`}
          disabled={false}
          size="large"
          href="/introduction"
        >
          <NavigateNextIcon fontSize="inherit" />
        </IconButton>
      </Grid>
    </Box>
  )
}
