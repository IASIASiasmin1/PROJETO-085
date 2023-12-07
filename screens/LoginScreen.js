import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";


export default class LoginScreen extends Component {
    constructor () {
        super();

        this.state = {
          email: firebase.auth().currentUser.email,
          senha: ""
        };
    }

    handleLogin() {
        firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.props.navigation.navigate("Alugue uma Bicicleta");
      })
      .catch((error) => {
        Alert.alert(error.message);
      });

    
    }
  render() {
    return (
      <View>
        <TextInput
         placeholder={"Digite seu email."}
         value={email}
         onChangeText={(text) => {
          this.setState({ email: text });
        }}
         />

        <TextInput
         placeholder={"Digite sua senha."} 
         value={senha}
         onChangeText={(text) => {
          this.setState({ senha: text });
        }}/>

        <TouchableOpacity
              onPress={() => this.handleLogin(email, senha)}
              style={styles.button}
            >
              <Text style={styles.scanbuttonText}>Entrar</Text>
            </TouchableOpacity>
        </View>
    );
  }
}