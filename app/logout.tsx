import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRouter } from 'expo-router';

export default function LogoutScreen() {
    const router = useRouter();

    useEffect(() => {
        const logout = async () => {
            try {
                await AsyncStorage.removeItem('emailAutenticado');
                router.replace('/login');  // Redireciona para a tela de login após o logout
            } catch (error) {
                console.error('Erro ao fazer logout:', error);
            }
        };
        logout();
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.message}>Fazendo logout...</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0E68C',
    },
    message: {
        fontSize: 18,
        color: '#20232a',
    },
});
