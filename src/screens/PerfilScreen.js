import { View, Text, StyleSheet } from "react-native";

export default function PerfilScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>👤</Text>
      <Text style={styles.text}>Tela Perfil</Text>
      <Text style={styles.subtitle}>Informações do Usuário</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fdfcfc'
    },
    emoji: {
        fontSize: 48,
        marginBottom: 12,
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#4338a3',
    },
    subtitle: {
        fontSize: 16,
        color: "#5f6cb3",
        marginTop: 8,
    },
})