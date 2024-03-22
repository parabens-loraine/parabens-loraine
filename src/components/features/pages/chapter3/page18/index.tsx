import { CardContentGrid } from '@/card'
import { Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page18Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={14}
      paddingBottom={14}
      beforePage={'/chapter2/page17'}
      nextPage={'/chapter2/page19'}
      numberPage={'18'}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body2"
            align="justify"
          >
            Oro para que Deus continue te abençoando e guiando nos caminhos que
            ele preparou para você, caminhos de conquistas e realizações.
            Desfrute de cada segundo de seu tempo, pois cada segundo é único e
            não volta. Olhe sempre para frente para novas conquistas e de caso
            olhar para trás, seja para lembrar o quão forte você é e tudo que o
            que aconteceu foi para o seu crescimento, nada é por acaso tudo tem
            um propósito e é esse propósito que nos faz sonhar e lutar para
            vencer a incerteza.
          </Typography>

          <Typography
            className={`${alegreya400.className} text-light-texPrimary`}
            variant="subtitle2"
            align="right"
          >
            continua...
          </Typography>
        </>
      }
    </CardContentGrid>
  )
}
