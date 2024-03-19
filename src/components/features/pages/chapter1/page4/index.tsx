import { CardContentGrid } from '@/card'
import { Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page4Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={4}
      paddingBottom={4}
      beforePage={'/chapter1/page3'}
      buttonAfterDisabled={true}
      numberPage={'04'}
    >
      {
        <Typography
          className={`${alegreya400.className} text-light-textSecondary`}
          variant="overline"
        >
          É 21 da Loraine e eu tentei fazer algo diferente sem ajuda do GPT.
          queria fazer algo criativo e autêntico né, e aqui só uma pequena
          introdução de uma pequena história do que eu quero contar e eu espero
          que você goste é confesso que eu estou um pouco nervoso sim fazendo
          isso, mas tentei trazer um pouco do que eu amo de uma forma que fique
          divertida então vamos lá...
        </Typography>
      }
    </CardContentGrid>
  )
}
