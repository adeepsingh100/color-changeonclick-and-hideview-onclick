import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

class App extends React.Component {
  state = {
    bgcolor: 'white',
    status:true,
  }
  ChangeColor =()=>{
    const ColorCode = 'rgb(' + (Math.floor(Math.random()* 256)) + ',' + (Math.floor(Math.random()* 256)) + ',' +  (Math.floor(Math.random()* 256)) + ')';
    this.setState({
      bgcolor: ColorCode
    })
  }
  ShowHideView = () =>{
    if(this.state.status == true)
    {
      this.setState({status:false})
    }
    else{
      this.setState({status:true})
    }
  }
  render() {
    const {bgcolor, status} = this.state
    return (
      <View style={styles.container}>

        {
          this.state.status &&
        <View style={{...styles.view1, backgroundColor: bgcolor}}>
        </View>
        }
        <View style={styles.view2}>
          <TouchableOpacity
            style={styles.btn}
            onPress={this.ChangeColor}>
            <Text style={styles.text}>Change Color</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn}
            onPress= {
              this.ShowHideView
            }>
            <Text style={styles.text}>Hide View</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view1: {
    backgroundColor: 'red',
    height: 500,
  },
  view2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'black',
    height: 60,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  text: {
    color: 'white',
  },
});
export default App;
