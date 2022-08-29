import { HStack, VStack, Button, Text, Heading, Flex, Stack, Box, Image, Divider, SimpleGrid, GridItem } from '@chakra-ui/react';
import { BiPlus } from 'react-icons/bi'

import { bannerData } from '../data';
import Apartment1Lg from '../assets/images/apartments/a1lg.png';
import Apartment6Lg from '../assets/images/apartments/a6lg.png';

const Banner = () => {
  return (
    <>
      <Flex>

        <VStack px='8' py='20' bg='pink.100' align='left' borderTopLeftRadius='xl'>
          <Heading fontSize='3xl'>Find Real Estate That Suits You.</Heading>
          <Text fontSize='sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, fugit illo? Delectus, voluptas unde quae cupiditate at amet beatae totam!</Text>
          <Box py='6'>
            <Button width='30%'>Get Started</Button>
          </Box>

          <HStack spacing='5'>
            {
              bannerData.map( (item, index)=>
                <VStack key={index}>
                  <HStack>
                  <Text fontWeight='extrabold'  mr='-2'>{Object.keys(item)}</Text> <BiPlus style={{color: '#ED64A6'}} />
                  </HStack>
                  <Text mt='10'>{Object.values(item)}</Text>
                </VStack>
              )
            }
          </HStack>
        </VStack>

        <SimpleGrid>
          <GridItem>
            <Image src={Apartment1Lg} alt='house' />
          </GridItem>
          <GridItem>
            <Image src={Apartment6Lg} alt='house' />
          </GridItem>
        </SimpleGrid>
        {/* <VStack my='10' bg='white'>
        </VStack> */}

      </Flex>
    </>
  )
}

export default Banner