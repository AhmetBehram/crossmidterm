import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MyApp from '../routes/userlistPage';
import UserDetails from '../routes/userdetailsPage'


const screens = {
    
    UserListPage : {
    screen: MyApp,
  },
  UserDetailsPage : {
    screen: UserDetails,
  },


}

const HomeStack = createStackNavigator(screens);
console.log("create");
export default createAppContainer(HomeStack);