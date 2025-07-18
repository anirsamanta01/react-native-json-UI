import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Account = ({ e }) => {
  const renderElement = (element, index) => {
    const { name, type, style, value, elements, size, color } = element;

    switch (type) {
      case 'container':
        return (
          <View style={style} key={index}>
            {elements && elements.map(renderElement)}
          </View>
        );
      case 'text':
        return (
          <Text style={style} key={index}>
            {value}
          </Text>
        );
      case 'image':
        return (
          <TouchableOpacity key={index}>
            <Image
              source={require('../images/profilePhoto.jpg')}
              style={style}
            />
          </TouchableOpacity>
        );
      case 'icon':
        return (
          <TouchableOpacity style={style} key={index}>
            <Icon name={name} size={size} color={color} />
          </TouchableOpacity>
        );
      default:
        return null;
    }
  };
  return (
    <View style={e.style}>{e.elements && e.elements.map(renderElement)}</View>
  );
};

export default Account;
