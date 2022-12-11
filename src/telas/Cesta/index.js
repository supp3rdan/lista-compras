import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Detalhes from "./componentes/Detalhes";
import Topo from "./componentes/Topo";
import Botao from "./componentes/Botao";
import Item from "./componentes/Item";
import Texto from "../../componentes/Texto"

export default function Cesta({ topo, detalhes, button, itens }) {
    return <>
        <FlatList 
            data = { itens.lista }
            renderItem = {Item}
            keyExtractor = {({ nome }) => nome }
            ListHeaderComponent = { () => {
                return <>
                    <Topo {...topo} /> 
                    <View style = {estilos.cesta}> 
                    <Detalhes {...detalhes}/>
                    <Botao {...button} />
                    <Texto style={estilos.titulo}>{itens.titulo}</Texto>

        </View>               
                </>
            }}
        />

        

    </>
}

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontWeight: "bold",
        marginTop: 32,
        marginBottom: 8,
        fontSize: 20,
        lineHeight: 32

    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16      
    }
})