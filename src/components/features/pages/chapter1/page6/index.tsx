import { CardContentGrid } from '@/card'
import { Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page6Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={28}
      paddingBottom={28}
      left={4}
      beforePage={'/chapter1/page5'}
      nextPage={'/chapter1/page7'}
      numberPage={'06'}
    >
      {
        <Typography
          className={`${alegreya400.className} text-light-textSecondary`}
          variant="h6"
        >
          Não tem como não a amar.
        </Typography>
      }
    </CardContentGrid>
  )
}
