import React from "react";
import { Box } from "@chakra-ui/react";

const NavigationBar = ({ text }) => {
  return (
    <Box
      position="relative"
      w="69px"
      h="4.3px"
      backgroundColor="gray.500"
      borderRadius="sm"
      mx="5px"
    >
      {text && (
        <Box
          position="absolute"
          bottom="-20px"
          right="20%"
          transform="translateX(50%)"
          fontSize="sm"
        >
          {text}
        </Box>
      )}
    </Box>
  );
};

export default NavigationBar;
