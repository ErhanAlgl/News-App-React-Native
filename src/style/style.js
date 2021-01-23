import { StyleSheet, Dimensions } from 'react-native'

const {width, height} = Dimensions.get('window');

const detail = StyleSheet.create ({
  // Detail style (screens>Profile>index.js)
  titleDetailText:{
      fontSize: 22,
      textTransform: 'uppercase',
      textAlign: "center",
      fontWeight: "bold"
  },
  headerDetailText:{
    fontSize: 18,
      paddingTop: 15,
      color: "black",
      paddingBottom: 10,
      padding: 5
  },
  contentDetailText:{
    fontSize: 16,
    padding: 5
  },
  imageDetailStyle:{
      height:height*0.25,
      flex: 1,
      width: 0
  },
})

const list = StyleSheet.create ({
  // List style (screens>Home>index.js)
  imageListStyle:{
      width:width-15,
      height:height*0.25,
      backgroundColor:'#fff'
    },
    titleListStyle:{
      fontSize: 16
    },
    shareListStyle:{
      fontSize:16,
      color:'#fff',
      position:'absolute',
      top:2,
      right:0,
      padding:5,
      fontWeight: 'bold'
    }
})

export { detail, list }
