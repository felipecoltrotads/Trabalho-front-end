import { Box, Text } from "@chakra-ui/react";

const Header = ({ title }) => {
    return (
        <Box bgColor="red.200" w="100%" padding={10} textAlign="center">
            <Text color="black" fontSize="30px">
                {title}
            </Text>
        </Box>
    );
}

export default Header;