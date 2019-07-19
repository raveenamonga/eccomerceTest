
import React from "react";
import {
  Container,
  Content,
  Text,
  View,
  Image,
  ActivityIndicator
} from "react-native";

const Activity = props => (

  <View style={{position: 'absolute', top:0, left:0, right: 0,bottom:0, opacity: 0.5, justifyContent: 'center', alignItems: 'center', backgroundColor: 'black'}}>
        <ActivityIndicator size="large" color="#ffffff" />

      </View>




);

export default Activity;
