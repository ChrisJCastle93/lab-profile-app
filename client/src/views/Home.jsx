import React from 'react';
import { chakra, Box, Stack, Link } from '@chakra-ui/react';
import { Link as ReactRouterLink } from 'react-router-dom';

function Home() {
  return (
    <Box pos="relative" overflow="hidden">
      <Box maxW="7xl" mx="auto">
        <Box
          pos="relative"
          pb={{ base: 8, sm: 16, md: 20, lg: 28, xl: 32 }}
          w="full"
          border="solid 1px transparent"
        >
          <Box
            maxW={{ base: '7xl' }}
            px={{ base: 4, sm: 6, lg: 8 }}
            mt={{ base: 12, md: 16, lg: 20, xl: 28 }}
          >
            <Box
              textAlign="center"
              w={{ base: 'full', md: 11 / 12, xl: 8 / 12 }}
              mx="auto"
            >
              <chakra.h1
                fontSize={{ base: '4xl', sm: '5xl', md: '6xl' }}
                letterSpacing="tight"
                lineHeight="short"
                fontWeight="extrabold"
                color="gray.900"
              >
                <chakra.span display={{ base: 'block', xl: 'inline' }}>
                  Ironhack Labs to authenticate and{' '}
                </chakra.span>
                <chakra.span
                  display={{ base: 'block', xl: 'inline' }}
                  color="brand.700"
                >
                  build profiles
                </chakra.span>
              </chakra.h1>
              <chakra.p
                mt={{ base: 3, sm: 5, md: 5 }}
                mx={{ sm: 'auto', lg: 0 }}
                mb={6}
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.500"
                lineHeight="base"
              >
                Uses Mongo, Express, React, Node, and Chakra.
              </chakra.p>
              <Stack
                direction={{ base: 'column', sm: 'column', md: 'row' }}
                mb={{ base: 4, md: 8 }}
                spacing={{ base: 4, md: 2 }}
                justifyContent="center"
              >
                <Box rounded="full" shadow="md">
                  <ReactRouterLink to="/signup"k>
                    <Link
                      w="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      border="solid 1px transparent"
                      fontSize={{ base: 'md', md: 'lg' }}
                      rounded="md"
                      color="white"
                      bg="brand.900"
                      _hover={{ bg: 'brand.700' }}
                      px={{ base: 8, md: 10 }}
                      py={{ base: 3, md: 4 }}
                      cursor="pointer"
                    >
                      Signup
                    </Link>
                  </ReactRouterLink>
                </Box>
                <Box mt={[3, 0]} ml={[null, 3]}>
                  <Link to="/login">
                    <chakra.a
                      w="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      px={{ base: 8, md: 10 }}
                      py={{ base: 3, md: 4 }}
                      border="solid 1px transparent"
                      fontSize={{ base: 'md', md: 'lg' }}
                      rounded="md"
                      color="brand.700"
                      // borderColor='brand.700'
                      textDecoration="underline"
                      // borderWidth={2}
                      boxSizing="border-box"
                      bg="white"
                      // _hover={{ bg: "brand.700", color: "white" }}
                      cursor="pointer"
                    >
                      Login
                    </chakra.a>
                  </Link>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
