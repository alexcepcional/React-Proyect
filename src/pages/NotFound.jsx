import React from "react";
import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
    <Flex
    alignItems={"center"}
    justifyContent={"center"}
    flexDirection={"column"}
    marginTop={"32%"}
    >
    <Heading> 404 Not found</Heading>
    <Text>¡Ups! Lo sentimos, no pudimos encontrar lo que estás buscando.</Text>
    <Button>
        <Link to={"/"}>Volver a Inicio</Link>
    </Button>
    </Flex>
    )
}