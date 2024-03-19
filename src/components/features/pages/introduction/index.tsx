import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  NavigateBeforeIcon,
  NavigateNextIcon,
  Typography,
} from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

const Introduction = (
  <React.Fragment>
    <CardContent className={'form-field'}>
      <Grid
        container
        wrap="nowrap"
        spacing={2}
        padding={5}
        paddingTop={'4vh'}
        paddingBottom={'4vh'}
      >
        <Grid item xs>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="overline"
          >
            É 21 da Loraine e eu tentei fazer algo diferente sem ajuda do GPT.
            queria fazer algo criativo e autêntico né, e aqui só uma pequena
            introdução de uma pequena história do que eu quero contar e eu
            espero que você goste é confesso que eu estou um pouco nervoso sim
            fazendo isso, mas tentei trazer um pouco do que eu amo de uma forma
            que fique divertida então vamos lá...
          </Typography>
        </Grid>
      </Grid>
    </CardContent>
  </React.Fragment>
)
export default function IntroductionCard(): JSX.Element {
  return (
    <Box>
      <Card>{Introduction}</Card>
      <Grid
        container
        position={'relative'}
        top={'50px'}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <>
          <IconButton
            className={`
          btn`}
            disabled={false}
            size="large"
            href="/"
          >
            <NavigateBeforeIcon fontSize="inherit" />
          </IconButton>
          <IconButton
            className={`
          btn`}
            disabled={true}
          >
            02
          </IconButton>
          <IconButton
            className={`
          btn`}
            disabled={false}
            size="large"
            href="/chapter1/page3"
          >
            <NavigateNextIcon fontSize="inherit" />
          </IconButton>
        </>
      </Grid>
    </Box>
  )
}
