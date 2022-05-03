import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

function Card({ navigation, data }) {
    function navigateWithId(card){
        navigation.navigate('DetalheCard', {
            card
        })
    } 

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={ () => navigateWithId(data) }
        >
            <Image style={styles.img} source={ data.img } />
            <View style={styles.containerDescription}>
                <Text numberOfLines={1} style={styles.title}>{ data.title }</Text>
                <Text numberOfLines={2} style={styles.description}>{ data.description }</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: '90%',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 2,
        marginBottom: 20,
        flexDirection: 'row'
    },
    img: {
        width:150,
        height:150,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
    },
    title: {
        fontSize: 23,
        fontWeight:'bold',
        width: 200
    },
    description: {
        fontSize: 15,
        width:200
    },
    containerDescription: {
        paddingHorizontal: 10,
    },
});

export default Card;