import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
export default function HistoryScreen({otherGradientProps}) {
  return (
    <ScrollView>
      <Text>HistoryScreen</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
