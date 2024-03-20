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
      paddingTop={14}
      paddingBottom={14}
      beforePage={'/chapter1/page3'}
      nextPage={'/chapter1/page5'}
      numberPage={'04'}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Uma linda mulher única, uma linda mulher inteligente, uma linda
            mulher divertida.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Sabe o que quer, por mais que muitas vezes ela seja insegura, mas
            ela nunca se deixou se render, ela arrisca quando necessário e se
            conserva também quando necessário.
          </Typography>

          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body1"
            align="center"
          >
            Não é egocêntrica pensou sempre muito no próximo, nunca foi alguém
            que você queira inimizade.
          </Typography>
        </>
      }
    </CardContentGrid>
  )
}
