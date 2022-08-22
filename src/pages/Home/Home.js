import React from 'react'
import {Box, Text, Flex} from "@chakra-ui/react"

import './Home.css'
import { NavLink, Outlet } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Home = () => {


    const {pathname}= useLocation()
    
     

  return (
    <Flex className='container' justifyContent="center" >
        <Box  m="60px 0 50px 0"  w={["90%","80%","60%","40%"]} >
            <Text fontWeight="700" fontSize={["18px","20px","24px"]} color="#4E598C">Complete your Purchase</Text>
            <Flex borderBottom="1px solid #000000" h={["35px","40px"]}  mt="20px" w="100%" justifyContent="space-between" alignItems="center">
                <NavLink to="/">
                  <Text pb="4" pl={[0,2]} pr={[0,2]} color={pathname ==="/"? "#F2994A" :"#BDBDBD"} fontSize={["12px","14px","16px"]} fontWeight="700">Personal Info</Text>
                    {pathname ==="/" &&  <Box borderRadius={10}  w="100%" h={[1,2]} bg="#F2994A"></Box>}
                  </NavLink>
                <NavLink to="billing"  >
                  <Text  pb="4" pl={[0,2]} pr={[0,2]} color={pathname ==="/billing"? "#F2994A" :"#BDBDBD"} fontSize={["12px","14px","16px"]} fontWeight="700">Billing Info</Text>
                  {pathname ==="/billing" &&  <Box borderRadius={10} w="100%" h={[1,2]} bg="#F2994A"></Box>}
                </NavLink>
                <NavLink to="confirm" >
                  <Text  pb="4" pl={[0,2]} pr={[0,2]} color={pathname ==="/confirm"? "#F2994A" :"#BDBDBD"} fontSize={["12px","14px","16px"]} fontWeight="700">Confirm Info</Text>
                  {pathname ==="/confirm" && <Box borderRadius={10} w="100%" h={[1,2]} bg="#F2994A"></Box>}
                </NavLink>
            </Flex>
            <Outlet/>
        </Box>
    </Flex>
  )
}

export default Home
