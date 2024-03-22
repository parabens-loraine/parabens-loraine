import { CardContentGrid } from '@/card'
import { ImagemPastel } from '@/imagens'
import { Grid, Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page10Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={9}
      paddingBottom={10}
      beforePage={'/chapter2/page9'}
      nextPage={'/chapter2/page11'}
      numberPage={'10'}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Ama Comer.
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            top={'2vh'}
            position={'relative'}
          >
            <ImagemPastel />
          </Grid>
        </>
      }
    </CardContentGrid>
  )
}
