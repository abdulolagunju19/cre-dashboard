import Image from 'next/image';

import { Flex, Heading } from '@chakra-ui/react';
import Container from '@/components/Container';

export default function Home() {
  return (
    <>
      <Container>
        <Flex direction="column" justify="center" align="center">
          <Heading
            as="h1"
            size="xl"
            fontWeight="bold"
          >
            Real Estate Dashboard
          </Heading>
          <Image
            src="/Realtor-bro.png"
            alt="Photo"
            width={280}
            height={280}
            priority
            className="next-image"
          />
        </Flex>
      </Container>
    </>
  )
}


