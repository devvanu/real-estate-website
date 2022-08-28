import { Button, Flex, Heading, HStack, Select, Stack } from '@chakra-ui/react'
import React from 'react'

const Search = () => {
  return (
    <Flex direction='column' bg='white' p='4' boxShadow='md'>
      <Heading py='2' size={{base: 'sm', md: 'md'}}>Search the price you looking for</Heading>
      <Flex gap={{base: 3, md: 2}} direction={{base: 'column', md:'row'}} borderRadius='30'>
        <Select placeholder='Location'>
          <option value='option1'>Option1</option>
          <option value='option2'>Option2</option>
        </Select>
        
        <Select placeholder='Type'>
          <option value='option1'>Option1</option>
          <option value='option2'>Option2</option>
        </Select>
        
        <Select placeholder='Budget'>
          <option value='option1'>Option1</option>
          <option value='option2'>Option2</option>
        </Select>

        <Button p={{base: 3, md: 2}} size="100%">Search</Button>
      </Flex>
    </Flex>
  )
}

export default Search