import { useState } from 'react';
import { View, FlatList, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

export default function DisciplinasScreen() {

    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>📚</Text>
            <Text style={styles.tela}>Disciplinas</Text>
            <View style={styles.cardsContainer}>
                <View style={styles.card}>
                    <Text style={styles.textoCard}>Matemática</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textoCard}>Português</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textoCard}>Banco de Dados</Text>
                </View>
                <View style={styles.card}>
                    <Text style={styles.textoCard}>React Native</Text>
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
        color: '#cc3c3c',
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
    textoCard: {
        fontSize: 15,
    },
});
