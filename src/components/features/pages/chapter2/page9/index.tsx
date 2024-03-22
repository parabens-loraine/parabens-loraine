import { CardContentGrid } from '@/card'
import { ImagemKled, ImagemSett } from '@/imagens'
import { Grid, Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page9Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={21}
      paddingBottom={21}
      beforePage={'/chapter2/page8'}
      nextPage={'/chapter2/page10'}
      numberPage={'09'}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Ama os animais.
          </Typography>
          <Grid
            container
            wrap="nowrap"
            spacing={5.5}
            top={'6vh'}
            position={'relative'}
          >
            <>
              <ImagemKled />
              <div style={{ margin: '0 1%' }} />
              <ImagemSett />
            </>
          </Grid>
        </>
      }
    </CardContentGrid>
  )
}
