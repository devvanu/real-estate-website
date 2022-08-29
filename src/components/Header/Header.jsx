import { Flex, Heading, Button,  HStack, chakra, ButtonGroup, useBreakpointValue, Divider } from '@chakra-ui/react';
import NavMobile from './NavMobile';

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true })

  return (
    <chakra.header id="header">
      <Flex w='100%' py='5' align='center' justify='space-between' mb='2'>
        <Heading fontSize='3xl' color='pink.700'>Estatery.</Heading>
        {
          isDesktop ? (
          <>
            <ButtonGroup as='nav' variant='link' spacing='5'>
                {
                  ['Home', 'Features', 'About Us'].map((item)=>(
                    <Button fontSize='16px' key={item}>{item}</Button>
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
      <Divider />
    </chakra.header>
  )
}

export default Header