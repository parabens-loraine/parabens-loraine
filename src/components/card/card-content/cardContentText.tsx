import {
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  NavigateBeforeIcon,
  NavigateNextIcon,
} from '@/ui'
import React, { ReactNode } from 'react'

interface CardContentProps {
  children: ReactNode
  numberPage?: string
  nextPage?: string
  beforePage?: string
  paddingTop?: string | number
  left?: string | number
  paddingBottom?: string | number
  buttonBeforeDisabled?: boolean
  buttonAfterDisabled?: boolean
}

const CardContentSkeleton: React.FC<CardContentProps> = ({
  children,
  paddingTop,
  paddingBottom,
  left,
}) => {
  return (
    <CardContent className={'form-field'}>
      <Grid
        position="relative"
        container
        justifyContent="center"
        alignItems="center"
        wrap="nowrap"
        spacing={2}
        padding={5}
        style={{
          paddingTop: paddingTop,
          paddingBottom: paddingBottom,
          left: left,
        }}
      >
        <Grid item xs>
          {children}
        </Grid>
      </Grid>
    </CardContent>
  )
}

const CardContentGrid: React.FC<CardContentProps> = ({
  children,
  numberPage,
  nextPage,
  beforePage,
  buttonBeforeDisabled,
  buttonAfterDisabled,
  paddingTop,
  paddingBottom,
  left,
}) => {
  return (
    <Box>
      <Card>
        <CardContentSkeleton
          paddingTop={`${paddingTop}vh`}
          paddingBottom={`${paddingBottom}vh`}
          left={`${left}vw`}
        >
          {children}
        </CardContentSkeleton>
      </Card>
      <Grid
        container
        position={'relative'}
        top={'50px'}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <IconButton
          aria-label="Página anterior"
          className={`btn`}
          disabled={buttonBeforeDisabled}
          size="large"
          href={`${beforePage}`}
        >
          <NavigateBeforeIcon fontSize="inherit" />
        </IconButton>
        <IconButton className={`btn`} disabled={true}>
          {numberPage}
        </IconButton>
        <IconButton
          aria-label="Próxima página"
          className={`btn`}
          disabled={buttonAfterDisabled}
          size="large"
          href={`${nextPage}`}
        >
          <NavigateNextIcon fontSize="inherit" />
        </IconButton>
      </Grid>
    </Box>
  )
}

export default CardContentGrid
