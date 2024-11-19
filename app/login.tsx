import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ScrollView } from 'react-native';

export default function LoginScreen() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [wrongInput, setWrongInput] = useState(false);

    // Verificar se o usuário já está autenticado ao iniciar
    useEffect(() => {
        const checkAuthentication = async () => {
            const authenticatedEmail = await AsyncStorage.getItem('emailAutenticado');
            if (authenticatedEmail) {
                router.push('/');
            }
        };
        checkAuthentication();
    }, []);

    const handleLogin = async () => {
        const validEmail = 'admin';
        const validPassword = '123456';

        if (email === validEmail && password === validPassword) {
            try {
                await AsyncStorage.setItem('emailAutenticado', email);
                router.push('/');
            } catch (e) {
                console.error('Erro ao salvar o email:', e);
            }
        } else {
            setWrongInput(true);
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Login</Text>

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

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                {wrongInput && (<Text style={styles.alertText}>E-mail ou senha incorretos!</Text>)}

                <Link href="/cadastro" style={styles.linkText}>Criar uma conta</Link>
                <Link href="/" style={styles.linkText}>Ir para a home</Link>
            </ScrollView>
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
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        maxWidth: 500,
        paddingVertical: 10,
        backgroundColor: '#FF8C00',
        borderBottomWidth: 2,
        borderBottomColor: '#20232a',
        alignSelf: 'center',
    },
    scrollContainer: {
        alignItems: 'center',
        backgroundColor: '#FF8C00',
        paddingVertical: 20,
        width: 500,
    },
    title: {
        fontSize: 32,
        color: '#F5F5DC',
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
    linkText: {
        color: '#F5F5DC',
        marginTop: 20,
        textDecorationLine: 'underline',
        fontSize: 16,
    },
    alertText: {
        color: 'red',
        marginHorizontal: 'auto',
        marginBottom: 12
    }
});
