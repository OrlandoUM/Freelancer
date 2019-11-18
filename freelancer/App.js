import * as React from 'react';

import FreelancerNavigator from './Navigator/FreelancerNavigator';
import firebase from './util/firebase';

export default class App extends React.Component {
  componentWillMount() { firebase }

  render() {
    return <FreelancerNavigator />;
  }
}
