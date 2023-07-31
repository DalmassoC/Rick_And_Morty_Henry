import { useState } from 'react';
import validation from './components/validation.js';

const Form = (login) => {
    const [userData, setUserData] = useState ({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState ({});

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name] : event.target.value
        })
        setErrors(validation({...userData, [event.target.name] : event.target.value }))
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return(
    <form>
        <label>Email: </label>
        <input onChange={handleChange} value= {userData.email} type="text" name="email" />
        { errors.e1 ? (<p>{errors.e1}</p>)
        : errors.e2 ? (<p>{errors.e2} </p>) 
        : (<p>{errors.e3}</p>)
        }

        <br />

        <label>Password: </label>
        <input onChange={handleChange} value={userData.password} type="text" name="password" />
        {errors.p1 ? (<p>{errors.p1}</p>) : (<p>{errors.p2}</p>)}

        <br />

        <button onClick= {handleSubmit}>SUBMIT</button>
    </form>
    
    )
};

export default Form;