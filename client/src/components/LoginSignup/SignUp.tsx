import axios from "axios"
import { useState } from "react"

const SignUp = () => {
    const [fname, SetFname] = useState("")
    const [lname, SetLname] = useState("")
    const [email, SetEmail] = useState("")
    const [password, SetPassword] = useState("")

    const headlSubmit = (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3001/Signup', {fname, lname, email, password})
        .then(res => {
            alert("User Added")
        }).catch(err => console.log(err))
    }

  return (
    <div className="bg-blue-800 w-full h-screen px-[25%]">
        <div className="container mx-auto px-16 py-12">
            <div className="bg-white py-12 px-10 rounded">
                <h1 className="text-2xl font-semibold text-center pb-4">Login</h1>
                <hr className="mb-4" />

                <form onSubmit={headlSubmit}>
                    <div className="my-2">
                        <label htmlFor="fname">First Name : </label>
                        <input type="email" className="w-full h-9 border my-2 rounded pl-2" placeholder="User First Name" 
                        onChange={(e) => SetFname(e.target.value)}/>
                    </div>
                    <div className="my-2">
                        <label htmlFor="lname">Last Name : </label>
                        <input type="email" className="w-full h-9 border my-2 rounded pl-2" placeholder="User Last Name" 
                        onChange={(e) => SetLname(e.target.value)}/>
                    </div>
                    <div className="my-2">
                        <label htmlFor="email">Email : </label>
                        <input type="email" className="w-full h-9 border my-2 rounded pl-2" placeholder="User Email" 
                        onChange={(e) => SetEmail(e.target.value)}/>
                    </div>
                    <div className="my-2">
                        <label htmlFor="password">Password : </label>
                        <input type="password" className="w-full h-9 border my-2 rounded pl-2" placeholder="User Password" 
                        onChange={(e) => SetPassword(e.target.value)}/>
                    </div>       
                    <div className="">
                        <button type="submit" className="w-full h-9 rounded bg-green-600 text-white font-semibold duration-500 hover:bg-green-700">
                            SignUp
                        </button>
                    </div>             
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp