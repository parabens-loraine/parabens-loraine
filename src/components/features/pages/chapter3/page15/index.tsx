import { CardContentGrid } from '@/card'
import { Typography } from '@/ui'
import { Alegreya } from 'next/font/google'
import React from 'react'

const alegreya400 = Alegreya({
  weight: '400',
  subsets: ['latin'],
})

export default function Page15Card(): JSX.Element {
  return (
    <CardContentGrid
      paddingTop={0}
      paddingBottom={0}
      beforePage={'/chapter2/page14'}
      nextPage={'/chapter2/page16'}
      numberPage={'15'}
    >
      {
        <>
          <Typography
            className={`${alegreya400.className} text-light-textPrimary`}
            variant="overline"
            align="center"
          >
            Jonathan
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body2"
            align="justify"
          >
            E o que que eu queria falar para você é: Meus parabéns. 21 anos,
            saudável, forte, elegante e principalmente, sempre linda. Que Deus
            possa te abençoar.
          </Typography>
          <Typography
            className={`${alegreya400.className} text-light-textSecondary`}
            variant="body2"
            align="justify"
          >
            E que você consiga realizar seus objetivos, seus sonhos, tudo na
            base de Deus sendo sua referência. Que, por mais que as frustrações
            venham, os problemas venham. Você é uma guerreira. Você não desiste,
            você tenta, vai muito além do seu limite. E eu tenho só agradecer a
            Deus pela sua vida, de ter você do meu lado. Um exemplo de força,
            persistência, centralidade. E obrigado, por existir, por não muitas
            vezes ter passado na sua cabeça. De desistir da vida, mas, você não
            fez mesmo assim, isso mostra o quão você é. Espero que você realize
            seus sonhos, cada dia mais que venham crescer, independente do que
            você escolheu para sua vida de profissão, de escolhas de estilo de
            vida. E que você continue tendo essa sabedoria. É um Deus na frente,
            você vai longe.
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
