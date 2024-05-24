import React from "react";
import { SafeAreaView, StyleSheet, Text, View, StatusBar } from "react-native";
import Formulario from "./components/Formulario";

export default function App() {
  return (
    <SafeAreaView style={estilos.container}>
      <StatusBar style="auto" />
      <View style={estilos.boxTitulo}>
        <Text style={estilos.titulo}>App IMC</Text>
      </View>
      <Formulario />
    </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxTitulo: {
    paddingVertical: 50,
    backgroundColor: "black",
},
titulo: {
  color: "white",
  textAlign: "center",
  fontSize: 24,
  fontWeight: "bold",
  },
});