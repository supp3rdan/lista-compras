import React from "react";
import { View, Image, StyleSheet, FlatList } from "react-native";
import Texto from "../../../componentes/Texto";


export default function Item ({ item: {nome, imagem}}) {
    return  <View style = { estilos.item}>
        <Image source = {imagem} style = {estilos.image} />
        <Texto style = { estilos.texto}>{nome}</Texto>
    </View>
        
}

const estilos = StyleSheet.create({
    item: {
        flexDirection: "row",
        borderBottomWidth: 1,
        borderBottomColor: "#ececec",
        paddingVertical: 16,
        marginHorizontal: 16, 
        alignItems: "center",

    },
    image: {
        width: 46,
        height: 46
    },
    texto: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 11,
        color: "#464646"
    }
    
})