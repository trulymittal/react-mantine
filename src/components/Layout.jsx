import {
  AppShell,
  Aside,
  Box,
  Burger,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useState } from 'react'

export default function Layout({ children }) {
  const theme = useMantineTheme()
  const [opened, setOpened] = useState(false)
  const isAbove768 = useMediaQuery('(min-width: 768px)')

  return (
    <AppShell
      className='app-shell'
      styles={{
        main: {
          background:
            theme.colorScheme === 'dark'
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      fixed={false}
      maw={'1280px'}
      mx='auto'
      navbarOffsetBreakpoint='sm'
      asideOffsetBreakpoint='sm'
      navbar={
        <Navbar
          p='md'
          hiddenBreakpoint='sm'
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
          style={{ backgroundColor: 'gray' }}
        >
          <Text>Application navbar</Text>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
          <Aside
            p='md'
            hiddenBreakpoint='sm'
            width={{ sm: 200, lg: 300 }}
            style={{ backgroundColor: 'lightcyan' }}
          >
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      // footer={
      //   <Footer height={60} p='md'>
      //     Application footer
      //   </Footer>
      // }
      header={
        !isAbove768 ? (
          <Header
            height={{ base: 50, md: 70 }}
            p='md'
            display={isAbove768 ? 'none' : 'inherit'}
          >
            <div
              style={{ display: 'flex', alignItems: 'center', height: '100%' }}
            >
              <MediaQuery largerThan='sm' styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened(o => !o)}
                  size='sm'
                  color={theme.colors.gray[6]}
                  mr='xl'
                />
              </MediaQuery>
              <Text>Application header</Text>
            </div>
          </Header>
        ) : null
      }
    >
      <>
        <Box style={{ backgroundColor: 'lightcoral' }}>{children}</Box>
      </>
    </AppShell>
  )
}
