import { CardContentGrid } from '@/card'
import { ImagemElas } from '@/imagens'
import { Grid, Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page19Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={7}
      paddingBottom={7}
      beforePage={'/chapter2/page18'}
      nextPage={'/pageFinal'}
      numberPage={'19'}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body2"
            align="justify"
          >
            Nessa caminhada pode sempre contar comigo, seja para chorar,
            conversar, ficar somente pertinho segurando a mão e festejar seja o
            que for.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body2"
            align="justify"
          >
            Te amo com todo meu amor ❤
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            top={'2vh'}
            position={'relative'}
          >
            <ImagemElas />
          </Grid>
        </>
      }
    </CardContentGrid>
  )
}
