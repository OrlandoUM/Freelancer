import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Button,
  CheckBox,
  TouchableHighlight,
  SafeAreaView,
} from 'react-native';
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createDrawerNavigator,
  FlatList,
} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Card, CardItem, Body } from 'native-base';
import { Constants } from 'expo-constants';
import firebase from 'firebase';

//FAZER VALIDAÇÃO DAS ENTRADAS DOS CAMPOS NA TELA DE CADASTRO
//ESTRUTURAS AS CLASSES EM PASTAS
//COLOCAR O 'CSS' NO DEVIDO LUGAR

class HomeScreen extends React.Component {
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
          <ScrollView style={styles.Pagina}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingBottom: 10,
              }}>
              <Image
                style={{ width: 120, height: 120 }}
                source={require('./assets/20294.png')}
              />
            </View>

            <View style={styles.indentificationContainer}>
              <View style={styles.conteinerInput}>
                <TextInput
                  onChangeText={textInputEmail =>
                    this.setState({ textInputEmail })
                  }
                  placeholder="E-mail"
                  returnKeyType="next"
                  value = {this.state.textInputEmail}
                  style={styles.input}
                />
                <TextInput
                  secureTextEntry
                  onChangeText={textInputSenha =>
                    this.setState({ textInputSenha })
                  }
                  placeholder="Senha"
                  returnKeyType="go"
                  value = {this.state.textInputSenha}
                  style={styles.input}
                />

                <View style={{ opacity: 0.8 }}>
                  <Button
                    color="#5200b8"
                    title="LogIn"
                    onPress={this.checkTextInput}
                  />
                </View>
              </View>
            </View>

            <View style={styles.containerTextCadastreSe}>
              <Text
                style={styles.TextCadastrSe}
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

