import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Image, Text, Spinner, Box, SimpleGrid } from '@chakra-ui/react';
import Background from '../components/background';
import Header from '../components/Header';

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

const Detalhes = () => {
    const { id } = useParams();
    const [pokemon, setPokemon] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPokemon();
    }, [id]);

    const fetchPokemon = async () => {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(response.data);
        setLoading(false);
    };

    if (loading) {
        return <Spinner />;
    }

    return (
        <Background color="gray.200">
            <Header title="Detalhes do Pokémon" />
            <Box p="5" borderWidth="1px" borderRadius="lg" overflow="hidden" textAlign="center">
                <Image
                    src={pokemon.sprites.front_default}
                    alt={pokemon.name}
                    mx="auto"
                    boxSize="200px"
                />
                <Text mt="2" fontSize="2xl" fontWeight="semibold">{capitalizeFirstLetter(pokemon.name)}</Text>
                <SimpleGrid columns={2} spacing={10} mt="5">
                    <Box textAlign="left">
                        <Text>INFORMAÇÕES: </Text>
                        <Text>Altura: {pokemon.height}</Text>
                        <Text>Peso: {pokemon.weight}</Text>
                    </Box>
                    <Box textAlign="left">
                        <Text>HABILIDADES:</Text>
                        {pokemon.abilities.map((ability, index) => (
                            <Text key={index}>{ability.ability.name}</Text>
                        ))}
                    </Box>
                </SimpleGrid>
            </Box>
        </Background>
    );
};

export default Detalhes;
