import { StyleSheet } from 'react-native';

const stylesHomeScreen = StyleSheet.create({
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

export default stylesHomeScreen;