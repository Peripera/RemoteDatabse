import React, { useState } from "react";
import { ActivityIndicator, Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { handleCreateContact } from "../../src/controller/contactControl";

export default function AddContactScreen() {
  const [IDStudent, setId] = useState("");
  const [Name, setName] = useState("");
  const [Semester, setSemester] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSave = async () => {
    setLoading(true);
    setErrorMessage("");

    try {
      await handleCreateContact({ IDStudent, Name, Semester});
      Alert.alert("Contacto guardado exitosamente");
      setId("");
      setName("");
      setSemester("");
    } catch (error:any) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Agregar contacto</Text>

      <TextInput style={styles.input} placeholder="Matrícula" value={IDStudent} onChangeText={setId} />
      <TextInput style={styles.input} placeholder="Nombre completo" autoCapitalize="words" value={Name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Semestrew" keyboardType="numeric" value={Semester} onChangeText={setSemester} />

      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      {loading ? <ActivityIndicator /> : <Button title="Guardar" onPress={onSave} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, gap: 12 },
  title: { fontSize: 24, fontWeight: "bold" },
  input: { borderWidth: 1, borderColor: "#aaa", padding: 10, borderRadius: 8 },
  error: { color: "red" },
});
