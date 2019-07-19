import React from 'react';
import { StyleSheet, Text,View, TouchableOpacity, Image, SafeAreaView, FlatList } from 'react-native';
import { DrawerActions } from 'react-navigation';
import axios from 'axios';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import Activity from '../../components/Activity/Activity';


type Props = {
  navigate: PropTypes.func.isRequired
};
class AllEwcPlans extends React.Component {

   state = {
     dataSource: [],
     dataSource2: [],
     selectedCategory: 2,
     responseData: '',
     gettingData: false,
     filter: false
   };


  componentDidMount()
  {

    var tempData= [
      {key: 1, image: require('../../../assets/ac.png'), name: 'All Applications'},
      {key: 2, image: require('../../../assets/beauty.png'), name: 'Refrigrators'},
      {key: 3, image: require('../../../assets/mobile.png'), name: 'Air conditioners'},
      {key: 4, image: require('../../../assets/entertainment.png'), name: 'Home Entertainment'}
    ];
    this.setState({dataSource: tempData});

    var tempData2= [
      {key: 1, image: require('../../../assets/image3.png'), dayLeft: 'AMC EXPIRED:: 22 DAYS LEFT ',name: 'REFRIGERATOR', type: 'Frost Free', Model: '12125', brand: 'ABC', Date: '06 June 2019'},
  {key: 1, image: require('../../../assets/image4.png'), dayLeft: 'AMC EXPIRED:: 22 DAYS LEFT ',name: 'REFRIGERATOR', type: 'Frost Free', Model: '12125', brand: 'ABC', Date: '06 June 2019'}
    ];


    this.setState({dataSource2: tempData2});


    //  this.setState({gettingData: true});

  }

    parseData(){
      if(this.state.responseData!= ''){
        var accessories = this.state.responseData.data.accessories;
        console.log('categories----',accessories);
        this.setState({dataSource: accessories});

            this.seleectCategory(accessories[0]);

      }
    }



   getData(){
     var that =this;
     // Make a request for a user with a given ID
axios.get('http://salescrm.neuronimbus.in/demo/api/getaccessories?customer_id=1')
  .then(function (response) {
     that.setState({responseData: response});
     that.setState({gettingData: false});

     that.parseData();
  })
  .catch(function (error) {
    that.setState({gettingData: false});

  });


   }
  seleectCategory(category){
    var product_data = category.product_data;
      this.setState({dataSource2: product_data});
  }


  openDrawerClick() {
     this.props.navigation.dispatch(DrawerActions.openDrawer());
  }
  goBack(){
    this.props.navigation.goBack();
  }

  openDetail(){
    this.props.navigation.navigate('Detail');
  }
  goToCart(){
      this.props.navigation.navigate('MyCart');
  }

        showAlert(message, duration) {
          clearTimeout(this.timer);
          this.timer = setTimeout(() => {
            alert(message);
          }, duration);
        }

        buyNow(){

        }

        addToCart(){
           this.props.navigation.navigate('AMCCart');
        }
        filterButtonClick(){
          if(this.state.filter == true){
            this.setState({filter : false});

          }else{
            this.setState({filter : true});
          }
        }


