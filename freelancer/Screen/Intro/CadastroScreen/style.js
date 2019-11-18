import { StyleSheet } from 'react-native';

const stylesCadastroScreen = StyleSheet.create({
  Pagina: {
    flex: 1,
  },
  PaginaCadastro:{
	backgroundColor: '#914ce0',
    paddingTop: 30,
    flexDirection: 'column',
  },
  ImageStyle:{ 
	height: 30, 
	width: 30,
  },
  ContainerTextCadastrese:{
	alignItems: 'center', 
	paddingBottom: 20,
  },
  ContainerTextInput:{
	justifyContent: 'center',
    paddingLeft: 5,
    marginBottom: 20,
    backgroundColor: '#FFF',
    width: 250,
    maxWidth:250,
    height: 35,
  },
  ContainerTextEscolaridade:{
	paddingLeft: 20, 
	height: 35,
  },
  ContainerCheckBox:{
	flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    paddingBottom: 5, 
  },
  ContainerTextSenha:{
	flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingLeft: 20,
    paddingTop: 20,
    paddingBottom: 10,
  },
  ContainerTextInputSenha:{
	justifyContent: 'center',
    paddingLeft: 5,
    backgroundColor: '#FFF',
    width: 215,
    height: 35,
  },
  ContainerTextEfetuarCadastro:{
	alignItems: 'center',
	backgroundColor: '#914ce0',
	padding: 15, 
	height: 50,
  },
});

export default stylesCadastroScreen;
