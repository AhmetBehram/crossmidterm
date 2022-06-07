import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MyApp from '../routes/userlistPage';
import UserDetails from '../routes/userdetailsPage'
import MainMenu from '../routes/mainMenu'
import PostList from '../routes/postlistPage'
import PostDetails from '../routes/postdetailsPage'
import AlbumPage from '../routes/albumPage';
import AlbumDetails from '../routes/albumdetailsPage';
import TodoPage from '../routes/todolistPage';

const screens = {
  
  
  MainMenuPage : {
    screen: MainMenu,
  },
  UserListPage : {
    screen: MyApp,
  },
  UserDetailsPage : {
    screen: UserDetails,
  },
  PostListPage : {
    screen: PostList,
  },
  PostDetailsPage : {
    screen: PostDetails,
  },
  AlbumPage : {
    screen: AlbumPage
  },
  AlbumDetailsPage: {
    screen: AlbumDetails
  },
  TodoPage: {
    screen: TodoPage
  }
  


}

const HomeStack = createStackNavigator(screens);
console.log("create");
export default createAppContainer(HomeStack);