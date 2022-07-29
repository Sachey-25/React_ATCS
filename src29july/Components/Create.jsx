import React,{ useState }  from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Create = () => {
    //I wanted to initialize the name and email address -- Capture
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const history=useNavigate()

    const header={"Access-Control-Allow-Origin":"*"};

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Clicked and submitted")

        //If I submit a button it shoould to the backend server. 
        // We need to have the http method  -- post 
        axios.post("https://62e362583c89b95396c7eb89.mockapi.io/create/react-crud", {
            //information that we are invoking to the server --- name, email 
            name:name,
            email:email,
            header,
        })
        history('/read')
    }    
  return (
    <div className='form'>
        <form>
            <div className="mb-3">
                <label for="exampleInputEmail1" class="form-label">Name</label>
                <input type="name" class="form-control" id="exampleInputEmail1"
                        onChange={ (e) => setName(e.target.value)} />
                <div id="emailHelp" class="form-text"></div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleInputPassword1" 
                        onChange={ (e) => setEmail(e.target.value)}/>
            </div>
            <button type="submit" class="btn btn-primary" onClick={handleSubmit}>Submit</button>

        </form>

    </div>
  )}

export default Create