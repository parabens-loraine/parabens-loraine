import { CardContentGrid } from '@/card'
import { Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page3Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={28}
      paddingBottom={28}
      beforePage={'/introduction'}
      nextPage={'/chapter1/page4'}
      numberPage={'03'}
    >
      {
        <Typography
          className={`${alegreya400.className} text-light-textPrimary`}
          variant="h3"
          align="center"
        >
          Sobre ela...
        </Typography>
      }
    </CardContentGrid>
  )
}
