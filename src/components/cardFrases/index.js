import { Text, View, StyleSheet } from "react-native";

function CardFrases({ navigation, data }) {
    return (
        <View
            style={styles.container}
        >
            <Text numberOfLines={1} style={styles.title}>{ data }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 2,
        marginRight: 20,
        justifyContent: 'center',
        padding: 4,
        textAlign: 'center',
        paddingHorizontal: 10
    },
    title: {
        fontSize: 20,
        fontWeight:'bold',
    },
});

export default CardFrases;