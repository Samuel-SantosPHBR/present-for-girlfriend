import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react/cjs/react.development";
import Card from "../../components/Card";
import CardFrases from "../../components/cardFrases";
import CardImages from "../../components/CardImages";
import api from "../../static/api.js";
import api2 from "../../static/apiFrases.js";
import apiImages from "../../static/apiImages";



function Home({ navigation }) {

    const [text,setText] = useState('');
    
    return (
        <ScrollView>
            <View style={styles.searchContainer}>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={value => setText(value)} style={styles.input} placeholder="Digite Uma Palavra Chave" />
                </View>
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Historias:</Text>
            </View>
            <View style={styles.cards}>
                { api.filter((element) => element.title.toLowerCase().includes(text.toLowerCase())).map((data) => (
                    <Card key={data.id} navigation={navigation} data={data} />
                )) }
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Definição do nosso Amor:</Text>
            </View>
            <View style={styles.cardsHorizontal}>
                <ScrollView horizontal={true}>
                    { api2.filter(ap => ap.toLocaleLowerCase().includes(text.toLocaleLowerCase()))
                            .map((data) => (
                        <CardFrases key={data} navigation={navigation} data={data} />
                    )) }
                </ScrollView>
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Por Ultimo a nós:</Text>
            </View>
            <View style={styles.cardsImg}>
                { apiImages.map((data) => (
                    <CardImages key={data} navigation={navigation} data={data} />
                )) }
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        backgroundColor: 'white',
        elevation: 2,
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10
    },
    input: {
        width: '75%',
        
    },
    cards: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    cardsHorizontal: {
        marginVertical: 20,
        paddingLeft: 5,
        height: 80
    },
    cardsImg: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 20,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    containerTitle: {
        marginTop: 15,
        paddingHorizontal: 15,
        width:"100%"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal:5
    }
});

export default Home;