  render() {

    return (

           <View style={styles.container}>
             <View style={{width: '100%', backgroundColor:'transparent'}}>
                <Image resizeMode="cover" style = {{width: '100%', height:60, position:'absolute'}} source = {require('../../../assets/header.png')}/>
              <SafeAreaView style={{height:'100%', width:'100%', backgroundColor:'transparent'}}>

              <View style={styles.header}>
                  <Image resizeMode="cover" style = {{width: '100%', height:'100%', position:'absolute'}} source = {require('../../../assets/header.png')}/>

               <Text style={styles.txtTitle}> BUY AMC </Text>

               <TouchableOpacity onPress={()=>this.openDrawerClick()} style={styles.backTouchable}>
               <Image resizeMode="contain" style = {styles.backIcon} source = {require('../../../assets/menuWhite.png')}/>
               </TouchableOpacity>


               <TouchableOpacity onPress={()=>this.filterButtonClick()} style={styles.filterTouchable}>
               {this.state.filter == true ?
                  <Image resizeMode="contain" style = {styles.backIcon} source = {require('../../../assets/closeWhite.png')}/>
                  :
                   <Image resizeMode="contain" style = {styles.backIcon} source = {require('../../../assets/filter.png')}/>
                 }

               </TouchableOpacity>

              </View>

                         <View style={[styles.header, this.state.filter ? {height: wp('18.66%'), backgroundColor: 'transparent'}  : {height: 0, backgroundColor: 'transparent'}]}>
                             <Image resizeMode="cover" style = {{width: '100%', height:'100%', position:'absolute'}} source = {require('../../../assets/header.png')}/>
                         <FlatList
                           data={this.state.dataSource}
                           horizontal= {true}
                           renderItem={({item}) =>
                           <TouchableOpacity onPress={()=>this.seleectCategory(item)} style={{width: wp('21.33%'), alignItems:'center', justifyContent: 'center', height: 100,marginHorizontal:5, backgroundColor: 'transparent'}}>

                              <View style={{width: '100%', height:'100%', alignItems:'center', justifyContent: 'center'}}>
                           <Image resizeMode="contain" style = {{width: '80%', height: '40%'}} source = {require('../../../assets/homeApp.png')} />
                           <Text style={{textAlign: 'center', marginTop: 5, height: wp('16%'), color: 'white', fontSize: 12}}>{item.name}</Text>
                           </View>


                           </TouchableOpacity>
                          }
                         />

                         </View>


                  <View style={[{width: '100%', height: 30, overflow: 'hidden', flexDirection: 'row', backgroundColor: 'pink'}, this.state.filter ? {height: 30}  : {height: 0}    ]}>
                    <Image resizeMode="stretch" style = {{width: '100%', height:'100%', position:'absolute'}} source = {require('../../../assets/header.png')}/>

                    <View style={[styles.tile, {marginLeft: 10}]} >
                         <Image resizeMode="stretch" style = {{width: wp('4.58%'), height: wp('4.58%')}} source = {require('../../../assets/check.png')}/>
                           <Text style={styles.tileTitle}>All </Text>

                      </View>

                      <View style={styles.tile} >
                         <Image resizeMode="stretch" style = {{width: wp('4.58%'), height: wp('4.58%')}} source = {require('../../../assets/uncheck.png')}/>
                           <Text style={styles.tileTitle}>In Warranty </Text>

                      </View>

                      <View style={styles.tile} >
                         <Image resizeMode="stretch" style = {{width: wp('4.58%'), height: wp('4.58%')}} source = {require('../../../assets/uncheck.png')}/>
                           <Text style={styles.tileTitle}>Extended Warranty </Text>

                      </View>



                   </View>

                   <View style={[{width: '100%', overflow: 'hidden',  height: 30, flexDirection: 'row', backgroundColor: 'pink'}, this.state.filter ? {height: 30}  : {height: 0}    ]}>
                     <Image resizeMode="stretch" style = {{width: '100%', height:'100%', position:'absolute'}} source = {require('../../../assets/header.png')}/>

                       <View style={[styles.tile, {marginLeft: 10}]} >
                          <Image resizeMode="stretch" style = {{width: wp('4.58%'), height: wp('4.58%')}} source = {require('../../../assets/uncheck.png')}/>
                            <Text style={styles.tileTitle}>Out Of Warranty </Text>

                       </View>







                    </View>

                         <View style={{width: '100%', height: wp('10.66%'),alignItems: 'center',  marginTop: 0}}>
                            <Image resizeMode="cover" style = {{width: '100%', height:wp('10.66%')}} source = {require('../../../assets/curve.png')}/>
                            </View>




                          <View style={{flex:1,marginVertical: 10, backgroundColor: 'transparent'}}>

                          <FlatList
                          data={this.state.dataSource2}
                          style={styles.listDetail}
                          renderItem={({ item }) => (
                            <View  style={styles.loadDetail}>




                            <Text style={styles.txtAMCPlans}>DIRECT COOL</Text>

                            <View style={styles.loadDetailTile1}>

                            <View style={[styles.imageBGCheck, {width: '10%'}]}>
                            <Image resizeMode='contain'
                             style={{width: 20, height: 20 , marginTop: 15 }}
                                  source = {require('../../../assets/uncheckGray.png')}
                                />
                            </View>

                            <View style={[styles.productDetail, {backgroundColor: '#f0f0f0', borderRadius: 8}]}>
                             <View style={{width: '100%', height: 'auto', flexDirection: 'row',alignItems: 'center'}}>
                              <Text style={styles.txtWarranty}>1 Year Warranty</Text>
                              <Image resizeMode='contain'
                               style={{width: 20, height: 20, marginLeft: 10, marginTop: 15}}
                                    source = {require('../../../assets/info.png')}
                                  />
                              </View>
                              <Text style={styles.txtGST}>GST/Taxes applicable extra</Text>

                            <View style={{width: 'auto', marginTop:10, marginHorizontal: 15, height: 45, backgroundColor: 'transparent', flexDirection: 'row',alignItems: 'center'}}>

                            <View style={{width: 'auto', height: '100%', backgroundColor: 'white', borderRadius: 8, justifyContent: 'center', paddingRight: 10}}>
                            <Text style={styles.txtRate}>Rate</Text>
                            <Text style={styles.txtPrice}>Rs. 1650</Text>
                            </View>

                            <View style={{width: 'auto', height: '100%', backgroundColor: 'white', borderRadius: 8, justifyContent: 'center', paddingRight: 10}}>
                            <Text style={styles.txtRate}>Saving</Text>
                            <Text style={styles.txtPrice}>Rs. 250</Text>
                            </View>

                            <View style={{width: 'auto', height: '100%', backgroundColor: 'white', borderRadius: 8, justifyContent: 'center', paddingRight: 10}}>
                            <Text style={styles.txtRate}>Actual Price</Text>
                            <Text style={[styles.txtPrice, {color: '#7b6ceb'}]}>Rs. 1400</Text>
                            </View>



                             </View>




                            </View>
                            </View>




                            <View style={styles.loadDetailTile1}>

                            <View style={[styles.imageBGCheck, {width: '10%'}]}>
                            <Image resizeMode='contain'
                             style={{width: 20, height: 20 , marginTop: 15 }}
                                  source = {require('../../../assets/uncheckGray.png')}
                                />
                            </View>

                            <View style={[styles.productDetail, {backgroundColor: '#f0f0f0', borderRadius: 8}]}>
                             <View style={{width: '100%', height: 'auto', flexDirection: 'row',alignItems: 'center'}}>
                              <Text style={styles.txtWarranty}>2 Years Warranty</Text>
                              <Image resizeMode='contain'
                               style={{width: 20, height: 20, marginLeft: 10, marginTop: 15}}
                                    source = {require('../../../assets/info.png')}
                                  />
                              </View>
                              <Text style={styles.txtGST}>GST/Taxes applicable extra</Text>

                            <View style={{width: 'auto', marginTop:10, marginHorizontal: 15, height: 45, backgroundColor: 'transparent', flexDirection: 'row',alignItems: 'center'}}>

                            <View style={{width: 'auto', height: '100%', backgroundColor: 'white', borderRadius: 8, justifyContent: 'center', paddingRight: 10}}>
                            <Text style={styles.txtRate}>Rate</Text>
                            <Text style={styles.txtPrice}>Rs. 1650</Text>
                            </View>

                            <View style={{width: 'auto', height: '100%', backgroundColor: 'white', borderRadius: 8, justifyContent: 'center', paddingRight: 10}}>
                            <Text style={styles.txtRate}>Saving</Text>
                            <Text style={styles.txtPrice}>Rs. 250</Text>
                            </View>

                            <View style={{width: 'auto', height: '100%', backgroundColor: 'white', borderRadius: 8, justifyContent: 'center', paddingRight: 10}}>
                            <Text style={styles.txtRate}>Actual Price</Text>
                            <Text style={[styles.txtPrice, {color: '#7b6ceb'}]}>Rs. 1400</Text>
                            </View>



                             </View>




                            </View>
                            </View>

                            <View style={styles.loadDetailTile1}>

                            <View style={[styles.imageBGCheck, {width: '10%'}]}>
                            <Image resizeMode='contain'
                             style={{width: 20, height: 20 , marginTop: 15 }}
                                  source = {require('../../../assets/uncheckGray.png')}
                                />
                            </View>

                            <View style={[styles.productDetail, {backgroundColor: '#f0f0f0', borderRadius: 8}]}>
                             <View style={{width: '100%', height: 'auto', flexDirection: 'row',alignItems: 'center'}}>
                              <Text style={styles.txtWarranty}>3 Years Warranty</Text>
                              <Image resizeMode='contain'
                               style={{width: 20, height: 20, marginLeft: 10, marginTop: 15}}
                                    source = {require('../../../assets/info.png')}
                                  />
                              </View>
                              <Text style={styles.txtGST}>GST/Taxes applicable extra</Text>

                            <View style={{width: 'auto', marginTop:10, marginHorizontal: 15, height: 45, backgroundColor: 'transparent', flexDirection: 'row',alignItems: 'center'}}>

                            <View style={{width: 'auto', height: '100%', backgroundColor: 'white', borderRadius: 8, justifyContent: 'center', paddingRight: 10}}>
                            <Text style={styles.txtRate}>Rate</Text>
                            <Text style={styles.txtPrice}>Rs. 1650</Text>
                            </View>

                            <View style={{width: 'auto', height: '100%', backgroundColor: 'white', borderRadius: 8, justifyContent: 'center', paddingRight: 10}}>
                            <Text style={styles.txtRate}>Saving</Text>
                            <Text style={styles.txtPrice}>Rs. 250</Text>
                            </View>

                            <View style={{width: 'auto', height: '100%', backgroundColor: 'white', borderRadius: 8, justifyContent: 'center', paddingRight: 10}}>
                            <Text style={styles.txtRate}>Actual Price</Text>
                            <Text style={[styles.txtPrice, {color: '#7b6ceb'}]}>Rs. 1400</Text>
                            </View>



                             </View>




                            </View>
                            </View>





                                           <View style={{width: '100%', flexDirection: 'row', justifyContent: 'center', alignItems:'center', height: 'auto',  marginTop: wp('5.33%')}}>

                                           <TouchableOpacity onPress={()=> this.addToCart()} style={{width: '45%',  height: wp('13.33%'), justifyContent: 'center', alignItems: 'center', marginRight:5, overflow: 'hidden', backgroundColor: 'transparent', borderRadius: 10}}>
                                           <Image resizeMode="cover" style = {{width: '100%', height: '100%',  position: 'absolute'}} source = {require('../../../assets/button.png')}/>

                                           <Text style={{
                                             color: '#ffffff',
                                             fontSize: wp('4%'),

                                             fontFamily: "Rubik-Regular"
                                           }}> ADD TO CART </Text>

                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={()=> this.buyNow()} style={{width: '45%', borderColor: '#3b75c9', borderWidth:1, justifyContent: 'center', alignItems: 'center',  height: wp('13.33%'), marginLeft:5,  backgroundColor: 'transparent', borderRadius: 10}}>
                                            <Text style={{
                                              color: '#3b75c9',
                                              fontSize: wp('4%'),

                                              fontFamily: "Rubik-Regular"
                                            }}> BUY NOW </Text>

                                             </TouchableOpacity>


                                            </View>



                            </View>
                          )}
                          //Setting the number of column
                          numColumns={1}
                          keyExtractor={(item, index) => index}
                          />



                               </View>






             </SafeAreaView>




             </View>






















             {this.state.gettingData ? <Activity /> : null }
           </View>




    );
  }
}



 const styles = StyleSheet.create({
   container: {
     width: '100%',
     height: '100%',
     backgroundColor: '#edf4f6'
   },
   header: {
     width: '100%',
     height: wp('18.66%'),
     backgroundColor: 'transparent',
     overflow: 'hidden',
     alignItems:'center'
   },
   innerView: {
    flex: 1,
     backgroundColor: '#f2f2f2',
     position :'relative',
     alignItems: 'center'
   },



   backTouchable:{
     position: 'absolute',
     width:wp('8.8%'),
     height: wp('10.66%'),
     bottom: wp('2.6%'),
     left: 0
    },
    backIcon: {

     width:wp('5.86%'),
      height: wp('5.86%'),
      marginTop: wp('4%'),
      backgroundColor: 'transparent',
      },
      backTouchable: {

        position: 'absolute',
       width:wp('5.86%'),
        height: '100%',
        top: 0,
        left: wp('4%'),
        backgroundColor: 'transparent',
        },
        filterTouchable: {

          position: 'absolute',
         width:wp('5.86%'),
          height: '100%',
          top: 0,
          right: wp('4%'),
          backgroundColor: 'transparent',
          },
      txtTitle:{
        color: 'white',
        fontSize: wp('5.33%'),
        marginTop: wp('2.6%'),
        fontFamily: "Rubik-Bold"
      },
      txtTitleDesc:{
        color: 'white',
        fontSize: wp('4%'),
        fontFamily: "Rubik-Regular"
      },
      tileTitle:{
        color: 'white',
        fontSize: wp('4%'),
        marginLeft: 10,
        marginTop:2,
        fontFamily: "Rubik-Regular"
      },
      tile:{width: 'auto', paddingRight: 15, marginLeft: 3, flexDirection: 'row', alignItems:'center',  height: 'auto', marginTop: 10, flexDirection: 'row', backgroundColor: 'transparent'},

      listDetail:{
        width: '100%',
        height: 'auto',
        marginBottom: 0,
        backgroundColor: 'transparent',
        marginTop:10

      },
      loadDetail:{
        width:'auto',
        height:'auto',
        alignItems: 'center',
        paddingBottom: 10,
        backgroundColor:'white',
        flexDirection: 'column',
        margin: 4 ,
        marginHorizontal:wp('2.6%'),
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 0
         },
         shadowRadius: 1,
         shadowOpacity: 1.0 },

         loadDetailTile1:{width:'95%',marginTop: 10, flexDirection: 'row', alignItems: 'center', backgroundColor:'transparent',height: 130},

       loadDetailTile2:{width:'95%',marginTop: 10, borderRadius:7, overflow: 'hidden', flexDirection: 'row', alignItems: 'center', backgroundColor:'transparent',height: 90},

         imageBG:{width:'20%', borderRadius:7, justifyContent: 'center', alignItems: 'center', backgroundColor:'transparent',height: '90%', marginLeft: 10},
          imageBGCheck:{width:'20%', borderRadius:7,  alignItems: 'center', backgroundColor:'transparent',height: '90%', marginLeft: 10},

         productDetail: {flex:1,   backgroundColor:'transparent',height: '90%', marginLeft: 10},

         txtDaysLeft:{marginTop: 2,marginLeft:wp('2.6%'),height: 'auto', marginRight:wp('2.6%'), width: '100%', fontFamily: "Rubik-Medium", color: 'black', fontSize: wp('4%')},

         txtWarranty  :{marginTop: 10,marginLeft:wp('4%'),height: 'auto', width: 'auto', fontFamily: "Rubik-Medium", color: '#3a687f', fontSize: wp('4.8%')},

         txtPrice  :{marginTop: 0, marginLeft:wp('2.6%'),height: 'auto', width: 'auto', fontFamily: "Rubik-Medium", color: '#716da0', fontSize: wp('4%')},

          txtGST  :{marginTop: 0,marginLeft:wp('4%'),height: 'auto', width: 'auto', fontFamily: "Rubik-Regular", color: '#fa8ab2', fontSize: wp('4.8%')},

        txtRate  :{marginTop: 0,marginLeft:wp('2.6%'),height: 'auto', width: 'auto', fontFamily: "Rubik-Regular", color: '#000000', fontSize: wp('4%')},

         txtAMCPlans:{marginTop: 10,marginLeft:wp('10%'),height: 'auto', marginRight:wp('2.6%'), width: '100%', fontFamily: "Rubik-Medium", color: '#c1c7c7', fontSize: wp('8%')},

          txtOFF:{marginTop: 2,marginLeft:wp('2.6%'),height: 'auto', marginRight:wp('2.6%'), width: '100%', fontFamily: "Rubik-Bold", color: 'white', fontSize: wp('8%')}



 })


export default AllEwcPlans;
