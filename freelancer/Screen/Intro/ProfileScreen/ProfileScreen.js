import * as React from 'react';
import { Text, View } from 'react-native';

import stylesProfileScreen from './style';

export default class ProfileScreen extends React.Component {
  render() {
    return (
      <View style={ stylesProfileScreen.Pagina }>
        <Text style={ stylesProfileScreen.ContainerTextChooseProfile }>
          Escolha seu perfil
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={ stylesProfileScreen.ContainerChooseProfile }>
            <Text
              style={ stylesProfileScreen.ContainerText }
              onPress={() => this.props.navigation.navigate('Seeker')}>
              Seeker
            </Text>
          </View>

          <View style={ stylesProfileScreen.ContainerChooseProfile }>
            <Text
              style={ stylesProfileScreen.ContainerText }
              onPress={() => this.props.navigation.navigate('Worker')}>
              Worker
            </Text>
          </View>
        </View>
      </View>
    );
  }
}