import React, { useState,useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router';
import { NavBar } from './navBar';


function getFormValues() {
    const storedValues = localStorage.getItem('formData');
    if (!storedValues) return {
        email: "",
        time: ""
    }
    return JSON.parse(storedValues);
}

const Form = () => {
    const [form, setForm] = useState(getFormValues)
    const navigate = useNavigate();

    
    useEffect(() => {
        localStorage.setItem("formData",JSON.stringify(form));    
    }, [form])

    function handleSubmit(e) {
        
        e.preventDefault();
        alert("Submitted successfully");
        navigate('/');
    }

    function handleChange(e){
        setForm((prev) => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }

    
    const getLocalStorage = () => {
        let data = localStorage.getItem("moviesData");
        if (data === []) {
            return [];
        }
        else {
            return JSON.parse(data);
        }
    }

    const value = getLocalStorage();

    
    function redirect() {
        navigate('/');
    }

    return (
      <>
      <NavBar />
          <div className="container mt-4">

              <div className="row">
                  <h2 className='offset-3 my-4'>BOOKING THE MOVIE</h2>
                  <div className="col-6 offset-3">
                    <div className="mb-3">
                        <form onSubmit={handleSubmit}>        
                        
                        <label htmlFor="exampleFormControlInput1" className="form-label">The Movie You Have Selected</label>
                        <input type='text' value={value.name} className="form-control" id="exampleFormControlInput1" />
                        
                        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                        <input type="email" className="form-control" onChange={handleChange} id="exampleFormControlInput1" name="email" placeholder="name@example.com"/>
                        
                        <label htmlFor="exampleFormControlInput1" className="form-label">Enter the slot you want to book</label>
                        <input type="time" className="form-control" onChange={handleChange} id="exampleFormControlInput1" name='time' placeholder=""/>
                                
                        <button className='btn btn-primary mt-3 ' onClick={redirect}>Submit</button>
                    </form>
                    </div>
                                      
                  </div>
              </div>
          </div>
        
      </>
  )
}

export default Form