class CadastroScreen extends React.Component {
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
      flagSameCPF: false,
      flagCPFValido: false
    };
  }

  /*firebase.database().ref('users/').once('value', function (snapshot) {
      console.log(snapshot.val())
    })*/

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

  checkTextInput = () => {
    if (this.state.textInputNome != '') {
      this.formataNome();
      if (this.state.textInputCPF != '') {
        this.checkSameCPF();
        if (this.state.textInputEmail != '') {
          if (this.state.textInputNasc != '') {
            if (this.state.textInputSenha != '') {
              if (this.state.flag == true) {
                //if(this.state.flagCPFValido == true){
                  if (this.state.flagSameCPF == false){
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
                    });
                  } else {
                    this.setState({ flagSameCPF: false });
                  }
                /*}else{
                  alert("CPF Inválido!");
                }*/
              } else {
                alert('Preencha todos os campos!');
              }
            } else {
              alert('Preencha todos os campos!');
            }
          } else {
            alert('Preencha todos os campos!');
          }
        } else {
          alert('Preencha todos os campos!');
        }
      } else {
        alert('Preencha todos os campos!');
      }
    } else {
      alert('Preencha todos os campos!');
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
        this.setState({flagCPFValido:false});
      }
      else{
        this.setState({flagCPFValido:true});
      }
    }    
  };
  
  checkSameCPF = () => {
    var that = this;
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
      if (array[indice].CPF == that.state.textInputCPF) {
        alert('Usuário já cadastrado no sistema! #' + (indice + 1));
        this.setState({ flagSameCPF: true });
      }
    });
  };

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }} enabled>
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView>
            <View
              style={{
                backgroundColor: '#914ce0',
                paddingTop: 30,
                flexDirection: 'column',
              }}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableHighlight
                  style={{ paddingLeft: 20 }}
                  onPress={() => this.props.navigation.navigate('Home')}>
                  <Image
                    style={{ height: 30, width: 30 }}
                    source={require('./assets/back-arrow.png')}
                  />
                </TouchableHighlight>
              </View>
              <View style={{ alignItems: 'center', paddingBottom: 20 }}>
                <Text style={{ color: '#FFF' }}>Cadastre-se</Text>
              </View>

              <View style={{ alignItems: 'baseline', paddingLeft: 20 }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingBottom: 20,
                  }}>
                  <View style={{ justifyContent: 'center', height: 35 }}>
                    <Text style={{ color: '#FFF' }}>Nome: </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      paddingLeft: 5,
                      backgroundColor: '#FFF',
                      width: 250,
                      height: 35,
                    }}>
                    <TextInput
                      placeholder="Nome"
                      returnKeyType="next"
                      onChangeText={textInputNome =>
                        this.setState({ textInputNome })
                      }
                    />
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingBottom: 20,
                    paddingLeft: 15,
                  }}>
                  <View style={{ justifyContent: 'center', height: 35 }}>
                    <Text style={{ color: '#FFF' }}>CPF: </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      paddingLeft: 5,
                      backgroundColor: '#FFF',
                      width: 250,
                      height: 35,
                    }}>
                    <TextInput
                      placeholder="Apenas números"
                      returnKeyType="next"
                      onChangeText={textInputCPF =>
                        this.setState({ textInputCPF })
                      }
                      //onChange={this.validaCPF()}
                    />
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingBottom: 20,
                  }}>
                  <View style={{ justifyContent: 'center', height: 35 }}>
                    <Text style={{ color: '#FFF' }}>E-mail: </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      paddingLeft: 5,
                      backgroundColor: '#FFF',
                      width: 250,
                      height: 35,
                    }}>
                    <TextInput
                      placeholder="nome@exemplo.com"
                      returnKeyType="next"
                      onChangeText={textInputEmail =>
                        this.setState({ textInputEmail })
                      }
                    />
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    paddingBottom: 20,
                    paddingLeft: 5,
                  }}>
                  <View style={{ justifyContent: 'center', height: 35 }}>
                    <Text style={{ color: '#FFF' }}>Nasc.: </Text>
                  </View>
                  <View
                    style={{
                      justifyContent: 'center',
                      paddingLeft: 5,
                      backgroundColor: '#FFF',
                      width: 250,
                      height: 35,
                    }}>
                    <TextInput
                      placeholder="DDMMYYY"
                      returnKeyType="next"
                      onChangeText={textInputNasc =>
                        this.setState({ textInputNasc })
                      }
                    />
                  </View>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                  }}>
                  <View style={{ justifyContent: 'center', height: 35 }}>
                    <Text style={{ color: '#FFF' }}>Escolaridade:</Text>
                  </View>
                </View>

                <View style={{}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      paddingLeft: 20,
                      paddingBottom: 5,
                    }}>
                    <CheckBox
                      value={this.state.checked1}
                      onChange={() => this.alterFC()}
                    />
                    <View style={{ paddingLeft: 5 }}>
                      <Text style={{ color: '#FFF' }}>
                        Fundamental Completo
                      </Text>
                    </View>
                  </View>

                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        paddingBottom: 5,
                      }}>
                      <CheckBox
                        value={this.state.checked2}
                        onChange={() => this.alterFI()}
                      />
                      <View style={{ paddingLeft: 5 }}>
                        <Text style={{ color: '#FFF' }}>
                          Fundamental Incompleto
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        paddingBottom: 5,
                      }}>
                      <CheckBox
                        value={this.state.checked3}
                        onChange={() => this.alterMC()}
                      />
                      <View style={{ paddingLeft: 5 }}>
                        <Text style={{ color: '#FFF' }}>Médio Completo</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        paddingBottom: 5,
                      }}>
                      <CheckBox
                        value={this.state.checked4}
                        onChange={() => this.alterMI()}
                      />
                      <View style={{ paddingLeft: 5 }}>
                        <Text style={{ color: '#FFF' }}>Médio Incompleto</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        paddingBottom: 5,
                      }}>
                      <CheckBox
                        value={this.state.checked5}
                        onChange={() => this.alterGC()}
                      />
                      <View style={{ paddingLeft: 5 }}>
                        <Text style={{ color: '#FFF' }}>
                          Graduação Completo
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        paddingBottom: 5,
                      }}>
                      <CheckBox
                        value={this.state.checked6}
                        onChange={() => this.alterGI()}
                      />
                      <View style={{ paddingLeft: 5 }}>
                        <Text style={{ color: '#FFF' }}>
                          Graduação Incompleto
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        paddingBottom: 5,
                      }}>
                      <CheckBox
                        value={this.state.checked7}
                        onChange={() => this.alterPG()}
                      />
                      <View style={{ paddingLeft: 5 }}>
                        <Text style={{ color: '#FFF' }}>Pós Graduação</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        paddingBottom: 5,
                      }}>
                      <CheckBox
                        value={this.state.checked8}
                        onChange={() => this.alterM()}
                      />
                      <View style={{ paddingLeft: 5 }}>
                        <Text style={{ color: '#FFF' }}>Mestrado</Text>
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingLeft: 20,
                        paddingBottom: 5,
                      }}>
                      <CheckBox
                        value={this.state.checked9}
                        onChange={() => this.alterD()}
                      />
                      <View style={{ paddingLeft: 5 }}>
                        <Text style={{ color: '#FFF' }}>Doutorado</Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  paddingLeft: 20,
                  paddingTop: 20,
                  paddingBottom: 10,
                }}>
                <View style={{ justifyContent: 'center', height: 35 }}>
                  <Text style={{ color: '#FFF' }}>Senha: </Text>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    paddingLeft: 5,
                    backgroundColor: '#FFF',
                    width: 250,
                    height: 35,
                  }}>
                  <TextInput
                    secureTextEntry
                    placeholder="Definir senha"
                    returnKeyType="next"
                    onChangeText={textInputSenha =>
                      this.setState({ textInputSenha })
                    }
                  />
                </View>
              </View>

              <View style={styles.containerTextCadastreSe}>
                <Text
                  style={styles.TextCadastrSe}
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

class WellcomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: '#914ce0' }}>
        <View style={{ padding: 20, paddingTop: 70 }}>
          <Card>
            <CardItem header bordered>
              <Text>Freelancer</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text>
                  Uma solução para quem tem pressa! O software tem como objetivo
                  fornecer pequenos serviços a serem realizados no dia a dia
                  através de profissionais informais. Desenvolvido por
                  estudantes da Universidade Católica de Pernambuco (UNICAP), o
                  aplicativo é totalmente gratuito e de cunho acadêmico!
                </Text>
              </Body>
            </CardItem>
          </Card>
        </View>
        <View style={styles.containerTextCadastreSe}>
          <Text
            style={styles.TextCadastrSe}
            onPress={() => this.props.navigation.navigate('Profile')}>
            Entendi :)
          </Text>
        </View>
      </View>
    );
  }
}

class ProfileScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#914ce0',
        }}>
        <Text style={{ color: '#FFF', fontSize: 20, paddingBottom: 25 }}>
          Escolha seu perfil
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ padding: 30 }}>
            <Text
              style={{ fontSize: 20, color: '#FFF' }}
              onPress={() => this.props.navigation.navigate('Seeker')}>
              Seeker
            </Text>
          </View>

          <View style={{ padding: 30 }}>
            <Text
              style={{ fontSize: 20, color: '#FFF' }}
              onPress={() => this.props.navigation.navigate('Worker')}>
              Worker
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

class SeekerScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>
          NAVIGATION COM MENU LATERAL ONDE FICARÁ O BOTÃO DE TROCA PARA OUTRO
          PROFILE E O DE SAIR
        </Text>
        <View style={styles.containerTextCadastreSe}>
          <Text
            style={styles.TextCadastrSe}
            onPress={() => this.props.navigation.navigate('Worker')}>
            Change to Worker
          </Text>
        </View>
        <View style={styles.containerTextCadastreSe}>
          <Text
            style={styles.TextCadastrSe}
            onPress={() => this.props.navigation.navigate('Home')}>
            Sair
          </Text>
        </View>
      </View>
    );
  }
}

class WorkerScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>
          NAVIGATION COM MENU LATERAL ONDE FICARÁ O BOTÃO DE TROCA PARA OUTRO
          PROFILE E O DE SAIR
        </Text>
        <View style={styles.containerTextCadastreSe}>
          <Text
            style={styles.TextCadastrSe}
            onPress={() => this.props.navigation.navigate('Seeker')}>
            Change to Seeker
          </Text>
        </View>
        <View style={styles.containerTextCadastreSe}>
          <Text
            style={styles.TextCadastrSe}
            onPress={() => this.props.navigation.navigate('Home')}>
            Sair
          </Text>
        </View>
      </View>
    );
  }
}

const AppSwitchNavigator = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Cadastro: { screen: CadastroScreen },
    Wellcome: { screen: WellcomeScreen },
    Profile: { screen: ProfileScreen },
    Seeker: { screen: SeekerScreen },
    Worker: { screen: WorkerScreen },
  },
  {
    defaultNavigationOptions: {
      header: null,
    },
  },
  {
    initialRouteName: 'Home',
  }
);

export const AppContainer = createAppContainer(AppSwitchNavigator);

export default class App extends React.Component {
  componentWillMount() {
    var Config = {
      apiKey: 'AIzaSyA_DmIAoGtuZM3K0O_Zig5V-h8zainlGXs',
      authDomain: 'freelancer-d7275.firebaseapp.com',
      databaseURL: 'https://freelancer-d7275.firebaseio.com',
      projectId: 'freelancer-d7275',
      storageBucket: 'freelancer-d7275.appspot.com',
      messagingSenderId: '1023986495753',
      appId: '1:1023986495753:web:cac63bae085797d098a3d8',
      measurementId: 'G-SPQVBYG4NH',
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(Config);
    }
  }

  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  Pagina: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#914ce0',
    paddingTop: 60,
  },
  containerTextCadastreSe: {
    alignItems: 'center',
    backgroundColor: '#914ce0',
    padding: 15,
    height: 50,
  },
  TextCadastrSe: {
    color: '#FFF',
  },
  indentificationContainer: {
    maxWidth: 226,
  },
  conteinerInput: {
    padding: 0,
    backgroundColor: '#914ce0',
    width: 226,
  },
  input: {
    height: 40,
    backgroundColor: '#cba2fa',
    color: '#FFF',
    marginBottom: 15,
    paddingHorizontal: 10,
  },
});
