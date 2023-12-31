const Card = ({id, name, status, species, gender, origin, image, onClose}) => {

   return (
      <div>
         <img src={image} alt='imagen' /> 
         <h2>Name: {name}</h2>
         <h2>Status: {status}</h2>
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>Origin: {origin}</h2>
         <button onClick={()=> {onClose(id)}}>X</button>
      </div>
   );
};

export default Card;
 