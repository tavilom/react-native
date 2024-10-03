import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import Header from '../components/Header';

export default function ContatoScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleEnviar = () => {
    console.log('Nome:', nome);
    console.log('E-mail:', email);
    console.log('Mensagem:', mensagem);
  };

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Contate-nos</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#DDD"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#DDD"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textArea}
          placeholder="Sua mensagem"
          placeholderTextColor="#DDD"
          value={mensagem}
          onChangeText={setMensagem}
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.button} onPress={handleEnviar}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0E68C',
    padding: 20,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    color: '#FFFFF',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    maxWidth: 500,
    height: 60,
    backgroundColor: '#FFA500',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#F5F5DC',
    marginBottom: 20,
    fontSize: 18,
  },
  textArea: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#FFA500',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#F5F5DC',
    marginBottom: 20,
    fontSize: 18,
    textAlignVertical: 'top',
  },
  button: {
    width: '100%',
    maxWidth: 500,
    height: 60,
    backgroundColor: '#F5F5DC',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#1E3A61',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
