import style from './Card.module.css';
import {Link} from 'react-router-dom';

const Card = ({id, name, status, species, gender, origin, image, onClose}) => {

   return (

      <div className='cards'>
           <button onClick={()=> {onClose(id)}}>X</button>
         <Link to= {`/detail/${id}`}>
         <div className='face front'>
            <img src={image} alt="imagen" />
         </div>

         <div className='face back'>
           <img src={image} alt='imagen' />
           <h2>Name: {name}</h2>
           <h2>Status: {status}</h2>
           <h2>Species: {species}</h2>
           <h2>Gender: {gender}</h2>
           <h2>Origin: {origin}</h2>
         </div>
         </Link>
      </div>

   ); 
};

export default Card;
 