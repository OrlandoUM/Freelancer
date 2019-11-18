import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';

import { CheckBox } from 'native-base';
import firebase from '../../../util/firebase';
import { Button } from 'react-native-paper';
import stylesCadastroScreen from './style';

export default class CadastroScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      textInputNome: '',
      textInputCPF: '',
      textInputEmail: '',
      textInputNasc: '',
      textInputSenha: '',
      textInputEscolaridade: '',
      flag: false,
      flagCPFOK: false,
      flagButtonPressed: false,
    };
  }

  alterFC() {
    this.setState({
      checked1: true,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      flag: true,
      textInputEscolaridade: 'Fundamental Completo',
    });
  }
  alterFI() {
    this.setState({
      checked1: false,
      checked2: true,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      flag: true,
      textInputEscolaridade: 'Fundamental Incompleto',
    });
  }
  alterMC() {
    this.setState({
      checked1: false,
      checked2: false,
      checked3: true,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      flag: true,
      textInputEscolaridade: 'Ensino Médio Completo',
    });
  }
  alterMI() {
    this.setState({
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: true,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      flag: true,
      textInputEscolaridade: 'Ensino Médio Incompleto',
    });
  }
  alterGC() {
    this.setState({
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: true,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: false,
      flag: true,
      textInputEscolaridade: 'Graduação Completa',
    });
  }
  alterGI() {
    this.setState({
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: true,
      checked7: false,
      checked8: false,
      checked9: false,
      flag: true,
      textInputEscolaridade: 'Graduação Incompleta',
    });
  }
  alterPG() {
    this.setState({
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: true,
      checked8: false,
      checked9: false,
      flag: true,
      textInputEscolaridade: 'Pós-Graduado',
    });
  }
  alterM() {
    this.setState({
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: true,
      checked9: false,
      flag: true,
      textInputEscolaridade: 'Mestrado',
    });
  }
  alterD() {
    this.setState({
      checked1: false,
      checked2: false,
      checked3: false,
      checked4: false,
      checked5: false,
      checked6: false,
      checked7: false,
      checked8: false,
      checked9: true,
      flag: true,
      textInputEscolaridade: 'Doutorado',
    });
  }

  formataNome = () => {
    var name = this.state.textInputNome;
    var text = "";
    var i;
    for (i = 0; i < name.length; i++) {
      if(i == 0 || name[i-1] == " "){
    	  text += name[i].toUpperCase();
      }
      else{
        text += name[i].toLowerCase();
      }
    }
    this.setState({textInputNome: text});
  };

  componentDidUpdate(prevProps, prevState){
    if(prevState.flagCPFOK == false && this.state.flagCPFOK == true || prevState.flagCPFOK == true && this.state.flagCPFOK == true){
      if(this.state.flagButtonPressed == true && prevState.flagButtonPressed == false || this.state.flagButtonPressed == true && prevState.flagButtonPressed == true){
        if(this.state.textInputNome != "" && this.state.textInputEmail != "" && this.state.textInputNasc != "" && this.state.textInputSenha != "" && this.state.textInputEscolaridade != ""){
          firebase
          .database()
          .ref('users')
          .push({
            Nome: this.state.textInputNome,
            CPF: this.state.textInputCPF,
            Email: this.state.textInputEmail,
            Nascimento: this.state.textInputNasc,
            Escolaridade: this.state.textInputEscolaridade,
            Senha: this.state.textInputSenha,
          })
          .then(() => {
            alert('Usuário cadastrado com sucesso!');
            this.props.navigation.navigate('Wellcome');
          })
          .catch(() => {
            alert('Erro ao cadastrar');
            this.setState({flagCPFOK: false});
          });
        }
      }
    }
  }

  checkTextInput = () => {
    this.setState({flagButtonPressed: true});
    if (this.state.textInputNome != '') {
      this.formataNome();
      if (this.state.textInputCPF != '') {
        this.validaCPF();
        if (this.state.textInputEmail != '') {
          if (this.state.textInputNasc != '') {
            if (this.state.textInputSenha != '') {
              if (this.state.flag != true) {
                alert('Preencha todos os campos!');
                this.setState({flagButtonPressed: false});
              }
            } else {
              alert('Preencha todos os campos!');
              this.setState({flagButtonPressed: false});
            }
          } else {
            alert('Preencha todos os campos!');
            this.setState({flagButtonPressed: false});
          }
        } else {
          alert('Preencha todos os campos!');
          this.setState({flagButtonPressed: false});
        }
      } else {
        alert('Preencha todos os campos!');
        this.setState({flagButtonPressed: false});
      }
    } else {
      alert('Preencha todos os campos!');
      this.setState({flagButtonPressed: false});
    }
  };

  validaCPF = () => {
    var soma1, d1, cpfAux1, cpfRecalculado, soma2, d2;
    if(this.state.textInputCPF.length == 11){
      soma1 = (parseInt(this.state.textInputCPF.substring(0,1)) * 10) +
              (parseInt(this.state.textInputCPF.substring(1,2)) * 9) +
              (parseInt(this.state.textInputCPF.substring(2,3)) * 8) +
              (parseInt(this.state.textInputCPF.substring(3,4)) * 7) +
              (parseInt(this.state.textInputCPF.substring(4,5)) * 6) +
              (parseInt(this.state.textInputCPF.substring(5,6)) * 5) +
              (parseInt(this.state.textInputCPF.substring(6,7)) * 4) +
              (parseInt(this.state.textInputCPF.substring(7,8)) * 3) +
              (parseInt(this.state.textInputCPF.substring(8,9)) * 2);
      if((soma1 % 11) < 2){
        d1 = 0;
      }
      else{
        d1 = 11 - (soma1 % 11);
      }
      cpfAux1 = this.state.textInputCPF.substring(0,9) + d1.toString();
      soma2 = (parseInt(cpfAux1.substring(0,1)) * 11) +
              (parseInt(cpfAux1.substring(1,2)) * 10) +
              (parseInt(cpfAux1.substring(2,3)) * 9) +
              (parseInt(cpfAux1.substring(3,4)) * 8) +
              (parseInt(cpfAux1.substring(4,5)) * 7) +
              (parseInt(cpfAux1.substring(5,6)) * 6) +
              (parseInt(cpfAux1.substring(6,7)) * 5) +
              (parseInt(cpfAux1.substring(7,8)) * 4) +
              (parseInt(cpfAux1.substring(8,9)) * 3) +
              (parseInt(cpfAux1.substring(9,10)) * 2) ;
      if((soma2 % 11) < 2){
        d2 = 0;
      }
      else{
        d2 = 11 - (soma2 % 11);
      }
      cpfRecalculado = cpfAux1 + d2.toString();
      if(cpfRecalculado != this.state.textInputCPF){
        alert("CPF inválido");
        this.setState({ flagCPFOK: false });
      }
      else{
        this.checkSameCPF();
      }
    }else{
      alert("CPF inválido");
      this.setState({ flagCPFOK: false });
    }   
  };
  
  checkSameCPF = () => {
    var that = this;
    let q = firebase.database().ref('users');
    var finished = [];
    var flag = 0;
    q.on('value', snapshot => {
      snapshot.forEach(function(data) {
        let result = data.val();
        result['key'] = data.key;
        finished.push(result);
      });
    });
    finished.forEach(function(item, indice, array) {
      if (array[indice].CPF == that.state.textInputCPF) {
        alert('Usuário já cadastrado no sistema! #' + (indice + 1));
        flag = 1;
      }
    });
    if(flag == 0){
      this.setState({ flagCPFOK: true });
    }
    else{
      this.setState({ flagCPFOK: false });
    }
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={stylesCadastroScreen.Pagina} enabled>
        <SafeAreaView style={stylesCadastroScreen.Pagina}>
          <ScrollView>
            <View
              style={stylesCadastroScreen.PaginaCadastro}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableHighlight
                  style={{ paddingLeft: 20 }}
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <Image
                    style={stylesCadastroScreen.ImageStyle}
                    source={require('../../../Image/backArrow.png')}
                  />
                </TouchableHighlight>
              </View>
              <View style={ stylesCadastroScreen.ContainerTextCadastrese }>
                <Text style={{ color: '#FFF' }}>Cadastre-se</Text>
              </View>

              <View style={{ alignItems: 'center'}}>
                <View
                  style={ stylesCadastroScreen.ContainerTextInput }>
                    <TextInput
                      placeholder="Nome"
                      returnKeyType="next"
                      onChangeText={textInputNome =>
                        this.setState({ textInputNome })
                      }
                    />
                  </View>

                <View
                    style={ stylesCadastroScreen.ContainerTextInput }>
                    <TextInput
                      placeholder="CPF - Apenas números"
                      keyboardType = "numeric"
                      returnKeyType="next"
                      onChangeText={textInputCPF =>
                        this.setState({ textInputCPF })
                      }
                    />
                  </View>

                  <View
                    style={ stylesCadastroScreen.ContainerTextInput }>
                    <TextInput
                      placeholder="nome@exemplo.com"
                      returnKeyType="next"
                      onChangeText={textInputEmail =>
                        this.setState({ textInputEmail })
                      }
                    />
                  </View>

                  <View
                    style={ stylesCadastroScreen.ContainerTextInput }>
                    <TextInput
                      placeholder="Nascimento - DDMMYYY"
                      returnKeyType="next"
                      onChangeText={textInputNasc =>
                        this.setState({ textInputNasc })
                      }
                    />
                  </View>
                </View>
                

                  <View style={ stylesCadastroScreen.ContainerTextEscolaridade }>
                    <Text style={{ color: '#FFF' }}>Escolaridade:</Text>
                  </View>

                  <View
                    style={ stylesCadastroScreen.ContainerCheckBox }>
                    <CheckBox
                      checked = {this.state.checked1}
                      onPress={() => this.alterFC()}
                      color = "#FFF"
                    />
                    <View style={{ paddingLeft: 15 }}>
                      <Text style={{ color: '#FFF' }}>
                        Fundamental Completo
                      </Text>
                    </View>
                  </View>

                  <View>
                    <View
                      style={stylesCadastroScreen.ContainerCheckBox}>
                      <CheckBox
                        checked = {this.state.checked2}
                        onPress={() => this.alterFI()}
                        color = "#FFF"
                      />
                      <View style={{ paddingLeft: 15 }}>
                        <Text style={{ color: '#FFF' }}>
                          Fundamental Incompleto
                        </Text>
                      </View>
                    </View>
                    <View
                      style={stylesCadastroScreen.ContainerCheckBox}>
                      <CheckBox
                        checked = {this.state.checked3}
                        onPress={() => this.alterMC()}
                        color = "#FFF"
                      />
                      <View style={{ paddingLeft: 15 }}>
                        <Text style={{ color: '#FFF' }}>Médio Completo</Text>
                      </View>
                    </View>
                    <View
                      style={stylesCadastroScreen.ContainerCheckBox}>
                      <CheckBox
                        checked = {this.state.checked4}
                        onPress={() => this.alterMI()}
                        color = "#FFF"
                      />
                      <View style={{ paddingLeft: 15 }}>
                        <Text style={{ color: '#FFF' }}>Médio Incompleto</Text>
                      </View>
                    </View>
                    <View
                      style={stylesCadastroScreen.ContainerCheckBox}>
                      <CheckBox
                        checked = {this.state.checked5}
                        onPress={() => this.alterGC()}
                        color = "#FFF"
                      />
                      <View style={{ paddingLeft: 15 }}>
                        <Text style={{ color: '#FFF' }}>
                          Graduação Completo
                        </Text>
                      </View>
                    </View>
                    <View
                      style={stylesCadastroScreen.ContainerCheckBox}>
                      <CheckBox
                        checked = {this.state.checked6}
                        onPress={() => this.alterGI()}
                        color = "#FFF"
                      />
                      <View style={{ paddingLeft: 15 }}>
                        <Text style={{ color: '#FFF' }}>
                          Graduação Incompleto
                        </Text>
                      </View>
                    </View>
                    <View
                      style={stylesCadastroScreen.ContainerCheckBox}>
                      <CheckBox
                        checked = {this.state.checked7}
                        onPress={() => this.alterPG()}
                        color = "#FFF"
                      />
                      <View style={{ paddingLeft: 15 }}>
                        <Text style={{ color: '#FFF' }}>Pós Graduação</Text>
                      </View>
                    </View>
                    <View
                      style={stylesCadastroScreen.ContainerCheckBox}>
                      <CheckBox
                        checked = {this.state.checked8}
                        onPress={() => this.alterM()}
                        color = "#FFF"
                      />
                      <View style={{ paddingLeft: 15 }}>
                        <Text style={{ color: '#FFF' }}>Mestrado</Text>
                      </View>
                    </View>
                    <View
                      style={stylesCadastroScreen.ContainerCheckBox}>
                      <CheckBox
                        checked = {this.state.checked9}
                        onPress={() => this.alterD()}
                        color = "#FFF"
                      />
                      <View style={{ paddingLeft: 15 }}>
                        <Text style={{ color: '#FFF' }}>Doutorado</Text>
                      </View>
                    </View>
                  </View>

              <View
                style={ stylesCadastroScreen.ContainerTextSenha }>
                <View style={{ justifyContent: 'center', height: 35 }}>
                  <Text style={{ color: '#FFF' }}>Senha: </Text>
                </View>
                <View
                  style={ stylesCadastroScreen.ContainerTextInputSenha }>
                  <TextInput
                    secureTextEntry
                    returnKeyType="next"
                    onChangeText={textInputSenha =>
                      this.setState({ textInputSenha })
                    }
                  />
                </View>
              </View>

              <View style={ stylesCadastroScreen.ContainerTextEfetuarCadastro }>
                <Text
                  style={{color: '#FFF'}}
                  onPress={this.checkTextInput}>
                  Efetuar Cadastro
                </Text>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}