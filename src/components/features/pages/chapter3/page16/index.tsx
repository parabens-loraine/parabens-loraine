import { CardContentGrid } from '@/card'
import { Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page16Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={24}
      paddingBottom={24}
      beforePage={'/chapter2/page15'}
      nextPage={'/chapter2/page17'}
      numberPage={'16'}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body2"
            align="justify"
          >
            Não tenha medo de se arriscar. Não tenha medo de errar. Não tenha
            medo de sentir.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body2"
            align="justify"
          >
            Afinal, é disso que somos feitos e aquele que sabe seu limite, sabe
            demonstrar, sabe sentir ser humano.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body2"
            align="justify"
          >
            É louvável.
          </Typography>
        </>
      }
    </CardContentGrid>
  )
}
