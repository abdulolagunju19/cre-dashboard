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

const DashboardResearch = () => {
    return(
        <>
            <DashboardContainer>
                <Flex 
                    flexDir="column"
                    overflow="auto"
                >
                    <Heading>Key Competitors</Heading>
                    <OrderedList py={6} spacing={3}>
                        <ListItem>
                            <Link href="https://www.altusgroup.com/" isExternal>Altus Group</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.cbre.ca/" isExternal>CBRE- Coldwell Banker Richard Ellis</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.jll.ca/" isExternal>JLL- Jones Lang LaSalle</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.avisonyoung.ca/web/calgary" isExternal>Avison Young</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://aicrecommercial.com/calgary-market-research/" isExternal>AICRE Commercial</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.liangcommercial.ca/en/" isExternal>Liang Commercial</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://cmsrealestateltd.com/" isExternal>CMS Real Estate</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://lizotterealestate.com/" isExternal>Lizotte Real Estate</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://calgarycommercialgroup.com/" isExternal>Calgary Commercial Group</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="http://www.smicommercial.com/" isExternal>Calgary SMI Commercial Real Estate</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://barclaystreet.com/" isExternal>Barclay Street Real Estate</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="http://www.fairfieldcommercial.com/" isExternal>Fairfield Commercial</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.naiadvent.com/research-and-market-analysis/" isExternal>NAI Advent</Link>
                        </ListItem>
                        <ListItem>
                            <Link href="https://www.calgaryofficespace.ca/" isExternal>
                                CORE Commercial Real Estate Ltd.
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Text>Barry Commercial Real Estate</Text>
                        </ListItem>
                    </OrderedList>
                    <Heading>Terminology</Heading>
                    <List py={6} spacing={3}>
                    <ListItem>
                        <Checkbox>
                            Capitalization rate
                        </Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox>
                            Debt service
                        </Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox>
                            Effective gross income
                        </Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox>
                            Vacancy rate
                        </Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox>
                            Gross potential income
                        </Checkbox>
                    </ListItem>
                    <ListItem>
                        <Checkbox>
                            Net lease
                        </Checkbox>
                    </ListItem>
                    </List>
                    <Heading>Tips and Tricks</Heading>
                    <OrderedList py={6} spacing={3}>
                    <ListItem>
                        <Text>Sellers tend to under report their expenses. The reason for this is simple. If the expenses are lower, this increases the net operating income, which results in a higher property valuation.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Be leery of broker proformas. Proformas are brokers’ presentations of data on the property that reflect a best-case scenario or even a perfect-world situation. For example, even though the property may have eight unrentable vacant units, the broker proforma will reflect those units as if they were producing income. So, be careful in your analysis when you see the word proforma. It isn’t how the property is actually performing. Here’s the bottom line: Never make offers based on proforma data.</Text>
                    </ListItem>
                    <ListItem>
                        <Text>Be wary of property taxes stated in your analysis or given to you by the broker. Brokers who present property data rarely have the new property taxes in their spreadsheets. New taxes refer to what your new tax bill would be upon transfer of ownership.</Text>
                    </ListItem>
                    </OrderedList>
                </Flex>
            </DashboardContainer>
        </>
    )
}

export default DashboardResearch;
