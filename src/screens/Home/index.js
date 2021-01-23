import React from 'react';
import {View,
   StyleSheet,
   Text,
   ActivityIndicator,
   Dimensions,
   Image,
   Share,
   TouchableWithoutFeedback,
   ScrollView,
   Linking} from 'react-native';

import {FlatList} from 'react-native-gesture-handler';


import { Input, Icon, Item } from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import { CommonActions, useNavigation } from '@react-navigation/native'
import ItemSection from "../../components/ItemSection";
import Items from "../../components/Items";

import { list } from '../../style/style';



const {width, height} = Dimensions.get('window');

let fetchnews = fetch('http://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=939fbb30b11d4e94919d07ff28a89453');


export default class Home extends React.Component {

  fetchnews = () => {
    fetch('http://newsapi.org/v2/top-headlines?country=tr&category=general&apiKey=9080932ad857437190189b17c49443a7')
    .then((res)=>res.json())
    .then((response=>{
      this.setState({
        news: response.articles,
        dataSource: response.articles
        })
      }))
  }
  componentDidMount() {
      this.fetchnews({
        dataSource: fetchnews,
      })
    }

    sharearticle = async article => {
    try {
      await Share.share({
        message : article
        })
    } catch (error) {
      console.log(error)
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      news: fetchnews,
      query: null,
      dataSource: [],
    };
  }


    searchNews = event => {
      var query = event.nativeEvent.text;
      this.setState({
        query: query,
      });
      if (query == '') {
        this.setState({
          dataSource: this.state.news,
        });
      } else {
        var fetchnews = this.state.news;
        query = query.toLowerCase();
        fetchnews = fetchnews.filter(l => l.title.toLowerCase().match(query));

        this.setState({
          dataSource: fetchnews,
        });
      }
    };

  render() {
    console.disableYellowBox = true;
    return(
      <ScrollView>
      <Item>
      <Icon name="search" />
      <Input placeholder="Haber Ara"
      value={this.state.query}
      onChange={this.searchNews.bind(this)}  />
      </Item>
      <FlatList
              value={this.state.query}
              data={this.state.dataSource}
              renderItem={({item})=>{
  return (
  <Items>

    <ItemSection>
        <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Profile', {
                      urlToImage: item.urlToImage,
                      title: item.title,
                      description: item.description,
                      content: item.content,
                    }
                    )}>

        <Image style={list.imageListStyle} source={{ uri: item.urlToImage != null ? item.urlToImage : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWBAMAAADOL2zRAAAAG1BMVEXMzMyWlpajo6PFxcW3t7ecnJyqqqq+vr6xsbGXmO98AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABPUlEQVRoge3Tv0/CQBjG8YcWaMcebymOENLI2MZoHMHEvVUKjq1K4lhM2Kvxx7/tUUiamDhc6GSez8INzbf3HleAiIiIiIiIiIiIiNozAGzvuJYTW2reXmso7bX8YN96HUR1a7RZ6+VVOgU+p4LuZGrSkqK0PWfwfl+3ht/hcpdvPkJ0g0fBYpYZtS7HttfPMatbAbZzJ1kjjnqVK1ihNzdpdX3b65S4qVsjXbG9EtuoEzliC/RbDFoIL7wY2NZrQayPzw1VpH/FUUqNjVrx0+9W8Rzrlt7yMMvMWq7fzHhoCTp6Rr0vw0uiH8+as69bov/AyNqf/Rms3Ky1aO7EYV93X2nlBIXg7WVSmrWs5q4eWrvVdYLbpR4/PTeZ8S9O82mdzMr7SVstV6mqrRaKh9ZSRERERERERET0n/wAZwMqI9kyPcoAAAAASUVORK5CYII=' }}/>
        </TouchableWithoutFeedback>
        <Text style={list.shareListStyle} onPress={()=>this.sharearticle(item.url)}>Paylaş</Text>
    </ItemSection>

    <ItemSection>
      <Text style={list.titleListStyle} onPress={() => this.props.navigation.navigate('Profile', {
                    urlToImage: item.urlToImage,
                    title: item.title,
                    description: item.description,
                    content: item.content,
                  }
                  )}> {item.title} </Text>


    </ItemSection>

  </Items>

  );

}}
/>
</ScrollView>
)

}

}
