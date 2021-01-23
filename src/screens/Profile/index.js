import React from 'react';
import {View,
   StyleSheet,
   Text,
   ActivityIndicator,
   FlatList,
   Dimensions,
   Image,
   Share,
   TouchableWithoutFeedback,
   Button,
   ScrollView,
   Linking} from 'react-native';

import ItemSection from "../../components/ItemSection";
import Items from "../../components/Items";
import { detail } from '../../style/style';

const {width, height} = Dimensions.get('window');


const Profile = props => {
  const urlToImage = props.route.params.urlToImage;
  const title = props.route.params.title;
  const description = props.route.params.description;
  const content = props.route.params.content;
  const {navigation} = props;
  return (
    <ScrollView>
  <Items>
      <ItemSection>
              <Text style={detail.titleDetailText}>{title}</Text>
      </ItemSection>
      <ItemSection>
          <Image style={detail.imageDetailStyle}
                 source={{ uri: urlToImage }} />
      </ItemSection>
      <ItemSection>
        <Text style={detail.headerDetailText}>{description}</Text>
      </ItemSection>
      <ItemSection>
        <Text style={detail.contentDetailText}>{content}</Text>
      </ItemSection>

  </Items>
  </ScrollView>
  );
};


export default Profile;
