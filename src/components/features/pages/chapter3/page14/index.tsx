import { CardContentGrid } from '@/card'
import { Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page14Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={30}
      paddingBottom={30}
      beforePage={'/chapter2/page13'}
      nextPage={'/chapter2/page15'}
      numberPage={'14'}
      left={2}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textPrimary`}
            variant="overline"
            align="center"
            noWrap
          >
            Agora palavras de admiradores
          </Typography>
        </>
      }
    </CardContentGrid>
  )
}
