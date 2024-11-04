import { Home } from './pages/home.tsx';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { LinkInfo } from './pages/link.tsx';
import { BrowserRouter } from 'react-router-dom';

export function App(): JSX.Element {
    return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:id" element={<LinkInfo />}/>
     </Routes>
     
    </BrowserRouter>
    );
}

export default App;