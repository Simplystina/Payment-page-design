import { Flex, Box,Circle, Center , Text} from '@chakra-ui/react'
import React from 'react'
import {CheckIcon} from "@chakra-ui/icons"
import { Link } from 'react-router-dom'

const Success = () => {
  return (
    <Flex className='container' justifyContent="center">
        <Box display="flex" justifyContent="space-between" m={["100px auto 0 auto","70px auto 0 auto","100px auto 0 auto"]} bg="#ffffff"  w={["85%","80%", "70%","50%","40%"]} p={["30px", "50px","50px"]} borderRadius="10px" boxShadow="0px 6px 10px 0px rgba(33, 30, 67, 0.08)">
          <Box>
              <Center>
                  <Circle  boxShadow="0px 6px 10px 0px rgba(33, 30, 67, 0.08)" size='50px' color='white'>
                   <CheckIcon fontWeight="800" fontSize={25} color="#6FCF97"/>
                 </Circle>
                  </Center>
                <Text p={["10px 0 5px 0","20px 0 10px 0"]} lineHeight={["35px", "45px"]} color="#4E598C" fontWeight="700" fontSize={["24px","36px"]}>Purchase Completed</Text>
                 <Text maxW={300} p={["5px 0","10px 0"]} color="#4F4F4F" fontWeight="400" fontSize={["10px","14px"]} >Please check your email for details concerning this transaction</Text>
                <Link to="/"><Text p={0} className='text_gradient' fontWeight="400" fontSize={["10px","14px"]} >Return Home</Text></Link> 
                 <Box p={0} w="85px" h="2px" bgSize={400} bgImage="linear-gradient(to right, #F2C94C, #F2994A)"></Box>
           </Box>
        </Box>
    </Flex>
  )
}

export default Success
