import { CardContentGrid } from '@/card'
import { Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page11Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={22}
      paddingBottom={22}
      beforePage={'/chapter2/page10'}
      nextPage={'/chapter2/page12'}
      numberPage={'11'}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            E hoje está se reencontrando.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Apesar das muitas batalhas,
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            ela nunca se entregou.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Nunca teve medo de falar que
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            precisava de ajuda.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Foi forte mesmo quando
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            eu não tinha forças.
          </Typography>
        </>
      }
    </CardContentGrid>
  )
}
