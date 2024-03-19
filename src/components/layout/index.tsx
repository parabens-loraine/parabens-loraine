import Footer from './footer'
import Header from './header'
import { Box, Container } from '@/ui'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxWidth="xs">
      <>
        <Box
          sx={{
            bgcolor: 'backgroundColor',
          }}
        >
          <Header />
          <main>{children}</main>
          <Footer />
        </Box>
      </>
    </Container>
  )
}

export default Layout
