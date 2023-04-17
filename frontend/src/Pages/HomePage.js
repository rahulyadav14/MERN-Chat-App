import React, { useEffect } from 'react'
import {Container,Box,Text,Tab,TabList,TabPanel,TabPanels,Tabs} from '@chakra-ui/react';
import Login from '../components/authentication/Login';
import Signup from '../components/authentication/Signup';
//import {useHistory} from "react-router-dom";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
 //const history = useHistory();
 const navigate = useNavigate();

 useEffect(()=>{
  const user = JSON.parse(localStorage.getItem("userInfo"));
  
  if(user) navigate("/chats");
 },[navigate]);

  return (
    <Container maxW="md" centerContent>
      <Box
        d="flex"
        as="center"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize="3xl" fontFamily="work sans">
          Messaging App
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel><Login /></TabPanel>
            <TabPanel><Signup /></TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default HomePage;