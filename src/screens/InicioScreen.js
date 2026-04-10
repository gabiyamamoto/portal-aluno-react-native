import { View, Text, StyleSheet } from "react-native";

export default function InicioScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.nomeApp}>Portal do Aluno</Text>
      <Text style={styles.emoji}>🏡</Text>
      <Text style={styles.tela}>Início</Text>
      <Text style={styles.mensagem}>Bem-vindo ao app!</Text>
      <Text style={styles.proposta}>
        Um aplicativo simples para ajudar alunos a acessarem informações
        importantes do dia a dia{" "}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fdfcfc",
  },
  nomeApp: {
    fontSize: 28,
    fontWeight: "600",
    color: "#302b7a",
    marginBottom: 20,
  },
  emoji: {
    fontSize: 35,
    marginBottom: 12,
  },
  tela: {
    fontSize: 28,
    fontWeight: "600",
    color: "#2b7a5a",
  },
  mensagem: {
    fontSize: 20,
    color: "#2b7a5a",
    marginTop: 3,
    fontWeight: "600",
  },
  proposta: {
    width: "80%",
    textAlign: "center",
    fontSize: 15,
    color: "#000000",
    margin: 20,
  },
});
