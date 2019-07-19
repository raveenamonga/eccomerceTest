import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  DrawerNavigator,
  DrawerItems
}
from 'react-navigation';
import { DrawerActions } from 'react-navigation';
import DrawerContent from './DrawerContent'
import ScalingDrawer from 'react-native-scaling-drawer';
import {
  createNavigator,
  createNavigationContainer,
  StackRouter,
  addNavigationHelpers
} from 'react-navigation';

let defaultScalingDrawerConfig = {
  scalingFactor: 0.6,
  minimizeFactor: 0.6,
  swipeOffset: 20
};


import Home from './src/containers/Home';
import Detail from './src/containers/Detail';
import MyCart from './src/containers/MyCart';
import ReviewOrder from './src/containers/ReviewOrder';
import AmcPlans from './src/containers/AmcPlans';
import AllEwcPlans from './src/containers/AllEwcPlans';
import AMCCart from './src/containers/AMCCart';
import Coupons from './src/containers/Coupons';
import Login from './src/containers/Login';
import UserLogin from './src/containers/UserLogin';
import VerifyOTP from './src/containers/VerifyOTP';
import ReferalCode from './src/containers/ReferalCode';
import Privacy from './src/containers/Privacy';



import React, { Component } from 'react';





class CustomDrawerView extends Component {
  constructor(props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    /** Active Drawer Swipe **/
    if (nextProps.navigation.state.index === 0)
      this._drawer.blockSwipeAbleDrawer(false);

    if (
      nextProps.navigation.state.index === 0 &&
      this.props.navigation.state.index === 0
    ) {
      this._drawer.blockSwipeAbleDrawer(false);
      this._drawer.close();
    }

    /** Block Drawer Swipe **/
    if (nextProps.navigation.state.index > 0) {
      this._drawer.blockSwipeAbleDrawer(true);
    }
  }

  setDynamicDrawerValue = (type, value) => {
    defaultScalingDrawerConfig[type] = value;
    /** forceUpdate show drawer dynamic scaling example **/
    this.forceUpdate();
  };

  render() {
    const { routes, index } = this.props.navigation.state;
    const ActiveScreen = this.props.router.getComponentForState(
      this.props.navigation.state
    );

    return (
      <ScalingDrawer
        ref={ref => (this._drawer = ref)}
        content={<LeftMenu navigation={this.props.navigation} />}
        {...defaultScalingDrawerConfig}
        onClose={() => console.log('close')}
        onOpen={() => console.log('open')}
      >
        <ActiveScreen
          navigation={addNavigationHelpers({
            ...this.props.navigation,
            state: routes[index],
            openDrawer: () => this._drawer.open()
          })}
          dynamicDrawerValue={(type, val) =>
            this.setDynamicDrawerValue(type, val)
          }
        />
      </ScalingDrawer>
    );
  }
}





const HomeNavigation=createStackNavigator({

  HomeScreen: {
    screen: Home,
  },
  Detail: {
    screen: Detail,
  },
  MyCart: {
    screen: MyCart,
  },
  ReviewOrder: {
    screen: ReviewOrder,
  },

},{
  headerMode:'none'
}
);




const AMCNavigation=createStackNavigator({

  AMCPlans: {
    screen: AmcPlans,
  },
  AllEwcPlans: {
    screen: AllEwcPlans,
  },
  AMCCart: {
    screen: AMCCart,
  },


},{
  headerMode:'none'
}
);




const DrawerNav=createDrawerNavigator({


  Home: {
  screen: HomeNavigation,

   },
   AMC: {
   screen: AMCNavigation,

    },
    Logout: {
    screen: UserLogin,

     },


},{
  contentComponent: DrawerContent,
  contentOptions: {
      tintColor: '#a6a5ab'
}
},

);


const MainNavigation=createStackNavigator({
  UserLogin: {
    screen: UserLogin,
  },
  Login: {
    screen: Login,
  },
  VerifyOTP: {
    screen: VerifyOTP,
  },
  ReferalCode: {
    screen: ReferalCode,
  },
  Privacy: {
    screen: Privacy,
  },

  SideMenu: {
    screen: DrawerNav,
  },

},{
  headerMode:'none'
}
);




const AppNavigator = StackRouter(
  {
    Home: { screen: Home },
    Profile: { screen: Home },
    Wins: { screen: Home },
    Detail: {
      screen: Home,
      path: 'detail'
    }
  },
  {
    initialRouteName: 'Home'
  }
);


//
// const CustomDrawer = createAppContainer(
//   createStackNavigator(HomeNavigation)(CustomDrawerView)
// );
//
// export default CustomDrawer;


export default createAppContainer(MainNavigation);
