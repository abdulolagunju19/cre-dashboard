import { Avatar, Flex, Heading, Text } from '@chakra-ui/react';

import DashboardContainer from '@/components/DashboardContainer';

const DashboardTeam = () => {
    return(
        <>
            <DashboardContainer>
                <Flex 
                    flexDir="column"
                    overflow="auto"
                >
                    <Heading>The Team</Heading>
                    <Flex flexDir={["column","row"]} justifyContent="space-between" p={5}>
                        <Flex flexDir="column" alignItems="center" p={1}>
                            <Avatar size='2xl' src='/Realtor-rafiki.png'my={2}/>
                            <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                        </Flex>
                        <Flex flexDir="column" alignItems="center" p={1}>
                            <Avatar size='2xl' src='/Realtor-rafiki.png'my={2}/>
                            <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                        </Flex>
                        <Flex flexDir="column" alignItems="center" p={1}>
                            <Avatar size='2xl' src='/Realtor-rafiki.png'my={2}/>
                            <Text as='cite' fontSize='lg'>Kent Dodds</Text>
                        </Flex>
                    </Flex>
                    <Heading py={10}>Our Office</Heading>
                    <Flex>
                        <iframe src="https://kuula.co/share/NBdQG?logo=1&info=1&fs=1&vr=0&sd=1&thumbs=1" width="100%" height="380" ></iframe>
                    </Flex>
                </Flex>
            </DashboardContainer>
        </>
    )
}

export default DashboardTeam;
