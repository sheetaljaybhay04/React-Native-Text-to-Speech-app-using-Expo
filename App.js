import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Speech } from 'expo';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Button
        title="Speak"
        onPress={this._speak}
      />
      </View>
    );
  }
  _speak = () => {
      const start = () => {
        console.log('start');
      };
      const complete = () => {
        console.log('complete');
      };

      Speech.speak('Hello Hello Hello', {
        language: 'en',

        onStart: start,
        onDone: complete,
        onStopped: complete,
        onError: complete
      });
    };

}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
