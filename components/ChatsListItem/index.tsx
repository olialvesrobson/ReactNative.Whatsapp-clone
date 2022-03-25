import React from 'react'
import { View, Text, Image } from 'react-native'
import { ChatRoom } from '../../types';
import styles from './styles';


export type ChatListItemProps = {
    chatRoom: ChatRoom;
}

const ChatListItem = (props: ChatListItemProps) => {
    const { chatRoom } = props;
    const user = chatRoom.users[1];

    return (
        <View>

            <Image source={{uri: user.imageUri}} style={styles.avatar} />

            <Text>{user.name}</Text>
            <Text>{chatRoom.lastMessage.content}</Text>
            <Text>{chatRoom.lastMessage.createdAt}</Text>
        </View>
    )
}

export default ChatListItem;