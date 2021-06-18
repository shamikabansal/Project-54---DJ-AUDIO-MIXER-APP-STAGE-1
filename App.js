import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class AnyButton extends Component {
  displayAlert = () => {
    alert(this.props.onPress);
  };

  render() {
    return (
      <Button
        color={this.props.color}
        title={this.props.title}
        onPress={this.displayAlert}
      />
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ width:200, height:100, marginLeft:75, marginTop: 100 }}>
        <AnyButton color="red" title="SOUND1" onPress="Play Sound 1" />
        <Text> </Text>
        <AnyButton color="blue" title="SOUND2" onPress="Play Sound 2" />
       <Text> </Text>
        <AnyButton color="purple" title="SOUND3" onPress="Play Sound 3"/>
        <Text>     </Text>
        <AnyButton color="green" title="SOUND4" onPress="Play Sound 4" />
      </View>
    );
  }
}
