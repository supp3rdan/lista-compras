import React from "react";
import Texto from "../../../componentes/Texto";
import { View, Image, StyleSheet, TouchableOpacity, Button } from "react-native";
import Botao from "./Botao";


export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
    return <>
        <Texto style = { estilos.nome}>{nome}</Texto>

        <View style = { estilos.fazenda}>
            <Image style = { estilos.imagemFazenda} source={logoFazenda}/>
            <Texto style = { estilos.nomeFazenda}>{nomeFazenda}</Texto>

        </View>

        <Texto style = { estilos.descricao}>{descricao}</Texto>

        <Texto style = { estilos.preco }>{preco}</Texto>

    </>
}

const estilos = StyleSheet.create({
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12,
        marginLeft: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32,
        marginRight: 6
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
})