import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import fileDownload from 'js-file-download';

function Admin() {

    // var loggedIn = false 

    const [formData, setFormData] = useState({
        user_name: '',
        password: ''
    })

    const navigate = useNavigate();

    const handleClick = () => {
        if (user_name === 'admin') {
            navigate("/addRecord")
        }
    }

    const { user_name, password } = formData;

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        // e.preventDefault();
        let response = await axios.post("http://localhost:4000/generatePDF", { username: formData.user_name }, {
            responseType: 'blob'
        });
        console.log(response.data);
        fileDownload(response.data, "certificate.pdf")
        // e.preventDefault();
    }

    return (
        <>
            <section className='heading'>
                <p>
                    Enter your credentials:
                </p>

            </section>

            <section className='form'>
                <div>

                    {/* //Enter name */}
                    <div className="form-group">
                        <input type="text" className="form-control" id="user_name"
                            name="user_name" value={user_name}
                            placeholder='Username: '
                            onChange={onChange}
                        />
                    </div>

                    {/* //Enter email */}
                    <div className="form-group">
                        <input type="text" className="form-control" id="password"
                            name="password" value={password}
                            placeholder='Password: '
                            onChange={onChange}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" className='btn btn-block' id="submitBtn" onClick={(e) => onSubmit()}>Submit</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Admin