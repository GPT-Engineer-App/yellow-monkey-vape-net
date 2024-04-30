// Vape Monkey - A network of vaping shops
import { Box, Container, Flex, Heading, Input, Button, Text, Image, Link, VStack, HStack, Textarea } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope, FaPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl">
      <Flex direction="column" align="center" my={10}>
        <Image src="https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtb25rZXklMjB2YXBpbmclMjBsb2dvfGVufDB8fHx8MTcxNDQ4MTkxOHww&ixlib=rb-4.0.3&q=80&w=1080" boxSize="150px" />
        <Heading color="yellow.400" mt={5}>
          Vape Monkey
        </Heading>
      </Flex>

      <VStack spacing={8}>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Our Stores</Heading>
          <Text mt={4}>Find a Vape Monkey store near you:</Text>
          <Flex mt={2}>
            <Button leftIcon={<FaMapMarkerAlt />} colorScheme="yellow" variant="solid">
              View on Map
            </Button>
          </Flex>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Contact Us</Heading>
          <VStack spacing={3} mt={4}>
            <Input placeholder="Your Name" />
            <Input placeholder="Email Address" />
            <Textarea placeholder="Your Message" />
            <Button rightIcon={<FaPlus />} colorScheme="yellow" variant="solid">
              Send Message
            </Button>
          </VStack>
        </Box>

        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading fontSize="xl">Follow Us</Heading>
          <HStack spacing={4} mt={4}>
            <Link href="https://facebook.com/vapemonkey" isExternal>
              <Button leftIcon={<FaFacebook />} colorScheme="facebook">
                Facebook
              </Button>
            </Link>
            <Link href="https://instagram.com/vapemonkey" isExternal>
              <Button leftIcon={<FaInstagram />} colorScheme="pink">
                Instagram
              </Button>
            </Link>
          </HStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
