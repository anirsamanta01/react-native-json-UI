import { View } from 'react-native';
import React from 'react';
import Header from './Header';
import json from '../json/header.json'

const Layout = ({ children }) => {
  return (
    <>
      <Header e={json} />
      <View>{children}</View>;
    </>
  );
};

export default Layout;
