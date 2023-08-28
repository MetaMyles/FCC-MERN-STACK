import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import Header from './components/Header';


const App = () => {
  return (<><Header /><Container className='my-2'><HomeScreen /></Container></>);
};

export default App;