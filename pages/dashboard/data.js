import { Flex, Heading } from '@chakra-ui/react';
import {
    List,
    ListItem,
    Link,
    Checkbox,
    Text,
    OrderedList
} from '@chakra-ui/react';

import DashboardContainer from '@/components/DashboardContainer';

const DashboardData = () => {
    return(
        <>
            <DashboardContainer>
                <Flex 
                    flexDir="column"
                    overflow="auto"
                >
                    <Heading>Data Sources</Heading>
                    <OrderedList py={6} spacing={3}>
                        <ListItem>
                            <Link href="https://www.remaxcentral.ab.ca/calgary-commercial-realestate.html" isExternal>REMAX Calgary Commercial</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.loopnet.ca/search/commercial-real-estate/calgary-ab--canada/for-sale/" isExternal>LoopNet</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.propertyshark.com/cre/commercial-real-estate/ca/ab/calgary/" isExternal>PropertyShark</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.realtor.ca/ab/calgary/commercial-real-estate" isExternal>Realtor.ca Listings</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.industrialcalgary.com/" isExternal>REMAX Industrial Calgary</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.commercialedge.ca/" isExternal>Commercial Edge</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.creb.com/Housing_Statistics/" isExternal>CREB- Calgary Real Estate Board</Link>
                        </ListItem>
                    </OrderedList>
                    <Heading>Real Estate Organizations</Heading>
                    <OrderedList py={6} spacing={3}>
                        <ListItem>
                            <Link href="https://boma.ca/" isExternal>BOMA- Building Owners and Managers Association</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://informaconnect.com/calgary-real-estate-forum/" isExternal>Calgary Real Estate Forum</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.albertarealtor.ca/" isExternal>Alberta Real Estate Association</Link>
                        </ListItem>
                    </OrderedList>
                </Flex>
            </DashboardContainer>
        </>
    )
}

export default DashboardData;
