import { Link } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menú principal</Text>

      <Link href="/registerContact" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Agregar contacto</Text>
        </Pressable>
      </Link>

      <Link href="/ContactList" asChild>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Ver contactos</Text>
        </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#1e90ff",
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 16,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
