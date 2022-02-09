import './App.css';
import {FC, HTMLAttributes, ReactChild/*, useState*/} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

export interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactChild;
}

const App: FC<Props> = () => {
 // const [isVisible/*, setIsVisible*/] = useState(false)
  return (
      <>
        <Header />
        <Footer/>
      </>
  );
};

export default App;
