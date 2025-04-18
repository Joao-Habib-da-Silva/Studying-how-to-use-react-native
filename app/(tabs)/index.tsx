import {Text, View, StyleSheet, Image, TextInput, ScrollView, TouchableOpacity} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons"
import { Link } from "expo-router"
export default function Index() {
  return(
      <View style={styles.container}>
          <View style={styles.accounts}>
            <View style={styles.balls}></View>
            <View style={styles.balls}></View>
            <View style={styles.balls}></View>
            <View style={styles.balls}></View>
            <View style={styles.balls}></View>
          </View>
         <ScrollView horizontal={true}>
           <View style={styles.scroll}>
            <View style={styles.squares}></View>
            <View style={styles.squares}></View>
            <View style={styles.squares}></View>
            <View style={styles.squares}></View>
            <View style={styles.squares}></View>
            <View style={styles.squares}></View>
            <View style={styles.squares}></View>
            <View style={styles.squares}></View>
            <View style={styles.squares}></View>
            <View style={styles.squares}></View>
            <View style={styles.squares}></View>
            <View style={styles.squares}></View>
          </View>
         </ScrollView>
          <View style={styles.links}>
              <Link href="/about">Tentando</Link>
              <Link href="/sushi" style={styles.sushi}>Sushi</Link>
              <TouchableOpacity onPress={primeirainteracao} style={styles.button}>
              <Text>
                Cliqueee
              </Text>
              </TouchableOpacity>
          </View>
         
      </View>
  )
}
const primeirainteracao = () => {
  alert("Olaaaa")
}
const styles = StyleSheet.create( {
  container: {
    flex:1,
    backgroundColor:"red",
  },
  scroll: {
    backgroundColor:"yellow",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingLeft:10,
    paddingRight:10,
    flexDirection:"row",
    height:100,
    gap:20,
    marginTop:50,
  },
  squares: {
    width:50,
    height:50,
    borderRadius:10,
    backgroundColor: "black",
  },
  accounts: {
    backgroundColor:"green",
    flexDirection: "row",
    paddingLeft:10,
    paddingRight:10,
    gap:10,
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    height:100,
    },
  balls: {
    borderRadius: 50,
    width:60,
    height:60,
    backgroundColor:"black",
  },
  links: {
    backgroundColor:"blue",
  }, 
  button: {
    backgroundColor:"red",
  },
  sushi: {
    backgroundColor:"green",
  },
})