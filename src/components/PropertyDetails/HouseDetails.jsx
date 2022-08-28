import { Stack, VStack, Heading, Text, Box, HStack, Image, Input, Textarea, Button } from "@chakra-ui/react"
import { BiBed, BiBath, BiArea } from "react-icons/bi";
import Form from "./Form";

const HouseDetails = () => {
  return (
    <>
      <HStack justify='space-between' my='28px'>
        <Box>
          <Heading fontSize='25px'>House 4</Heading>
          <Text fontSize='15px'>B4 Woodland St. Cocoa. FL 329227</Text>
        </Box>
        
        <HStack>
          <Text px='3' borderRadius='full' bg='green.300'>House</Text>
          <Text px='3' borderRadius='full' bg='purple.300'>Canda</Text>
        </HStack>

        <Text fontWeight="extrabold" fontSize="20px" color="pink.500">Rs. 200000</Text>
      </HStack>

      <Stack direction={{base:'column', lg: 'row'}} gap='6' align='flex-start'>
        <VStack align='left' maxW='640px'>
          <Image src="https://cdn.pixabay.com/photo/2016/11/18/17/46/house-1836070_960_720.jpg" alt='house' />

          <HStack py='10px' spacing="5">
            <HStack>
                <BiBed style={{ color: "#D53F8C" }} />
                <Text fontSize="14px">4 Beds</Text>
            </HStack>

            <HStack>
                <BiBath style={{ color: "#D53F8C" }} />
                <Text fontSize="14px">2 Bathrooms</Text>
            </HStack>

            <HStack>
                <BiArea style={{ color: "#D53F8C" }} />
                <Text fontSize="14px">340</Text>
            </HStack>
          </HStack>
        
          <Text fontSize='15px'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti labore atque commodi odit ipsam perferendis a quo nam reiciendis illo explicabo, itaque vel in fugiat assumenda hic deserunt animi unde ut rem, sapiente recusandae quibusdam veniam dignissimos! Voluptatum dolor quisquam alias, non reprehenderit eaque. Maxime at perspiciatis quis labore unde provident ipsa minus voluptatibus vero quas, dignissimos accusamus. Corrupti, similique. Explicabo amet incidunt illo, possimus laborum nisi sed praesentium, dolor veniam eius animi atque. Eaque velit dignissimos nesciunt vitae praesentium aperiam neque, expedita veniam ad quo doloribus necessitatibus quis? Ea, magni voluptatum. Molestiae maiores porro quibusdam eum eligendi deleniti commodi.
          </Text>
      
        </VStack>
        
        <Form />
      </Stack>
    </>
  )
}

export default HouseDetails;