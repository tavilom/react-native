import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Seja bem-vindo à Adote-pet!</Text>

        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, { width: width * 0.8, height: (width * 0.8) * 0.6 }]}
            source={{ uri: '../assets/images/frase-home.png' }}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.description}>
          Trabalhamos para que todos pets tenham um lar e um tutor responsável. Conheça nossos serviços e entre em contato conosco!
        </Text>

        <View style={styles.buttonContainer}>
          <Link href="/contato" style={styles.button}>
            <Text style={styles.buttonText}>Quem somos</Text>
          </Link>

          <Link href="/contato" style={styles.button}>
            <Text style={styles.buttonText}>Contate-nos</Text>
          </Link>
        </View>

        <Link href="/logout" style={styles.logoutButton}>
          <Text style={styles.buttonText}>Sair</Text>
        </Link>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0E68C',
    paddingHorizontal: 20,
  },
  scrollContainer: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#FF8C00',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    width: '90%',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 20,
  },
  description: {
    fontSize: 16,
    color: '#20232a',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
    width: '90%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FF8C00',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
    flex: 1,
    marginHorizontal: 5,
  },
  buttonText: {
    color: '#20232a',
    fontWeight: 'bold',
    fontSize: 16,
  },
  logoutButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
    width: '90%',
    marginTop: 20,
  },
});
