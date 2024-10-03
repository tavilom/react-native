import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView style={{ maxWidth: 500 }}>
        <Text style={styles.title}>Seja bem-vindo à Adote-pet!</Text>

        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, { width: width * 0.4, height: (width * 0.4) * 0.6 }]}
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
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0E68C',
    padding: 20,
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
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
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
    color: '#FFFFF',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 500,
  },
  button: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 10,
    flex: 1,
  },
  buttonText: {
    color: '#20232a',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
