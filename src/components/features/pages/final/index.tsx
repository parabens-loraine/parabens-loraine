import { Video } from '@/imagens/video'
import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  NavigateBeforeIcon,
  Typography,
} from '@/ui'
import { Link } from '@mui/material'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

const Final = (
  <React.Fragment>
    <CardContent className={'form-field '}>
      <Grid
        item
        xs={15}
        md={20}
        container
        justifyContent="center"
        alignItems="center"
        style={{ paddingTop: '8vh', paddingBottom: '8vh' }}
      >
        <Typography
          className={`${alegreya400.className} text-light-textPrimary`}
          variant="h5"
          align="center"
        >
          um último recado
        </Typography>
        <Typography
          className={`${alegreya400.className} text-light-textSecondary`}
          variant="h6"
          align="center"
        >
          senha: a data que você veio ao mundo
        </Typography>
      </Grid>
      <Grid container justifyContent="center" alignItems="center">
        <Video />
        <Grid
          item
          xs={15}
          md={20}
          container
          justifyContent="center"
          alignItems="center"
        >
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="subtitle1"
            align="center"
          >
            ou
          </Typography>
        </Grid>
        <Link
          underline="none"
          variant="body2"
          href="https://1drv.ms/f/s!AmDS29IwXOgbhbkeiXsRiQ8FQPedew?e=Jup9Dd"
          className={`${alegreya400.className} text-light-textPrimary`}
        >
          tente aqui
        </Link>
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
