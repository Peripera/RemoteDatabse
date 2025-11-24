import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import { observeContacts } from "../../src/controller/contactControl";


type Student = {
  id: string;
  IDStudent: string;
  Name: string;
  Semester: number;
};

export default function ContactListScreen() {
  const [contacts, setContacts] = useState <Student[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = observeContacts((items: Student[]) => {
      setContacts(items);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const renderItem = ({item}: {item: Student }) => (
    <View style={styles.card}> 
        <Text style={styles.titleField}>{item.Name}</Text>
      <Text>Matrícula: {item.IDStudent}</Text>
      <Text>Semestre: {item.Semester}</Text>
    </View>
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator />
        <Text>Cargando contactos...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contactos guardados</Text>

      <FlatList data={contacts} keyExtractor={(item) => item.id} renderItem={renderItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  center: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 22, fontWeight: "bold", marginBottom: 12 },
    titleField: { fontSize: 18, fontWeight: "bold" , marginBottom: 4},
  card: { padding: 12, borderWidth: 1, borderColor: "#ccc", borderRadius: 8, marginBottom: 10 },
  name: { fontSize: 16, fontWeight: "bold" },
  email: { color: "#666" },
});
