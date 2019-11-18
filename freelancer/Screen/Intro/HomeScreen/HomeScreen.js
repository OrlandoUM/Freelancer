import React from 'react';

import {
  Text,
  View,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import firebase from '../../../util/firebase';
import { Button } from 'react-native-paper';
import stylesHomeScreen from './style';
import createAppContainer from '../../../Navigator/FreelancerNavigator';
import Router from '../../../Navigator/FreelancerNavigator';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInputEmail: '',
      textInputSenha: '',
      firebaseReturn: false
    };

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.firebaseReturn == false && this.state.firebaseReturn == true) {
      this.setBeginState();
      this.props.navigation.navigate('Profile');
    }
  }

  setBeginState = () =>{
    this.setState({firebaseReturn: false});
    this.setState({textInputEmail: ""});
    this.setState({textInputSenha: ""});
  };

  checkTextInput = () => {
    if (this.state.textInputEmail != '') {
      if (this.state.textInputSenha != '') {
        this.checkSameInfo();
      } else {
        alert('Informe a senha');
      }
    } else {
      if (this.state.textInputSenha != '') {
        alert('Informe o Email');
      } else {
        alert('Informe o E-mail e senha');
      }
    }
  };

  checkSameInfo = () => {
    var th = this;
    let q = firebase.database().ref('users');
    var finished = [];
    q.on('value', snapshot => {
      snapshot.forEach(function(data) {
        let result = data.val();
        result['key'] = data.key;
        finished.push(result);
      });
    });
    finished.forEach(function(item, indice, array) {
      if (array[indice].Email == th.state.textInputEmail && array[indice].Senha == th.state.textInputSenha) {
        th.setState({ firebaseReturn: true  });
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} enabled>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView style={stylesHomeScreen.Pagina}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 10,
              }}>
              <Image
                style={{ width: 120, height: 120 }}
                source={require('../../../Image/20294.png')}
              />
            </View>

            <View style={stylesHomeScreen.indentificationContainer}>
              <View style={stylesHomeScreen.conteinerInput}>
                <TextInput
                  onChangeText={textInputEmail =>
                    this.setState({ textInputEmail })
                  }
                  placeholder="E-mail"
                  returnKeyType="next"
                  value = {this.state.textInputEmail}
                  style={stylesHomeScreen.input}
                />
                <TextInput
                  secureTextEntry
                  onChangeText={textInputSenha =>
                    this.setState({ textInputSenha })
                  }
                  placeholder="Senha"
                  returnKeyType="go"
                  value = {this.state.textInputSenha}
                  style={stylesHomeScreen.input}
                />

                <View style={{ opacity: 0.8 }}>
                  <Button
                    color="#5200b8"
                    mode = "contained"
                    onPress={this.checkTextInput}
                  >
                    LogIn
                  </Button>
                </View>
              </View>
            </View>

            <View style={stylesHomeScreen.containerTextCadastreSe}>
              <Text
                style={stylesHomeScreen.TextCadastrSe}
                onPress={() => this.props.navigation.navigate('Cadastro')}>
                Cadastre-se
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}
