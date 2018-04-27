import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RNAlarm from 'react-native-alarm';
import { Button } from 'react-native';

export default class App extends React.Component {
  
  constructor(){
      super();
      this.state = {
          textValue: 'Change me'
      }
  }

  render() {
    
    return (
      
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>{this.state.textValue}</Text>
        
        <Button
          onPress={onPressLearnMore}
          title="Change Text"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>

    );
    function onPressLearnMore() {
      this.setState({
        textValue: "Neeew"
      })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
