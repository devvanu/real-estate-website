import { Flex, Heading, Button,  HStack, chakra, ButtonGroup, useBreakpointValue } from '@chakra-ui/react';
import NavMobile from './NavMobile';

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, md: true })

  return (
    <chakra.header id="header">
      <Flex w='100%' px='6' py='5' align='center' justify='space-between'>
        <Heading color='pink.700'>Estatery.</Heading>
        {
          isDesktop ? (
          <>
            <ButtonGroup as='nav' variant='link' spacing='5'>
                {
                  ['Home', 'Features', 'About Us'].map((item)=>(
                    <Button key={item}>{item}</Button>
                    ))
                }
            </ButtonGroup>

            <HStack>
              <Button size='sm' variant='solid'>Contact</Button>
              <Button size='sm' variant='outline'>Sign up</Button>
            </HStack>
          </>
          ) : (
            <NavMobile />
          )
        }
      </Flex>
    </chakra.header>
  )
}

export default Header