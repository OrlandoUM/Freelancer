import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class WorkerScreen extends React.Component {
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

const styles = StyleSheet.create({
  containerTextCadastreSe: {
    alignItems: 'center',
    backgroundColor: '#914ce0',
    padding: 15,
    height: 50,
  },
  TextCadastrSe: {
    color: '#FFF',
  },
});