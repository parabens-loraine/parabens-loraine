import { CardContentGrid } from '@/card'
import { Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page5Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={26}
      paddingBottom={26}
      left={2}
      beforePage={'/chapter1/page4'}
      nextPage={'/chapter1/page6'}
      numberPage={'05'}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body2"
            align="center"
          >
            Uma mulher que ama muito o próximo.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body2"
            align="center"
          >
            Que se preocupa com sua família.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body2"
            align="center"
          >
            Que gosta do que faz.
          </Typography>
        </>
      }
    </CardContentGrid>
  )
}
