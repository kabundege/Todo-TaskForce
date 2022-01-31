import { ActivityIndicator, Dimensions, FlatList, Image, ListRenderItemInfo, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../constants/GlobalStyles';
import { headerIconSize,borderRadius } from '../constants';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import Colors from '../constants/Colors';
import { StatusBar } from 'expo-status-bar';
import AddButton from '../components/AddButton';
import { ScreenProps, TaskItem } from '../types';
import HeaderCard from '../components/HeaderCard';
import Button from '../components/Button';

const initalTasks = [
  {
    label:'Total Tasks',
    count:0
  },{
    label:'Active Tasks',
    count:0
  },{
    label:'Tasks Done',
    count:0
  },{
    label:'Active High Priority',
    count:0
  },
]


const HomeScreen:React.FC<ScreenProps> = ({ navigation }) => {
  const [ Tasks,setTasks ] = useState([])
  const [ taskStatus,setStatus ] = useState<TaskItem[]>(initalTasks)

  const Header = (
    <View style={styles.header}>
      <Image source={require('../assets/images/IW_logo.png')} style={globalStyles.logo} />
      <View style={globalStyles.flexer}>
        <AntDesign 
          name="search1" 
          color={Colors.invertedText} 
          size={headerIconSize} />
        <View style={globalStyles.spacer} />
        <Ionicons 
          name="filter" 
          color={Colors.invertedText} 
          size={headerIconSize} 
          />
      </View>
    </View>
  )

  const EmptyTasksView = (
    <View style={styles.emptyWrapper}>
      <Text style={styles.emptyHeader}>nothing here</Text>
      <Text style={styles.emptyNote}>Just like your crush's replies</Text>
      <Button
        text="START WITH A NEW TASK"
        styles={{ width:"auto",paddingVertical:10,paddingHorizontal:10 }}
        TextStyles={{ fontSize:13,fontFamily:"Bold" }}
        loading={false}
        onPress={()=>{}}
         />
    </View>
  )

  const Body = (
    <ScrollView style={styles.body}>
      <Text style={styles.mainText}>Welcome</Text>
      <FlatList 
        numColumns={2}
        data={taskStatus}
        keyExtractor={(_,index)=>index.toString()}
        renderItem={({ item }: ListRenderItemInfo<TaskItem>) => <HeaderCard item={item} />} />
      {
        Tasks ?
          Tasks[0] ?
            <></> : 
            EmptyTasksView :
          <View style={styles.loader}>
            <ActivityIndicator size={30} color={Colors.primary} />
          </View>
      }
    </ScrollView>
  )

  return (
    <SafeAreaView style={styles.screen}>
       {/* The Dark Overaly Block  */}
      <View style={styles.overlay} />
      {/* Sets the Status to White */}
      <StatusBar style="light" />
      { Header }
      { Body }
      <AddButton navigation={navigation} />
    </SafeAreaView>
  );
};

export default HomeScreen;

const { width } = Dimensions.get("screen")

const styles = StyleSheet.create({
  emptyNote:{
    fontFamily:"Regular",
    color:Colors.mutedText,
    fontSize:17,
    marginTop:'2.5%',
    marginBottom:'5%',
  },
  emptyHeader:{
    fontFamily:"Bold",
    color:Colors.mainText,
    textTransform:"uppercase",
    fontSize:20
  },
  emptyWrapper:{
    alignItems:'center',
    marginVertical:'30%'
  },
  loader:{
    position:'absolute',
    top:'150%',
    left:"45%",
  },
  mainText:{
    fontFamily:"Bold",
    fontSize:30,
    marginLeft:'5%',
    marginTop:'5%'
  },
  body:{
    flex:1,
    backgroundColor:Colors.baseBg,
    borderRadius
  },
  overlay:{
    position:"absolute",
    width,
    height:"40%",
    left:'-7.5%',
    top:0,
    backgroundColor:Colors.dark,
  },
  header:{
    marginVertical:'10%',
    ...globalStyles.flexer
  },
  screen:{
    flex:1,
    marginHorizontal:"6.5%",
  }
});
