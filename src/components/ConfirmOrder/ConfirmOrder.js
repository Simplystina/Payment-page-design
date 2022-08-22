import { Box, Flex, HStack, Text, VStack , Button} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const ConfirmOrder = () => {
  return (
    <>
    <Box boxShadow="0 10px 15px 0px rgba(33, 30, 67, 0.08)"  borderBottomRadius="10px" pb="5px" m="40px 0 20px 0">
        <Flex bg="#2F80ED" p={["10px 20px","10px 40px"]}  borderTopRadius="16px" justifyContent="space-between">
            <Text fontWeight="700" fontSize={["14px","16px"]} color="#ffffff">Item Name</Text>
            <Text fontWeight="700" fontSize={["14px","16px"]} color="#ffffff">Price</Text>
        </Flex>
        <Flex  borderBottomRadius="10px" bg="#ffffff" justifyContent="space-between" p={["30px 20px","30px 40px"]}>
            <VStack spacing={8} align="baseline">
                <Text fontWeight="400" fontSize={["12px","16px"]} color="#4E598C">Data science and usability</Text>
                <Text fontWeight="400" fontSize={["12px","16px"]} color="#4E598C">Shipping</Text>
            </VStack>
            <VStack spacing={8} align="end">
                <Text fontWeight="700" fontSize={["12px","16px"]} color="#4E598C">50,000.00</Text>
                <Text fontWeight="700" fontSize={["12px","16px"]} color="#4E598C">0.00</Text>
            </VStack>
        </Flex>
        <Box width="90%" h="1px" bg="#817E9E" m="30px auto"></Box>
        <HStack p="5px 30px" m={["0px 20px 20px 20px","0 40px 40px 40px"]} border="1px solid #817E9E" justify="space-between">
            <Text fontWeight="400" fontSize={["12px","16px"]} color="#4E598C">Total</Text>
            <Text fontWeight="700" fontSize={["12px","16px"]} color="#4E598C">50,000.00</Text>
        </HStack>
    </Box>
    <Flex alignItems="center" mb="50px" flexDir={["column","row"]}>
        <Link to="/success"><Button fontSize= {["14px","18px"]} _hover={{bg:"none", border:"1px solid #F2C94C", color:"#F2994A"}} p="20px 70px" color="white" bgImage="linear-gradient(to right, #F2C94C, #F2994A)">Pay</Button></Link>
        <Box cursor="pointer" p="30px"><Text color="#4E598C" fontSize= {["12px","16px"]}>Cancel Payment</Text></Box>
    </Flex>
    </>
  )
}

export default ConfirmOrder
