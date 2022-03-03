import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Alert,
} from "react-native";

export default function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [isLogg, setIslogg] = useState(false);
  const handlePress = () => {
    if (password.length > 5 && email.length > 5) {
      // setIslogg((prev) => !prev);
      Alert.alert("Vous avez réussi à vous connecter");
    } else {
      Alert.alert("incorrect email or password");
    }
  };

  return (
    <SafeAreaView>
      <TextInput
        style={{
          marginTop: 100,
          borderWidth: 1,
          width: 150,
          padding: 5,
          borderRadius: 5,
          borderColor: "grey",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        placeholder="Login"
        // LIE LE STATE AU BOUTON
        onchangeText={setEmail}
      />
      <TextInput
        style={{
          marginTop: 20,
          borderWidth: 1,
          width: 150,
          padding: 5,
          borderRadius: 5,
          borderColor: "grey",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity onPress={handlePress} style={styles.btn}>
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>
      {/* Condition ternaire qui demande si logg = true */}
      {/* {isLogg ? (
        <View>
          <Text>Form submitted</Text>
        </View>
      ) : (
        <View>
          <Text>incorect password or email</Text>
        </View>
      )} */}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  btn: {
    marginTop: 15,
    backgroundColor: "blue",
    width: 50,
    marginRight: "auto",
    marginLeft: "auto",
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
});
