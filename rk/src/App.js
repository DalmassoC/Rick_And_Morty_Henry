import './App.css';
import Cards from './components/Cards/Cards.jsx';
import style from './App.module.css';
import NavBar from './components/NavBar/NavBar.jsx';
import { useEffect, useState } from 'react'; 
import axios from 'axios';
import {Routes, Route, useLocation, useNavigate} from 'react-router-dom';
import About from './components/About/About';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
const EMAIL = 'candedalmasso@hotmail.com';
const PASSWORD = 'abcd1234'



function App() {
   const [characters, setCharacters] = useState ([])
   const {pathname} = useLocation ();

   const navigate = useNavigate();
   const [access, setAccess] = useState(false);
   
   const login = (userData) => {
      if(userData.password === PASSWORD && userData.email === EMAIL){
         setAccess(true)
         navigate('/home');
      }
   }

   useEffect (() => {
      !access && navigate('/');
   },[access]);


   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({data})=>{
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID');
         }
      });
   };
   
   const onClose = (id) => {
      setCharacters (
         characters.filter(char =>{
         return char.id !== Number(id)
         })
      );
   };
   
   return (
                                                                                                                                                                                                 
      <div className={style.App}>
         
         {pathname !== '/' && <NavBar onSearch= {onSearch}/>}

            <Routes>
               <Route path= '/' element={<Form login= {login}/>} />
               <Route path= '/home' component={<Cards characters={characters} onClose = {onClose} />}/>
               <Route path= '/about' element= {<About/>}/>
               <Route path= '/detail/:id' element= {<Detail/>}/>
            </Routes>

      </div>
   );
}

export default App;
