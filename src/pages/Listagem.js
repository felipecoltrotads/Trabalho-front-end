import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Image, Text, SimpleGrid, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import Background from '../components/background';
import Header from '../components/Header';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Listagem = () => {
    const [pokemons, setPokemons] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
        fetchPokemons();
    }, [currentPage]);

    const fetchPokemons = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${(currentPage - 1) * 9}`);
        const pokemonDetails = await Promise.all(
            response.data.results.map(async (pokemon) => {
                const details = await axios.get(pokemon.url);
                return { ...pokemon, height: details.data.height };
            })
        );
        setPokemons(pokemonDetails);
        setTotalPages(Math.ceil(response.data.count / 9));
    };

    return (
        <Background color="gray.400">
            <Header title="POKEMON SELECTION" />
            <Box p="5">
                <SimpleGrid columns={[1, 2, 3]} spacing="5">
                    {pokemons.map((pokemon, index) => {
                        const pokemonId = index + 1 + (currentPage - 1) * 9;
                        return (
                            <Box key={pokemon.name} borderWidth="3px" borderRadius="lg" borderColor="gray.100" overflow="hidden" p="5" textAlign="center" bg="gray.200">
                                <Image src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`} alt={pokemon.name} mx="auto" />
                                <Text mt="2" fontSize="xl" fontWeight="700">{capitalizeFirstLetter(pokemon.name)}</Text>
                                <Text mt="2" fontSize="xl">Altura: {pokemon.height}</Text>
                                <Link to={`/pokemon/${pokemonId}`}>
                                    <Button mt="2" colorScheme="teal">Detalhes</Button>
                                </Link>
                            </Box>
                        );
                    })}
                </SimpleGrid>
                <Box mt="5" display="flex" justifyContent="space-between">
                    <Button onClick={() => setCurrentPage(currentPage - 1)} isDisabled={currentPage === 1}>Anterior</Button>
                    <Text >{currentPage} / {totalPages}</Text>
                    <Button onClick={() => setCurrentPage(currentPage + 1)} isDisabled={currentPage === totalPages}>Próximo</Button>
                </Box>
            </Box>
        </Background>
    );
};

export default Listagem;
