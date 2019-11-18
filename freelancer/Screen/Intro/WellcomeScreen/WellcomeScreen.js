import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

import { Card, CardItem, Body } from 'native-base';
import stylesWellcomeScreen from './style';

export default class WellcomeScreen extends React.Component {
  render() {
    return (
      <View style={ stylesWellcomeScreen.Pagina }>
        <View style={ stylesWellcomeScreen.ContainerCard }>
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
        <View style={stylesWellcomeScreen.containerTextCadastreSe}>
          <Text
            style={stylesWellcomeScreen.TextCadastrSe}
            onPress={() => this.props.navigation.navigate('Profile')}>
            Entendi :)
          </Text>
        </View>
      </View>
    );
  }
}