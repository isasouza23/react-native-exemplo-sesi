import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert, StyleSheet } from "react-native";
import calculaImc from "./Imc";

const Formulario = () => {

    const [nome, setNome] = useState("");
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");

    const capturaNome = (valor) => {
        setNome(valor);
    };

    const capturaPeso = (valor) => {
        setPeso(valor);
    };

    const capturaAltura = (valor) => {
        setAltura(valor);
    };

    const calculaImcHandler = () => {

        if (!peso || !altura) {
            Alert.alert("Erro", "Por favor, insira valores válidos para peso e altura.");
        }

    const resultado = calculaImc(parseFloat(peso), parseFloat(altura));

        if (resultado < 18.5) {
            Alert.alert (
                `Olá ${nome}!`,
                `Seu IMC é de ${resultado}. Sua situação é de magreza.`
            );

        } else if (resultado >= 18.5 && resultado < 25) {
            Alert.alert (
                `Olá ${nome}!`,
                `Seu IMC é de ${resultado}. Sua situação é de normalidade.`
            );

        } else if (resultado > 25 && resultado < 30) {
            Alert.alert (
                `Olá ${nome}!`,
                `Seu IMC é de ${resultado}. Sua situação é de sobrepeso.`
            );

        } else if (resultado >= 30 && resultado < 40) {
            Alert.alert (
                `Olá ${nome}!`,
                `Seu IMC é de ${resultado}. Sua situação é de obesidade.`
            );
        } else if (resultado >= 40) {
            Alert.alert (
                `Olá ${nome}!`,
                `Seu IMC é de ${resultado}. Sua situação é de obesidade grave.`
            );
        }
    };

    return (
        <View>
            <TextInput style={estilos.input} onChangeText={capturaNome} placeholder="Informe seu nome" keyboardType="default"/>
            <View style={estilos.boxInput}>
                <TextInput style={estilos.inputDois} onChangeText={capturaPeso} placeholder="Peso (ex: 80)" keyboardType="numeric" value={peso} />

                <TextInput style={estilos.inputDois} onChangeText={capturaAltura} placeholder="Altura (ex: 1.73)" keyboardType="numeric" value={altura} />
            </View>
            <View style={estilos.boxBotao}>
                <Pressable style={estilos.botao} onPress={calculaImcHandler}>
                    <Text>Calcular IMC</Text>
                </Pressable>
            </View>
        </View>
    );
};

const estilos = StyleSheet.create ({
    boxBotao: {
        flexDirection: "row",
        justifyContent: "center",
    },

    botao: {
        backgroundColor: "gray",
        height: 45,
        width: "95%",
        justifyContent: "center",
        alignItems: "center",
    },

    boxInput: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    input: {
        height: 45,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    inputDois: {
        flex: 1,
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default Formulario;