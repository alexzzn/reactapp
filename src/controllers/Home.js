import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  FlatList,
  Button,
  TouchableHighlight
} from 'react-native';




// 组件1
class Greeting extends Component {


  constructor(props) {
    super(props)
    this.state = { text: 'null', name: 'a' }
  }

  render() {

    return (

      <View style={this.props.style}>

        < TextInput style={{ height: 40, width: '100%', textAlign: 'left' }} placeholder='this is a placeholder' onChangeText={
          (v) => this.setState({ name: v })
        } />

        <Text style={{ marginTop: 10, marginBottom: 10, textAlign: 'left' }}>Hello {this.state.name}</Text>
      </View>
    )
  }
}



// 列表
class MyList extends Component {


   async getAsyncApi() {
    try {

      let res = await fetch('https://m.xhjlc.com/login/iosMJB.dos', {
        method: 'POST'
      })
      let json =  await res.json()
      let map = json.map
      console.warn("succ : " + map.copyRight)

    } catch (err) {
      console.log(err)
    }
  }

  sendNet() {

    this.getAsyncApi()

    // fecth
    // fetch('https://m.xhjlc.com/login/iosMJB.dos', {
    //   method: 'POST'
    // }).then(res => {

    //   res.json().then(m=>{
    //     let v = JSON.stringify(m)
    //     console.warn('success' + v)
    //   })
      
    // }).catch(err => {
    //   console.warn('error'+err)
    // })  
    // ajax
    // let request = new XMLHttpRequest();
    // request.onreadystatechange = (e) => {

    //   if (request.readyState !== 4) {
    //     return;
    //   } 
    //   if (request.status === 200) {
    //     console.warn('success', request.responseText);
    //   } else {
    //     console.warn('error');
    //   }
    // };

    // request.open('POST', 'https://m.xhjlc.com/login/iosMJB.dos');
    // request.send();
  }

  constructor(props) {
    super(props)
    this.sendNet()
  }
  // 渲染
  render() {

    let info = 'A'
    let pic = [{
      uri: 'https://img95.699pic.com/photo/50094/2701.jpg_wh300.jpg!/fh/300//quality/90'
    }, {
      uri: 'https://img95.699pic.com/photo/50094/2856.jpg_wh300.jpg!/fh/300//quality/90'
    }, {
      uri: 'https://img95.699pic.com/photo/50086/8616.jpg_wh300.jpg!/fh/300//quality/90'
    }, {
      uri: 'https://img95.699pic.com/photo/50086/8616.jpg_wh300.jpg!/fh/300//quality/90'
    }
    ]





    return (
      <FlatList style={this.props.style} contentContainerStyle={this.props.containerStyle}
        data={[{ key: info }, { key: 'B' }, { key: 'C' }, { key: 'D' }]}
        renderItem={
          ({ item, index }) => <MyItem title={item.key} imgUrl={pic[index]} />
        }
      />
    )
  }
}
// items
class MyItem extends Component {
  constructor(props) {
    super(props)
    props.imgUrl = ''
  }
  render() {

    return (
      <View style={{ flexDirection: 'column' }}>
        <Image source={this.props.imgUrl} style={{ width: 100, height: 80 }} />
        <Text style={{ textAlign: 'center' }}> {this.props.title} </Text>
      </View>
    )
  }
}


export default class HomeApp extends Component {


  static navigationOptions = {
    headerTitle:'Home',
  }

  // btnPress() {
  //   // navigator('Mine')
    
  // }
  constructor(props) {
    super(props)
    this.state = {
      showText: true
    }
    setInterval(() => {
      this.setState(previousState => {
        return {
          showText: !previousState.showText
        }
      })
    })

  }
  render() {

    function btnPress(v) {
      v.props.navigation.navigate('Mine',{
        title:"Mine",
        params:{}
      })
    }
    const { navigate } = this.props.navigation;

    let pic = {
      uri: 'https://gw.alicdn.com/tfs/TB1bxnDklfH8KJjy1XbXXbLdXXa-2224-1029.png'
    }

    return (
      <View style={styles.view}>

        <Text style={styles.text} onPress={()=>{btnPress(this)}}> HomeApp </Text>
        <Image source={pic} style={styles.image} />
        <Greeting style={styles.greeting} />

        <ScrollView style={styles.scroller} contentContainerStyle={styles.containerStyle}>
          <View style={{ width: 100, height: 100, backgroundColor: 'yellow' }} />
          <View style={{ width: 50, height: 50, backgroundColor: 'yellow' }} />
        </ScrollView>

        <MyList style={styles.mylist} containerStyle={styles.listContainerStyle} />
        {/* <TouchableHighlight style={styles.button} onPress={this.props.navigation.navigate('Mine')}>
          <Text style={styles.buttonText}>跳转</Text>
        </TouchableHighlight> */}
      </View>

    );
  }
}

const styles = StyleSheet.create({

  view: {
    paddingTop: 22,
    alignItems: 'flex-start',
    backgroundColor: '#f3f3a2',
    flexDirection: 'column'
  },
  image: {
    marginTop: 10,
    width: '100%',
    height: 180,
  },
  text: {
    width: '100%',
  },
  greeting: {
    backgroundColor: '#FFF8DC',
    alignItems: 'flex-start',
    width: '100%'
  },
  scroller: {
    width: '100%',
    height: 100,
    backgroundColor: '#a3f3b3',

  },
  mylist: {
    width: '100%',
    height: 180,
  },
  containerStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  listContainerStyle: {
    paddingTop: 10,
    alignItems: 'center'
  },
  button:{
    backgroundColor:'white',
    width:'100%',
    height:50,
    marginTop:15,
    paddingLeft:15,
    paddingRight: 15,
    alignItems:'center',
    justifyContent:'center'
  },
  buttonText:{
    backgroundColor: 'purple',
    marginTop:0,
    marginBottom:0,
    height:'100%',
    width:'100%',
    textAlign:'center'
  }

})