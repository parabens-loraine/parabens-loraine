import { CardContentGrid } from '@/card'
import { Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page13Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={28}
      paddingBottom={28}
      beforePage={'/chapter2/page12'}
      nextPage={'/chapter2/page14'}
      numberPage={'13'}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Exemplo de perseverança.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Exemplo de raça.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Exemplo de mudança.
          </Typography>
        </>
      }
    </CardContentGrid>
  )
}
