import { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function DisciplinasScreen() {
  const [novaTarefa, setNovaTarefa] = useState("");

  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = () => {
    if (novaTarefa.trim() === "") return;

    const tarefaObjeto = {
      id: String(Date.now()),
      texto: novaTarefa,
    };

    setListaTarefas([...listaTarefas, tarefaObjeto]);

    setNovaTarefa("");
  };

  const removerTarefa = (idParaRemover) => {
    const listaFiltrada = listaTarefas.filter(
      (item) => item.id !== idParaRemover,
    );

    setListaTarefas(listaFiltrada);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.emoji}>📚</Text>
      <Text style={styles.tela}>Disciplinas</Text>
      <Text style={styles.titulo}>Minhas Tarefas</Text>

      {}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="O que vamos fazer hoje?"
          value={novaTarefa}
          onChangeText={setNovaTarefa}
        />
        <TouchableOpacity
          style={styles.botaoAdicionar}
          onPress={adicionarTarefa}
        >
          <Text style={styles.textoBotaoAdicionar}>+</Text>
        </TouchableOpacity>
      </View>
      {}
      <FlatList
        data={listaTarefas}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemLista}>
            <Text>{item.texto}</Text>
            {}
            <TouchableOpacity
              style={styles.botaoRemover}
              onPress={() => removerTarefa(item.id)}
            >
              <Text style={styles.textoBotaoRemover}>X</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={() => (
          <Text style={styles.textoVazio}>
            Nenhuma tarefa por aqui. Você está livre! 🏖️
          </Text>
        )}
      />
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
  emoji: {
    fontSize: 35,
    marginBottom: 12,
  },
  tela: {
    fontSize: 28,
    fontWeight: "600",
    color: "#302b7a",
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    color: "#302b7a",
    marginTop: 3,
    fontWeight: "600",
  },
  inputContainer: {
    flex: 1,
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    height: 50,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "#302b7a",
  },
  botaoAdicionar: {
    width: 50,
    height: 50,
    backgroundColor: "#302b7a",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },
  textoBotaoAdicionar: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "600",
  },
  itemLista: {
    flexDirection: "row",
    backgroundColor: "#d4d4d4",
    gap: 10,
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    alignItems: "center",
    justifyContent: "space-between",
  },
  textoItem: {
    fontSize: 16,
    color: "#000000",
    flex: 1,
  },
  botaoRemover: {
    backgroundColor: "#302b7a",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textoBotaoRemover: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  textoVazio: {
    textAlign: "center",
    color: "#000000",
    fontSize: 16,
    marginTop: 30,
  },
});
