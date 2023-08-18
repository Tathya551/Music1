import React from "react";
import { Input } from "@chakra-ui/react";

const InputField = ({ placeholder }) => {
  return (
    <Input
      placeholder={placeholder}
      mt="5px"
      backgroundColor="white"
      borderRadius="25px"
    />
  );
};

export default InputField;
