import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform, Alert } from 'react-native';
import { Link } from 'expo-router';

export default function CadastroScreen() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const showAlert = (title: string, message: string) => {
        if (Platform.OS === 'web') {
            // No ambiente web, usamos window.alert
            window.alert(`${title}: ${message}`);
        } else {
            // No ambiente nativo, usamos Alert do React Native
            Alert.alert(title, message);
        }
    };

    const handleCadastro = () => {
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
        const trimmedConfirmPassword = confirmPassword.trim();

        // Debugging logs
        console.log('Trimmed Name:', trimmedName);
        console.log('Trimmed Email:', trimmedEmail);
        console.log('Trimmed Password:', trimmedPassword);
        console.log('Trimmed Confirm Password:', trimmedConfirmPassword);

        if (!trimmedName || !trimmedEmail || !trimmedPassword || !trimmedConfirmPassword) {
            console.log('Erro: Campos vazios.');
            showAlert('Erro', 'Por favor, verifique os campos.');
        } else if (trimmedPassword !== trimmedConfirmPassword) {
            console.log('Erro: Senhas não batem.');
            showAlert('Erro', 'Senhas não batem.');
        } else {
            console.log('Sucesso: Cadastro concluído.');
            showAlert('Sucesso', 'Cadastro concluído com sucesso!');
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Cadastro</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#DDD"
                    value={name}
                    onChangeText={setName}
                />

                <TextInput
                    style={styles.input}
                    placeholder="E-mail"
                    placeholderTextColor="#DDD"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#DDD"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TextInput
                    style={styles.input}
                    placeholder="Confirmar Senha"
                    placeholderTextColor="#DDD"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={handleCadastro}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <Link href="/login" style={styles.linkText}>Já tem uma conta? Fazer login</Link>
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
