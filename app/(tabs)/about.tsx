import {Text, View, StyleSheet} from "react-native"
import {Link} from "expo-router"
export default function about() {
    return(
        <View style={styles.view}>
            <Text>
                Texto
            </Text>
            <Link href="/">Link</Link>
        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        backgroundColor:"blue",
    }
})