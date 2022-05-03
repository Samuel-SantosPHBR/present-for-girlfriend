import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function DetailCard({route, navigation}) {
    const { card }  = route.params;
    return (
        <ScrollView>
            <View style={style.containerImg}>
                <Image blurRadius={3} style={style.img} source={card.img}/>
                <Text style={style.title}>{card.title}</Text>
            </View>
            <View style={style.textContainer}>
                <Text style={style.description}>
                    {card.description}
                </Text>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    containerImg: {
        width: '100%',
        height: 300,
        justifyContent: 'center',
        alignItems: 'center'
    },
    img: {
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 30,
        backgroundColor: 'transparent',
        position: 'absolute',
        fontWeight: 'bold',
        color: 'white',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10
    },
    textContainer: {
        padding:20
    },
    description: {
        textAlign: 'justify',
        fontSize: 15
    }
});