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
      paddingTop={26}
      paddingBottom={26}
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
            Ela é um exemplo.
          </Typography>
        </>
      }
    </CardContentGrid>
  )
}
