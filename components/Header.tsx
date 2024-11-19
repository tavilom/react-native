import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Dimensions, Modal } from 'react-native';
import { Link } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(Dimensions.get('window').width < 600);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const updateScreenSize = () => {
            const screenWidth = Dimensions.get('window').width;
            setIsSmallScreen(screenWidth < 600);
        };

        // Adiciona o listener para mudanças de dimensão
        Dimensions.addEventListener('change', updateScreenSize);

        // Remove o listener ao desmontar o componente
        return () => {
            Dimensions.removeEventListener('change', updateScreenSize);
        };
    }, []);

    const renderLinks = () => (
        <View style={styles.linkContainer}>
            <Link href="/" style={styles.linkText}>Home</Link>
            <Link href="/listagem" style={styles.linkText}>Listagem</Link>
            <Link href="/login" style={styles.linkText}>Login</Link>
            <Link href="/cadastro" style={styles.linkText}>Cadastro</Link>
        </View>
    );

    return (
        <View style={styles.header}>
            {isSmallScreen ? (
                // Menu tipo hamburguer para telas pequenas
                <>
                    <TouchableOpacity onPress={() => setIsMenuOpen(!isMenuOpen)}>
                        <Ionicons name="menu" size={30} color="#20232a" />
                    </TouchableOpacity>

                    {/* Modal com links de navegação */}
                    <Modal
                        visible={isMenuOpen}
                        transparent={true}
                        animationType="slide"
                        onRequestClose={() => setIsMenuOpen(false)}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.modalContent}>
                                <TouchableOpacity onPress={() => setIsMenuOpen(false)} style={styles.closeButton}>
                                    <Ionicons name="close" size={30} color="#20232a" />
                                </TouchableOpacity>
                                {renderLinks()}
                            </View>
                        </View>
                    </Modal>
                </>
            ) : (
                // Menu horizontal para telas maiores
                renderLinks()
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        maxWidth: 500,
        paddingVertical: 10,
        backgroundColor: '#FF8C00',
        borderBottomWidth: 2,
        borderBottomColor: '#FF8C00',
        alignSelf: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    linkContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    linkText: {
        color: '#20232a',
        textDecorationLine: 'none',
        fontSize: 16,
        fontWeight: 'bold',
        marginHorizontal: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#FFF',
        padding: 20,
        borderRadius: 10,
        width: 350,
    },
    closeButton: {
        alignSelf: 'flex-end',
        marginBottom: 20,
    },
});

export default Header;
