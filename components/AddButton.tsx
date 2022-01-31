import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { headerIconSize } from '../constants';
import Colors from '../constants/Colors';
import { globalStyles } from '../constants/GlobalStyles';

const AddButton = ({ navigation }) => {
    const onPress = () => {}
    return (
        <TouchableOpacity style={styles.btn} onPress={onPress} >
            <Ionicons name='add' color={Colors.invertedText} size={headerIconSize} />
        </TouchableOpacity>
    );
};

export default AddButton;

const styles = StyleSheet.create({
    btn:{
        position:"absolute",
        bottom:"5%",
        right:"2.5%",
        backgroundColor:Colors.dark,
        padding:20,
        borderRadius:50,
        elevation:5,
        ...globalStyles.shadow,
        borderWidth:2,
        borderColor:Colors.mainText
    }
});
