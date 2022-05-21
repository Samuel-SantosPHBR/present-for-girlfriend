import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

function CardImages({ navigation, data }) {
    return (
        <Image style={styles.img} source={ data } />
    );
}

const styles = StyleSheet.create({

    img: {
        width:180,
        height:180,
        borderTopLeftRadius:10,
        borderBottomLeftRadius:10,
        marginBottom: 30
    },
});

export default CardImages;