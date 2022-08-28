import { Grid, Stack, Image} from '@chakra-ui/react';

import { housesData } from '../../data';
import HouseItem from './HouseItem';

const HouseList = () => {
  return (
    <Grid my='3' rowGap='4' gridTemplateColumns='repeat(auto-fit, minmax(300px, 1fr))' 
    >
      {
        housesData.map(item=>
          <HouseItem key={item.id} house={item} />
        )
      }
    </Grid>
  )
}

export default HouseList