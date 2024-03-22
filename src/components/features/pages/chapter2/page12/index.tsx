import { CardContentGrid } from '@/card'
import { Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page12Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={30}
      paddingBottom={30}
      beforePage={'/chapter2/page11'}
      nextPage={'/chapter2/page13'}
      numberPage={'12'}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="h6"
            align="center"
          >
            Ela é um exemplo.
          </Typography>
        </>
      }
    </CardContentGrid>
  )
}
