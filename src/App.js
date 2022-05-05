import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';
import ItemList from './components/ItemList';
import Item from './components/Item';
import ItemDetail from './components/ItemDetail';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
     <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/contador'element={<ItemCount></ItemCount>} ></Route>
          <Route></Route>
          <Route></Route>
        </Routes>
          <center>
              <ItemList>
                <Item/>
              </ItemList>
            <ItemCount/>
          </center>
      </BrowserRouter>
  );
}

