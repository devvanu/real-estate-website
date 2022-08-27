import {  Flex, Heading, Button,  HStack, chakra } from '@chakra-ui/react';

const Header = () => {
  return (
    <chakra.header id="header">
      <Flex w='100%' px='6' py='5' align='center' justify='space-between'>
        <Heading color='pink.700'>Estatery.</Heading>

        <HStack spacing='5'>
            <Button variant='link'>Home</Button>
            <Button variant='link'>Features</Button>
            <Button variant='link'>About Us</Button>
        </HStack>

        <HStack>
          <Button variant='solid'>Contact</Button>
          <Button variant='outline'>Sign up</Button>
        </HStack>
      </Flex>
    </chakra.header>
  )
}

export default Header