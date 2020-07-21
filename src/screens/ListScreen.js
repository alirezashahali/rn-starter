import React from 'react'
// import {View, StyleSheet, Text} from 'react_native'
import { Text, StyleSheet } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'


const ListScreen = () => {
    const Friends = [
        {name: 'Friend #1'},
        {name: 'Friend #2'},
        {name: 'Friend #3'},
        {name: 'Friend #4'},
        {name: 'Friend #5'},
        {name: 'Friend #6'},
        {name: 'Friend #7'},
        {name: 'Friend #8'},
        {name: 'Friend #9'}
    ]
    return (
        <FlatList data={Friends} renderItem={({item})=>{
            return <Text>{item.name}</Text>
        }} />)
}

const stylesheet = StyleSheet.create({
    
})

export default ListScreen