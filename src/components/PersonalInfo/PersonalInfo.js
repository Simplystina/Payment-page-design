import React from 'react'
import {Box, Text, Flex, VStack,Input, Stack, Select, Button} from "@chakra-ui/react"
import { Form, Formik ,Field} from "formik";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';


const PersonalInfo = () => {


    const navigate = useNavigate()
    const formik = useFormik({
        initialValues: {
            name: '',
          email: '',
          city: '',
          address1: "",
          address2: "",
          state: ""
        },
        validationSchema: Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
        }),
        onSubmit: values => {
          console.log("submitted details", values)
          navigate("/billing")
        },
      });
    

   
  return (
    <Box m="30px 0 60px 0">
        <form onSubmit={formik.handleSubmit}>
              
            <Stack w="full" spacing="8">
                <VStack align="baseline">
                    <Text fontWeight="700" fontSize={["12px","14px"]} color="#000000">Name</Text>
                        <Input 
                            name="name" 
                            id="name" 
                            placeholder="Opara Linus Ahmed"
                             fontSize={["12px","14px"]} color="#4F4F4F" 
                              type="text"
                            {...formik.getFieldProps('name')}
                                bg="#ffffff" border="1.5px solid #4E598C"/>
                </VStack>                     
                <VStack align="baseline">
                    <Text fontWeight="700" fontSize={["12px","14px"]} color="#000000">Name</Text>
                    <Input 
                    name="name" 
                    id="name" 
                    placeholder="Opara Linus Ahmed"
                        fontSize={["12px","14px"]} color="#4F4F4F" 
                        type="text"
                    {...formik.getFieldProps('name')}
                     bg="#ffffff" border="1.5px solid #4E598C"/>
                </VStack>                    
                <VStack align="baseline">
                    <Text fontWeight="700" fontSize={["12px","14px"]} color="#000000">Email Address <span style={{color: "red"}}>*</span></Text>
                    <Text fontSize="10px" fontWeight="400" color="#817E9E">The purchase reciept would be sent to this address</Text>
                    <Input 
                    name="email" id="email" 
                    placeholder="OparaLinusAhmed@devmail.com" 
                    fontSize="14px" color="#4F4F4F" bg="#ffffff" 
                    type="text"
                    {...formik.getFieldProps('email')}
                    border="1.5px solid #4E598C"/>
                    {formik.touched.email && formik.errors.email ? (
                        <Text fontWeight="700" fontSize="14px" color="red">{formik.errors.email}</Text>
                    ) : null}
                </VStack>
                <VStack align="baseline">
                    <Text fontWeight="700" fontSize={["12px","14px"]} color="#000000">Address 1</Text>
                    <Input 
                    name="address1" id="address1" 
                    placeholder="The address of the user goes here" 
                    fontSize={["12px","14px"]} color="#4F4F4F" bg="#ffffff" 
                    type="text"
                    {...formik.getFieldProps('address1')}
                    border="1.5px solid #4E598C"/>
                                        
                </VStack>
               <VStack align="baseline">
                   <Text fontWeight="700" fontSize={["12px","14px"]} color="#000000">Address 2</Text>
                   <Input name="address2" 
                   id="address2" placeholder="and here" 
                   fontSize={["12px","14px"]} color="#4F4F4F" 
                   bg="#ffffff" 
                   type="text"
                   {...formik.getFieldProps('address2')}
                   border="1.5px solid #4E598C"/>
               </VStack>
               <Flex w="100%" justifyContent="space-between" flexDir={["column","row"]} >
                   <VStack mb={[5,0]} align="baseline" w={['100%',"60%"]}>
                       <Text fontWeight="700" fontSize={["12px","14px"]} color="#000000">Local Government</Text>
                       <Input name="city" 
                       id="city" 
                       placeholder="Surulere" 
                       fontSize={["12px","14px"]} color="#4F4F4F" 
                       bg="#ffffff" border="1.5px solid #4E598C"
                       type="text"
                       {...formik.getFieldProps('city')}
                       />
                   </VStack>
                   <VStack align="baseline" w={["100%","30%"]}>
                       <Text fontWeight="700" fontSize={["12px","14px"]} color="#000000">State</Text>
                       <Select name="state" id="state" 
                           type="text"
                           {...formik.getFieldProps('state')}
                       placeholder='Lagos'/>
                   </VStack>
               </Flex>
                <Flex alignItems="center" flexDir={["column","row"]}>
                    <Button
							type="submit"
                             _hover={{bg:"none", border:"1px solid #F2C94C", color:"#F2994A"}} 
                             p="20px 70px" color="white" 
                             bgImage="linear-gradient(to right, #F2C94C, #F2994A)">Next
                    </Button>
                    <Box cursor="pointer" p="30px"><Text color="#4E598C">Cancel Payment</Text></Box>
                </Flex>
            </Stack>                             
                               
        </form>
    </Box>
  )
}

export default PersonalInfo
