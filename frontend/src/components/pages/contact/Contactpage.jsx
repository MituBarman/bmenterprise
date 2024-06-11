"use client";

import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { FaFacebook, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";

export default function Contact() {
  return (
    <section>
      <Container
        maxW="full"
        mt={0}
        centerContent
        overflow="hidden"
        padding={"10px"}
      >
        <Flex>
          <Box
            bg="#0e062e"
            color="white"
            borderRadius="lg"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}
          >
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                  </Box>
                <WrapItem>
                  <Box bg="white" borderRadius="lg">
                    <Box m={8} color="#0B0E3F">
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel>Your Name</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <BsPerson color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Email</FormLabel>
                          <InputGroup borderColor="#E0E1E7">
                            <InputLeftElement pointerEvents="none">
                              <MdOutlineEmail color="gray.800" />
                            </InputLeftElement>
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel>Message</FormLabel>
                          <Textarea
                            borderColor="gray.300"
                            _hover={{
                              borderRadius: "gray.300",
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="left">
                          <Button
                            variant="solid"
                            bg="#0e062e"
                            color="white"
                            _hover={{}}
                          >
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="center"
                  >
                    <IconButton
                      color={"white"}
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      color={"white"}
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<FaInstagram size="28px" />}
                    />
                    <IconButton
                      color={"white"}
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      
                      icon={<FaWhatsapp size="28px"
                        
                        />}
                    />
                  </HStack>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    </section>
  );
}
