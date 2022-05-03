import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react/cjs/react.development";
import Card from "../../components/Card";
import api from "../../static/api.js";


function Home({ navigation }) {

    const [datas,setDatas] = useState(api);

    const [text,setText] = useState('');

    function filterCards() {
        const datasFilter = api.filter((element) => element.title.toLowerCase().includes(text.toLowerCase()))
        setDatas(datasFilter)
    }
    
    return (
        <ScrollView>
            <View style={styles.searchContainer}>
                <View style={styles.inputContainer}>
                    <TextInput onChangeText={value => setText(value)} style={styles.input} placeholder="Digite Uma Palavra Chave" />
                    <TouchableOpacity onPress={filterCards} style={styles.search}>
                        <Text style={styles.textSearch}>Pesquisar</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>Historias:</Text>
            </View>
            <View style={styles.cards}>
                { datas.map((data) => (
                    <Card key={data.id} navigation={navigation} data={data} />
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
    search: {
        width: '25%',
        alignItems:'center',
        // backgroundColor:'#8d9c9d',
        height: 40,
        borderRadius: 10,
        justifyContent: 'center'
    },
    textSearch: {
        color: 'black',
        fontWeight: 'bold'
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