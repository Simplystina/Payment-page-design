import React from 'react'
import {Box, Text, Flex, VStack,Input, Stack, Select, Button} from "@chakra-ui/react"
import { Formik, Field, useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from 'react-router-dom';



const Billing = () => {

    const navigate = useNavigate()

    
    const formik = useFormik({
        initialValues: {
            type: '',
          name: '',
          card_details: '',
          date: "",
          code: "",
        
        },
        validationSchema: Yup.object({
		name: Yup.string().required("name is required"),
        type: Yup.string().required(" seleect type"),
        card_details: Yup.string().required("card details is required"),
        date: Yup.string().required("date is required"),
        code: Yup.string().required("code is required"),
        }),
        onSubmit: values => {
            
          console.log("submitted details", values)
          navigate("/confirm")
        },
      });

    
  return (
    <Box m="30px 0 60px 0">
            
                            <form onSubmit={formik.handleSubmit}>
                                
                                <Stack w="full" spacing="8">
                                    <VStack align="baseline">
                                        <Text fontWeight="700" fontSize="14px" color="#000000">Name on Card <span style={{color: "red"}}>*</span></Text>
                                        <Input 
                                         name="name" type="text"
                                          placeholder="Opara Linus Ahmed" 
                                          fontSize="14px" color="#4F4F4F" 
                                          bg="#ffffff"
                                          id="name"
                                          {...formik.getFieldProps('name')}
                                           border="1.5px solid #4E598C"/>
                                           {formik.touched.name && formik.errors.name ? (
                                            <Text fontWeight="500" fontSize="10px" color="red">{formik.errors.name}</Text>
                                        ) : null}
                                    </VStack>
                                    <VStack align="baseline">
                                        <Text fontWeight="700" fontSize="14px" color="#000000">Card Type <span style={{color: "red"}}>*</span></Text>
                                        <Select 
                                        name="type" type="text" 
                                        border="1.5px solid #4E598C" 
                                        id="type"
                                        {...formik.getFieldProps('type')}
                                        placeholder='Visa'> 
                                          <option>visa</option>
                                          <option>master card</option>
                                        </Select>
                                        {formik.touched.type && formik.errors.type ? (
                                            <Text fontWeight="500" fontSize="10px" color="red">{formik.errors.type}</Text>
                                        ) : null}
                                    </VStack>
                                    <Flex w="100%" justifyContent="space-between">
                                        <VStack align="baseline" w="40%">
                                            <Text fontWeight="700" fontSize="14px" color="#000000">Card details <span style={{color: "red"}}>*</span></Text>
                                            <Input 
                                            name="card_details" 
                                            type="number" 
                                            placeholder="44960 44960 4496 44980" 
                                            fontSize="14px" color="#4F4F4F" 
                                            bg="#ffffff"
                                            id="card_details"
                                            {...formik.getFieldProps('card_details')}
                                           border="1.5px solid #4E598C"/>
                                           {formik.touched.card_details && formik.errors.card_details ? (
                                            <Text fontWeight="500" fontSize="10px" color="red">{formik.errors.card_details}</Text>
                                        ) : null}
                                        </VStack>
                                        <VStack align="baseline" w="20%">
                                            <Text fontWeight="700" fontSize="14px" color="#000000">Expiry Date <span style={{color: "red"}}>*</span></Text>
                                            <Input 
                                            name="date" 
                                            type="number" placeholder="04 / 23"
                                            fontSize="14px" 
                                            color="#4F4F4F"
                                            bg="#ffffff" 
                                            id="date"
                                            {...formik.getFieldProps('date')}
                                            border="1.5px solid #4E598C"/>
                                            {formik.touched.date && formik.errors.date ? (
                                            <Text fontWeight="500" fontSize="10px" color="red">{formik.errors.date}</Text>
                                        ) : null}
                                        </VStack>
                                        <VStack align="baseline" w="20%">
                                            <Text fontWeight="700" fontSize="14px" color="#000000">CVV <span style={{color: "red"}}>*</span></Text>
                                            <Input 
                                            name="code" 
                                            type="number" 
                                            placeholder="223" 
                                            fontSize="14px" 
                                            color="#4F4F4F" 
                                            bg="#ffffff" 
                                            id="code"
                                            {...formik.getFieldProps('code')}
                                            border="1.5px solid #4E598C"/>
                                            {formik.touched.code && formik.errors.code ? (
                                            <Text fontWeight="400" fontSize="10px" color="red">{formik.errors.code}</Text>
                                        ) : null}
                                        </VStack>
                                    </Flex>
                                    <Flex alignItems="center">
                                        <Button type='submit' 
                                         _hover={{bg:"none", border:"1px solid #F2C94C", color:"#F2994A"}} p="20px 70px" color="white" bgImage="linear-gradient(to right, #F2C94C, #F2994A)">Next</Button>
                                        <Box p="30px"><Text color="#4E598C">Cancel Payment</Text></Box>
                                    </Flex>
                                </Stack>

                                
                            </form>
            </Box>
  )
}

export default Billing
