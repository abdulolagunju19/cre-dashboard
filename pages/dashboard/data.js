import { Flex, Heading } from '@chakra-ui/react';
import {
    ListIcon,
    List,
    ListItem,
    Link,
    OrderedList
} from '@chakra-ui/react';

import { BsClipboardDataFill } from "react-icons/bs";
import { GiOrganigram } from "react-icons/gi";

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
                    <List py={6} spacing={3}>
                        <ListItem>
                            <ListIcon as={BsClipboardDataFill} />
                            <Link href="https://www.remaxcentral.ab.ca/calgary-commercial-realestate.html" isExternal>REMAX Calgary Commercial</Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsClipboardDataFill} />
                            <Link href="https://www.loopnet.ca/search/commercial-real-estate/calgary-ab--canada/for-sale/" isExternal>LoopNet</Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsClipboardDataFill} />
                            <Link href="https://www.propertyshark.com/cre/commercial-real-estate/ca/ab/calgary/" isExternal>PropertyShark</Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsClipboardDataFill} />
                            <Link href="https://www.realtor.ca/ab/calgary/commercial-real-estate" isExternal>Realtor.ca Listings</Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsClipboardDataFill} />
                            <Link href="https://www.industrialcalgary.com/" isExternal>REMAX Industrial Calgary</Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsClipboardDataFill} />
                            <Link href="https://www.commercialedge.ca/" isExternal>Commercial Edge</Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={BsClipboardDataFill} />
                            <Link href="https://www.creb.com/Housing_Statistics/" isExternal>CREB- Calgary Real Estate Board</Link>
                        </ListItem>
                    </List>
                    <Heading>Real Estate Organizations</Heading>
                    <List py={6} spacing={3}>
                        <ListItem>
                            <ListIcon as={GiOrganigram} />
                            <Link href="https://boma.ca/" isExternal>BOMA- Building Owners and Managers Association</Link>
                        </ListItem>
                        <ListItem>  
                            <ListIcon as={GiOrganigram} />
                            <Link href="https://informaconnect.com/calgary-real-estate-forum/" isExternal>Calgary Real Estate Forum</Link>
                        </ListItem>
                        <ListItem>
                            <ListIcon as={GiOrganigram} />
                            <Link href="https://www.albertarealtor.ca/" isExternal>Alberta Real Estate Association</Link>
                        </ListItem>
                    </List>
                </Flex>
            </DashboardContainer>
        </>
    )
}

export default DashboardData;
