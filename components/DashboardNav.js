import { useRouter } from 'next/navigation';

import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    useColorModeValue,
    Stack,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

  import NextLink from 'next/link';
  
  const hrefpaths = ['/dashboard', '/dashboard/research', '/dashboard/data', '/dashboard/documents', '/dashboard/team'];
  const Links = ['Dashboard', 'Research', 'Data', 'Documents', 'Team']
                  
  const NavLink = ({ children, hrefpath }) => (
    <NextLink href={hrefpath} passHref
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      >
        <Button variant="ghost" p={2} fontWeight="bold">
            {children}
        </Button>
    </NextLink>
  );
  
  export default function DashboardNav() {
    //for user profile on navigation to sign out
    const { isOpen, onOpen, onClose } = useDisclosure();

    const router = useRouter();
  
    //different navigation bar compared to home page, use .map to display buttons in header
    //when sign out clicked, callback to take user back to home page
    return (
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
                <NextLink href="/" passHref>
                  <Button variant="ghost" p={2} fontWeight="bold">
                    Home
                  </Button>
                </NextLink>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}>
                {Links.map((link, index) => (
                  <NavLink key={link} hrefpath={hrefpaths[index]}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={'full'}
                  variant={'link'}
                  cursor={'pointer'}
                  minW={0}>
                  <Avatar
                    size={'sm'}
                    bg='teal.500'
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem onClick={() => {
                    router.push("/")
                  }}>
                    Sign Out
                  </MenuItem>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link, index) => (
                  <NavLink key={link} hrefpath={hrefpaths[index]}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>
      </>
    );
  }