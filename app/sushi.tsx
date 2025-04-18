import {View, StyleSheet, Text, Image, ScrollView, TouchableOpacity, Dimensions} from "react-native"
import { Link } from "expo-router"

export default function Sushi() {
    return(
            <View style={style.body}>
                <View style={style.box}>

                </View>
                <View style={style.losang}>

                </View>
                <View style={style.cilind}>

                </View>
                <View style={style.circle}>

                </View>
                <TouchableOpacity style={style.bottom}>
                    <Text style={style.text}>
                        Discover
                    </Text>
                    <View>
                        <Text style={style.arrow}>&gt;</Text>
                    </View>
                </TouchableOpacity>
            </View>
    )
}
const {width, height} = Dimensions.get("window")
const style = StyleSheet.create({
    body: {
        backgroundColor:"#380F17",
        flex:1,
        padding:20,
    },
    circle: {
        width:40,
        height:40,
        backgroundColor:"#252B2B",
        borderRadius:50,
    },
     cilind: {
        backgroundColor:"#EFDFC5",
        width:200,
        borderRadius:50,
        height:50,
        transform: [
            {
                rotate:"-50deg"
            }
        ],
        marginLeft: 50,
    },
    bottom: {
        backgroundColor:"#DC2011",
        width: width * 0.9,
        height:80,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        borderRadius:15,
        marginTop:310,
    },
    text: {
        color:"#fff",
        fontSize:18,
        marginLeft: 25,
        fontWeight: 500,
    },
    arrow: {
        color:"#fff",
        fontSize:24,
        marginRight:30,
    },
    losang: {
        backgroundColor:"#EFDFC5",
        width:20,
        height:20,
        transform: [{
            rotate:"50deg",
        }]
    },
    box: {
        width:150,
        height:70,
        marginBottom:50,
        marginLeft:20,
        borderRadius:10,
        backgroundColor:"#8F0B13",
    },
})