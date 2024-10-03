import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListagemScreen({ route }: { route: any }) {
    const email = route?.params?.email || 'Insira e-mail';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Lista</Text>
            <Text style={styles.subtitle}>Aqui estão nossos PETS</Text>
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
    title: {
        fontSize: 32,
        color: '#FFFFF',
        marginBottom: 10, // Ajuste o espaçamento
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: 'FFFF',
        textAlign: 'center', // Alinha o texto ao centro
    },
});
