import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform, Alert } from 'react-native';
import { Link } from 'expo-router';

export default function CadastroAnimalScreen() {
    const [nome, setNome] = useState('');
    const [especie, setEspecie] = useState('');
    const [raca, setRaca] = useState('');
    const [idade, setIdade] = useState('');

    const showAlert = (title: string, message: string) => {
        if (Platform.OS === 'web') {
            // No ambiente web, usamos window.alert
            window.alert(`${title}: ${message}`);
        } else {
            // No ambiente nativo, usamos Alert do React Native
            Alert.alert(title, message);
        }
    };
    

    const handleCadastro = async () => {
        if (!nome.trim() || !especie.trim() || !raca.trim() || !idade.trim()) {
            showAlert('Erro', 'Todos os campos são obrigatórios.');
            return;
        }

        const animalData = {
            nome: nome.trim(),
            especie: especie.trim(),
            raca: raca.trim(),
            idade: idade.trim(),
        };

        try {
            const response = await fetch('http://localhost:3000/animais', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(animalData),
            });

            if (response.ok) {
                showAlert('Sucesso', 'Animal cadastrado com sucesso!');
                setNome('');
                setEspecie('');
                setRaca('');
                setIdade('');
            } else {
                const errorText = await response.text();
                console.error('Erro ao cadastrar animal:', errorText);
                showAlert('Erro', `Erro ao cadastrar o animal: ${errorText}`);
            }
        } catch (error) {
            console.error('Erro ao cadastrar animal:', error);
            showAlert('Erro', 'Erro ao cadastrar animal.');
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Cadastro de Animais</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#DDD"
                    value={nome}
                    onChangeText={setNome}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Espécie"
                    placeholderTextColor="#DDD"
                    value={especie}
                    onChangeText={setEspecie}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Raça"
                    placeholderTextColor="#DDD"
                    value={raca}
                    onChangeText={setRaca}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Idade"
                    placeholderTextColor="#DDD"
                    value={idade}
                    onChangeText={setIdade}
                    keyboardType="numeric"
                />

                <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                    <Text style={styles.buttonText}>Cadastrar Animal</Text>
                </TouchableOpacity>

                <Link href="/" style={styles.linkText}>Ir para a home</Link>
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
    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 20,
        width: 500,
    },
    title: {
        fontSize: 32,
        color: '#FFFFF',
        marginBottom: 30,
        fontWeight: 'bold',
    },
    input: {
        width: '100%',
        height: 60,
        backgroundColor: '#FFA500',
        borderRadius: 10,
        paddingHorizontal: 15,
        color: '#F5F5DC',
        marginBottom: 20,
        fontSize: 18,
    },
    button: {
        width: '100%',
        height: 60,
        backgroundColor: '#FF8C00',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#FFFFF',
        fontSize: 20,
        fontWeight: 'bold',
    },
    linkText: {
        color: '#FFFFF',
        marginTop: 20,
        textDecorationLine: 'underline',
        fontSize: 16,
    },
});
