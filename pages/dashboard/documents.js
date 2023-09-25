import { Flex, Heading, Link, Box, VStack } from '@chakra-ui/react';

import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import DashboardContainer from '@/components/DashboardContainer';

const DashboardDocuments = () => {

    return(
        <>
            <DashboardContainer>
                <Heading pb={2}>Documents</Heading>
                <VStack>
                    <Box>
                        <embed src="/Colliers Calgary Downtown Office MR 2023Q1.pdf" width="700" height="800"></embed> 
                    </Box>
                </VStack>
            </DashboardContainer>
        </>
    )
}

export default DashboardDocuments;
