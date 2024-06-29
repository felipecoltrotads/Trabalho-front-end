import { Box, Text } from "@chakra-ui/react";

const Header = ({ title }) => {
    return (
        <Box bg="teal.500" w="100%" p={4} color="white" textAlign="center" borderWidth="2px" borderRadius="lg" borderColor="teal.300">
            <Text fontSize="2xl" fontWeight="bold">{title}</Text>
        </Box>
    );
};

export default Header;