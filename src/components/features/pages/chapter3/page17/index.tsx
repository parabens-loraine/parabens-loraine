import { CardContentGrid } from '@/card'
import { Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page17Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={10}
      paddingBottom={10}
      beforePage={'/chapter2/page16'}
      nextPage={'/chapter2/page18'}
      numberPage={'17'}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textPrimary`}
            variant="overline"
            align="center"
          >
            Beatriz
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body2"
            align="justify"
          >
            Que honra fazer parte desse capítulo da sua vida. Desejo que esse
            dia e os demais dias de sua vida sejam repletos de muita paz, saúde,
            alegria e bençãos, pessoas especiais como você faz o dia de quem te
            conhece der mais florido e cheio de esperança. Nunca deixe que
            pessoas que ainda não conhecem a sua essência ofuscar ou até mesmo
            apagar esse brilho que só você tem. Quando nosso Deus te criou,
            escolheu os melhores ingredientes, pensando em cada detalhe
            transformando em uma perfeita obra de arte. Hoje entendo por que
            todo dia 23 de março é tão especial, porque foi o dia que o Senhor
            para você.
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
