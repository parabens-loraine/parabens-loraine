import { CardContentGrid } from '@/card'
import { ImagemAtriz } from '@/imagens'
import { Grid, Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page8Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={14}
      paddingBottom={14}
      beforePage={'/chapter1/page7'}
      nextPage={'/chapter2/page9'}
      numberPage={'08'}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Gosta das coisas simples da vida,
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            sair, acordar e ver a luz do Sol.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Se divertir, aproveitar os momentos.
          </Typography>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            paddingTop={2}
          >
            <ImagemAtriz />
          </Grid>
        </>
      }
    </CardContentGrid>
  )
}
