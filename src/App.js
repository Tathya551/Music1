import React from "react";
import {
  ChakraProvider,
  Box,
  Flex,
  Text,
  Image,
  Button,
} from "@chakra-ui/react";
import NavigationBar from "./NavigationBar";
import InputField from "./InputField";

function App() {
  return (
    <ChakraProvider>
      <Box
        backgroundImage="https://silvertoneguitars.com/cdn/shop/files/Guitar_Table3-1478_1000x1000.jpg?v=1644353439"
        backgroundSize="cover"
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Flex
          direction="column"
          backgroundColor="blue.300"
          padding="20px"
          borderRadius="25px"
          boxShadow="lg"
          width="500px"
          height="600px"
          position="relative"
        >
          <Flex justifyContent="center" alignItems="center" mt="20px">
            <NavigationBar />
            <NavigationBar />
            <NavigationBar />
            <NavigationBar text="Skip" />
          </Flex>

          <Text mt="20px" fontSize="39" fontWeight="bold" textAlign="center">
            Welcome to Musify!
          </Text>

          <Flex
            justifyContent="center"
            alignItems="center"
            mt="10px"
            position="relative"
            marginTop="18px"
          >
            <Image
              src="https://w0.peakpx.com/wallpaper/203/1009/HD-wallpaper-music-note-music-note-rainbow-love-musical-smoke.jpg"
              alt="MusicNote"
              borderRadius="full"
              w="100px"
              h="100px"
            />
            <Box
              position="absolute"
              bottom="-10px"
              right="180px"
              backgroundColor="blue.500"
              borderRadius="full"
              width="30px"
              height="30px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Text color="white">+</Text>
            </Box>
          </Flex>

          <Box mt="20px" marginLeft="18px" marginRight="18px" marginTop="60px">
            <Text fontSize="12">Full Name</Text>
            <InputField placeholder="Enter your full name" />
            <Text mt="10px" fontSize="12">
              Username
            </Text>
            <InputField placeholder="Create your username" />
            <Text mt="10px" fontSize="12">
              Location
            </Text>
            <InputField placeholder="Choose your location" />
          </Box>

          <Flex
            mt="20px"
            justifyContent="space-between"
            marginLeft="87px"
            marginRight="87px"
          >
            <Button
              backgroundColor="black"
              textColor="white"
              borderRadius="21px"
              width="118px"
            >
              Back
            </Button>
            <Button colorScheme="blue" borderRadius="21px" width="118px">
              Next
            </Button>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;
