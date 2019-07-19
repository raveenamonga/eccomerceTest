import React, { Component } from 'react';
import {NavigationActions} from 'react-navigation';
import { Text, View, StyleSheet, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { DrawerActions } from 'react-navigation';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';


export default class DrawerContent extends Component {

 navigateToScreen = ( route ) =>(
     () => {
     const navigateAction = NavigationActions.navigate({
         routeName: route
     });
     this.props.navigation.dispatch(navigateAction);
 })





  constructor(props) {
  super(props)
  this.state = {
        showMyActions: false,
        showMore: false
   };
}

    clickMyActions(){
      if(this.state.showMyActions == true){
        this.setState({showMyActions: false});
      }else{
        this.setState({showMyActions: true});
      }
    }

    clickMore(){
      if(this.state.showMore == true){
        this.setState({showMore: false});
      }else{
        this.setState({showMore: true});
      }
    }


   close(){
     this.props.navigation.dispatch(DrawerActions.closeDrawer());

   }

  render(){
    return(
       <View style={styles.container}>
   <Image resizeMode="cover" style = {{width: '100%',top:-wp('27.66%'), height: wp('60.33%'), position: 'absolute'}} source = {require('./assets/bg1.png')}/>

       <SafeAreaView style={{flex:1}}>
       <View style={styles.header}>
        <TouchableOpacity onPress={()=>this.close()} style={{width:wp('9%'), height:wp('5.33%')}}>
         <Image resizeMode="contain" style = {{marginLeft:15, width:wp('5.33%'), height:wp('5.33%')}} source = {require('./assets/closeWhite.png')}/>
         </TouchableOpacity>

            <Image resizeMode="contain" style = {{marginLeft:wp('2.6%'), width:wp('8%'), height:wp('8%')}} source = {require('./assets/profile.png')}/>

       <View style={{flex:1, backgroundColor:'transparent',marginLeft:wp('2.6%')}}>
        <Text style={styles.txtTitle}>Akhilesh Balavan </Text>
        <View style={{ backgroundColor:'transparent', alignItems: 'center', flexDirection: 'row'}}>
        <Image resizeMode="contain" style = {{ width:15, height:15}} source = {require('./assets/location.png')}/>

        <Text style={styles.txtTitleDesc}> New Delhi </Text>

        </View>


        </View>

        </View>


        <View style={styles.screenContainer}>

         <ScrollView scrollEnabled= {true} style= {{width: '100%', height: 'auto', marginTop:wp('5.33%')}}>

         <TouchableOpacity style={styles.tile} onPress={this.navigateToScreen('Home')} >

         <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/home.png')}/>
          <Text style={styles.tileTitle}>Home </Text>

         </TouchableOpacity>


         <View style={styles.tile}>
         <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/myprofile.png')}/>
          <Text style={styles.tileTitle}>My Profile </Text>
         </View>


                  <View style={styles.tile}>
                  <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/sidemenu/Appliance.png')}/>
                   <Text style={styles.tileTitle}>My Appliance </Text>
                  </View>



         <View style={styles.tile}>
         <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/sidemenu/AMC.png')}/>
          <Text style={styles.tileTitle}>My AMC </Text>
         </View>

         <View style={styles.tile}>
         <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/myorders.png')}/>
          <Text style={styles.tileTitle}>My Orders </Text>
         </View>

         <TouchableOpacity onPress={()=>this.clickMyActions()} style={styles.tile}>
         <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/myactions.png')}/>
          <Text style={styles.tileTitle}>My Actions </Text>
         </TouchableOpacity>


         {this.state.showMyActions ?
           <TouchableOpacity  style={[styles.tile,{backgroundColor: '#f5f5f5'}]}>
           <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/sidemenu/Service.png')}/>
            <Text style={styles.tileTitle}>Service Request </Text>
           </TouchableOpacity>
           : null}

           {this.state.showMyActions ?
             <TouchableOpacity  style={[styles.tile,{backgroundColor: '#f5f5f5'}]}>
             <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/sidemenu/Track.png')}/>
              <Text style={styles.tileTitle}>Track Service </Text>
             </TouchableOpacity>
             : null}

             {this.state.showMyActions ?
               <TouchableOpacity  style={[styles.tile,{backgroundColor: '#f5f5f5'}]} onPress={this.navigateToScreen('AMC')} >
               <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/sidemenu/Purchase.png')}/>
                <Text style={styles.tileTitle}>Purchase AMC </Text>
               </TouchableOpacity>
               : null}

               {this.state.showMyActions ?
                 <TouchableOpacity  style={[styles.tile,{backgroundColor: '#f5f5f5'}]}>
                 <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/sidemenu/Access.png')}/>
                  <Text style={styles.tileTitle}>Purchase Accessories </Text>
                 </TouchableOpacity>
                 : null}


         <TouchableOpacity onPress={()=>this.clickMore()} style={styles.tile}>
         <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/more.png')}/>
          <Text style={styles.tileTitle}>More </Text>
         </TouchableOpacity>

         {this.state.showMore ?
           <TouchableOpacity  style={[styles.tile,{backgroundColor: '#f5f5f5'}]}>
           <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/sidemenu/quick.png')}/>
            <Text style={styles.tileTitle}>Quick Links </Text>
           </TouchableOpacity>
           : null}


           {this.state.showMore ?
             <TouchableOpacity  style={[styles.tile,{backgroundColor: '#f5f5f5'}]}>
             <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/sidemenu/website.png')}/>
              <Text style={styles.tileTitle}>Website </Text>
             </TouchableOpacity>
             : null}


         {this.state.showMore ?
           <TouchableOpacity  style={[styles.tile,{backgroundColor: '#f5f5f5'}]}>
           <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/sidemenu/offers.png')}/>
            <Text style={styles.tileTitle}>Offers </Text>
           </TouchableOpacity>
           : null}


           {this.state.showMore ?
             <TouchableOpacity  style={[styles.tile,{backgroundColor: '#f5f5f5'}]}>
             <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/sidemenu/feedback.png')}/>
              <Text style={styles.tileTitle}>Feedback </Text>
             </TouchableOpacity>
             : null}

             {this.state.showMore ?
               <TouchableOpacity  style={[styles.tile,{backgroundColor: '#f5f5f5'}]}>
               <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/sidemenu/faq.png')}/>
                <Text style={styles.tileTitle}>FAQ </Text>
               </TouchableOpacity>
               : null}

               {this.state.showMore ?
                 <TouchableOpacity  style={[styles.tile,{backgroundColor: '#f5f5f5'}]}>
                 <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/sidemenu/help.png')}/>
                  <Text style={styles.tileTitle}>Help </Text>
                 </TouchableOpacity>
                 : null}


         <TouchableOpacity onPress={this.navigateToScreen('Logout')} style={styles.tile}>
         <Image resizeMode="contain" style = {{width:wp('5.86%'), height:wp('5.86%')}} source = {require('./assets/sidemenu/logout.png')}/>
          <Text style={styles.tileTitle}>Logout </Text>
         </TouchableOpacity>






         </ScrollView>
        </View>


       </SafeAreaView>

          </View>
    )
  }
}





const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    screenContainer: {
        flex: 1,
        backgroundColor: '#ffffff',
        marginTop: wp('10.66%')

    },
    screenStyle: {
        height: 30,
        marginTop: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    screenTextStyle:{
        fontSize: 20,
        marginLeft: 20
    },


    header: {
      width: '100%',
      height: wp('18.66%'),
      backgroundColor: 'transparent',

      flexDirection: 'row'
    },
    backIcon: {

     width:wp('5.86%'),
      height: wp('5.86%'),

      marginLeft: wp('4%'),
      backgroundColor: 'transparent',
      },
      txtTitle:{
        color: 'white',
        fontSize: wp('4.8%'),
        fontFamily: "Rubik-Regular"
      },
      txtTitleDesc:{
        color: 'white',
        fontSize: wp('4%'),
        fontFamily: "Rubik-Italic",
        marginLeft: 8

      },
      tile:{width: '100%', marginLeft:wp('4%'),  alignItems:'center', flexDirection:'row', height: wp('10.66%'),  backgroundColor:'transparent'},
      tileTitle:{textAlign: 'center',marginLeft:wp('2.6%'), fontFamily: "Rubik-Light",  marginTop: 5, color: 'black', fontSize: wp('4%')}

});
