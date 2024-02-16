import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
function Signup(props) 
{
    const uname = props.uname
    const setuname = props.setuname

    const navigate = useNavigate()

    const [euname, seteuname] = useState()
    const [epword, setepword] = useState()

    function handleEuname(event) {
        seteuname(event.target.value)
    }

    function handleEpword(event) {
        setepword(event.target.value)
    }

    function addUsers()
    {
        setuname([...uname,{username:euname,password:epword}])
        navigate("/",{state:{user:euname}})
    }


    return (
        <div className="bg-black p-10">
            <div className="bg-white p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi.!</h1>
                <p>I help you manage your activites after you login:!</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52  border-black p-1 bg-transparent border rounded-md"
                        placeholder="username" onChange={handleEuname}></input>

                </div>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52  border-black p-1 bg-transparent border rounded-md"
                        placeholder="password" onChange={handleEpword}></input>

                </div>
                <div className="flex flex-col gap-2 my-2">
                    <input type="text" className="w-52  border-black p-1 bg-transparent border rounded-md"
                        placeholder="confirm password" ></input>

                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={addUsers}>Signup</button>

                    <p>already ahve a account <Link to={"/"} className="underline">Login</Link></p>

                </div>
            </div>
        </div>


    )

}

export default Signup