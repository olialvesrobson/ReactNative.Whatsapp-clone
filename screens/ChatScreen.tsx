import * as React from 'react';
import { StyleSheet } from 'react-native';
import { db } from '../firebase/config';

import {  View } from '../components/Themed';
import ChatListItem from '../components/ChatsListItem';
import chatRooms from '../data/ChatRoom';


export default function ChatScreen() {

  

  return (
    <View style={styles.container}>
      <ChatListItem chatRoom={chatRooms[0]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
