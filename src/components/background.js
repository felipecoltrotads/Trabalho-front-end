import { Box } from '@chakra-ui/react';

const Background = ({ color, children }) => {
    return (
        <Box bg={color} minH="100vh" p={4}>
            {children}
        </Box>
    );
};

export default Background;