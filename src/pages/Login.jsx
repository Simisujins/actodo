import { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

function Login(props) 
{
    const uname=props.uname
    const navigate = useNavigate()
    var userfound= false

    const [euname, seteuname] = useState()
    const [epword, setepword] = useState()
    const [ruser, setruser] = useState(true)
  
    function handleEuname(event) {
        seteuname(event.target.value)
    }

    function handleEpword(event) {
        setepword(event.target.value)
    }

    function handleCheck() {
        uname.forEach(function (item) {
            if (item.username === euname && item.password === epword) {
                console.log("sucessful")
                userfound = true
                navigate("/landing")
            }

            if(userfound===false)
            {
                console.log("failed")
                setruser(false)
            }
           
        })
    }

    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi.!</h1>
                {ruser ? <p>I help you manage your activites after you login:!</p> : <p className="text-red-500">Please signup before login:!</p>}

                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52  border-black p-1 bg-transparent border rounded-md"
                        placeholder="username" onChange={handleEuname}></input>

                </div>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52  border-black p-1 bg-transparent border rounded-md"
                        placeholder="password" onChange={handleEpword}></input>



                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={handleCheck}>Signup</button>

                    <p>Don't have an account? <Link to={"/signup"} className="underline">Signup</Link></p>

                </div>
            </div>
        </div>


    )
}

export default Login