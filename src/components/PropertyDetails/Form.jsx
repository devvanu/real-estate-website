import { Stack, Textarea, Image, VStack, HStack, Box, Text, Input, Button, FormControl } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Form = () => {
  return (
    <VStack border='1px' borderColor='pink.100' boxShadow='md' px='5' py='6'>
        <HStack>
            <Image borderRadius='full' boxSize='75px' src='https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg' />
            <Box>
                <Text mb='-3px' fontWeight='extrabold' fontSize='15px'>Kaithiyn Genraiwz</Text>
                <Link to='' style={{fontSize: '12px'}}>View Listings</Link>
            </Box>
        </HStack>

        <VStack my='3px' spacing='2px'>
            <form>
                <Input mt='3' mb='2' placeholder="Name*" />
                <Input placeholder="Email*" />
                <Input my='2' placeholder="Phone*" />
                <Textarea my='2' type='text' placeholder='Message*'  defaultValue='Hello, I am interested in [Modern apartment]' />
                <HStack my='2'>
                    <Button w='full' px='4' type='submit'>Send Message</Button>
                    <Button w={{base: 'full', md: '50%'}} variant='outline'>Call</Button>
                </HStack>
            </form>
        </VStack>
    </VStack>
  )
}

export default Form