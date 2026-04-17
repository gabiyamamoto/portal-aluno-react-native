import { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function DisciplinasScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>📝</Text>
            <Text style={styles.tela}>Tarefas</Text>
            <View style={styles.cardsContainer}>
                <View style={styles.card}>
                    <Text style={styles.titulo}>Atividade Lógica</Text>
                    <Text style={styles.descricao}>Entregar atividade de lógica</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titulo}>React Navigation</Text>
                    <Text style={styles.descricao}>Revisar Drawer Navigator</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.titulo}>Banco de Dados</Text>
                    <Text style={styles.descricao}>Estudar consultas SQL</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fdfcfc',
    },
    emoji: {
        fontSize: 35,
        marginBottom: 12,
    },
    tela: {
        fontSize: 28,
        fontWeight: '600',
        color: '#f5b62f',
    },
    cardsContainer: {
        marginTop: 20,
        width: '80%',
        alignItems: 'center',
    },
    card: {
        width: '100%',
        backgroundColor: '#ffffff',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        elevation: 3,
    },
    titulo: {
        fontSize: 17,
        fontWeight: '600',
        color: '#f5b62f',
    },
    descricao: {
        fontSize: 15,
        color: '#555',
        marginTop: 5,
    },
});
