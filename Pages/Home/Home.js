import React,{useState,useEffect} from 'react'
import {View,Text,ImageBackground,Image,Pressable,Dimensions} from 'react-native';
import { ScrollView } from 'native-base';
import MembershipDeals from './../../Components/MembershipDeals/MembershipDeals.js';
import GroceryDeals from './../../Components/GroceryDeals/GroceryDeals.js';
import CategoriesList from './../../Components/CategoriesList/CategoriesList.js';
import FirstImg from './../../asset/1.svg';
import SecondImg from './../../asset/3.svg';
import ThirdImg from './../../asset/4.svg';
import FourthImg from './../../asset/5.svg';
import HomeHeaderSectiom from './../../Components/HomeHeaderSectiom/HomeHeaderSectiom.js';

const Home = ({navigation}) => {
    
    
    

    return (
        
        <ScrollView 
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
            
            <HomeHeaderSectiom navigation={navigation}/>
            <CategoriesList/>
            <GroceryDeals title={'Offers'} navigation={navigation} />
            <GroceryDeals title={'Grocery Deals'} navigation={navigation} />
            <MembershipDeals/>
        </ScrollView>
  )
}


export default Home

