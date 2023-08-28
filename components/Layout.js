//Importing fonts
import { Sora } from '@next/font/google';

//Importing components
import Nav from '../components/Nav';
import Header from '../components/Header';
import TopLeftImg from '../components/TopLeftImg';
import Home from '../pages/index';


// Font settings
const sora = ({
  Subsets: ['latin'], 
  variable: '--font-sora',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
});

// Layout component
const Layout = ({ children }) => {
  return (
    <div className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative`}>
      <TopLeftImg />
      <Nav />
      <Header />
     <Home/>
      {children}
    </div>
  );
}
export default Layout;
