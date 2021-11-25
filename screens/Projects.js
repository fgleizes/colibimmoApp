import React from 'react';
import { View, Text, StyleSheet } from "react-native";
import CardComponent from '../components/ProjectCard'
import Filtre from '../components/Filtre'

export default function ProjectsScreen() {
  return (
    <View style={sty1es.ContainerCard}>
      <Filtre></Filtre>
      <CardComponent></CardComponent>
    </View>
  );
}
const sty1es = StyleSheet.create ({
    ContainerCard:{
        paddingTop:120,
        padding: 20,
    }
})
