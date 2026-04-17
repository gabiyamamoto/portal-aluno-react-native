import { View, Text, StyleSheet } from 'react-native';

export default function PerfilScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.emoji}>👤</Text>
            <Text style={styles.text}>Tela Perfil</Text>

            <View style={styles.card}>
                <Text style={styles.propriedade}>Nome: </Text>
                <Text style={styles.valor}>Gabriela Yamamoto</Text>

                <Text style={styles.propriedade}>Turma: </Text>
                <Text style={styles.valor}>2TDS1</Text>

                <Text style={styles.propriedade}>Curso: </Text>
                <Text style={styles.valor}>Desenvolvimento de Sistemas</Text>

                <Text style={styles.propriedade}>Sobre mim: </Text>
                <Text style={styles.valor}>
                    Gosto de tecnologia e estou aprendendo a desenvolver aplicativos mobile.
                </Text>
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
        fontSize: 48,
        marginBottom: 12,
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#3851a3',
    },
    card: {
        marginTop: 20,
        width: '80%',
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 3,
    },
    propriedade: {
        fontSize: 14,
        color: '#555',
        marginTop: 10,
    },
    valor: {
        fontSize: 16,
        fontWeight: '600',
        color: '#302b7a',
    },
});
