import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import { Link } from 'expo-router';

export default function ListagemScreen({ route }: { route: any }) {
    const [animais, setAnimais] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAnimais = async () => {
            try {
                const response = await fetch('http://localhost:3000/animais');
                if (response.ok) {
                    const data = await response.json();
                    setAnimais(data);
                } else {
                    console.error('Erro ao buscar animais');
                }
            } catch (error) {
                console.error('Erro na requisição:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAnimais();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Animais</Text>
            <Text style={styles.subtitle}>Aqui estão nossos PETS</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#FF8C00" />
            ) : (
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {animais.length > 0 ? (
                        animais.map((animal, index) => (
                            <View key={index} style={styles.animalContainer}>
                                <Text style={styles.animalText}>Nome: {animal.nome}</Text>
                                <Text style={styles.animalText}>Espécie: {animal.especie}</Text>
                                <Text style={styles.animalText}>Raça: {animal.raca}</Text>
                                <Text style={styles.animalText}>Idade: {animal.idade}</Text>
                            </View>
                        ))
                    ) : (
                        <Text style={styles.noAnimalsText}>Nenhum animal cadastrado.</Text>
                    )}
                </ScrollView>
            )}

            <Link href="/" style={styles.linkText}>Ir para a home</Link>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0E68C',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    scrollContainer: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 20,
    },
    title: {
        fontSize: 32,
        color: '#20232a',
        marginBottom: 10,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: '#20232a',
        textAlign: 'center',
        marginBottom: 20,
    },
    animalContainer: {
        backgroundColor: '#FFA500',
        padding: 15,
        borderRadius: 10,
        marginVertical: 8,
        width: '100%',
        maxWidth: 500,
    },
    animalText: {
        fontSize: 16,
        color: '#F5F5DC',
    },
    noAnimalsText: {
        fontSize: 16,
        color: '#20232a',
    },
    linkText: {
        color: '#20232a',
        marginTop: 20,
        textDecorationLine: 'underline',
        fontSize: 16,
    },
});
