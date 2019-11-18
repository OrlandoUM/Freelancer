import * as React from 'react';

import FreelancerNavigator from './Navigator/FreelancerNavigator';
import firebase from './util/firebase';

export default class App extends React.Component {
  componentWillMount() { firebase }

  render() {
    return <FreelancerNavigator />;
  }
}

//alert para o botao de log in quando o usuário não está cadastrado no banco
//The component for route 'Home' must be a React component.
