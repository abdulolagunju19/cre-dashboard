import Footer from './footer';
import { useColorModeValue, Flex } from '@chakra-ui/react';

import DashboardNav from './DashboardNav';

export default function DashboardContainer({ children }) {
  const bgColor = useColorModeValue('white', 'gray.900');
  const primarytextColor = useColorModeValue('black', 'white');

  //container for pages in /dashboard
  return (
    <>
      <DashboardNav />
      <Flex
        as="main"
        w="full"
        justify="center"
        direction="column"
        px={[4, 6, null, 8]}
        h="calc(100vh - 4rem)"
        bg={bgColor}
        color={primarytextColor}
      >
        <Flex
          direction="column"
          w="full"
          h="full"
          justify="center"
          align="center"
          pt={[8, 10, null, 12]}
        >
          <Flex direction="column" w="full" h="full" maxW="5xl">
            {children}
            <Footer />
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}
