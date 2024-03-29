import { CardContentGrid } from '@/card'
import { Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Introduction(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={14}
      paddingBottom={14}
      beforePage={'/'}
      nextPage={'/chapter1/page3'}
      numberPage={'02'}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            É 21 da Loraine e eu tentei fazer algo diferente sem ajuda do GPT.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Queria fazer algo criativo e autêntico, aqui será uma pequena
            introdução de uma grande história que eu vou contar.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Espero que você goste, confesso que fiquei um pouco nervoso fazendo
            isso.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Mas tentei trazer um pouco de quem eu amo de uma forma divertida
            então vamos lá...
          </Typography>
        </>
      }
    </CardContentGrid>
  )
}
