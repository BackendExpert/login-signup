
const SignUp = () => {
  return (
    <div className="bg-blue-800 w-full h-screen px-[25%]">
        <div className="container mx-auto px-16 py-12">
            <div className="bg-white py-12 px-10 rounded">
                <h1 className="text-2xl font-semibold text-center pb-4">Login</h1>
                <hr className="mb-4" />

                <form>
                    <div className="my-2">
                        <label htmlFor="fname">First Name : </label>
                        <input type="email" className="w-full h-9 border my-2 rounded pl-2" placeholder="User Email" />
                    </div>
                    <div className="my-2">
                        <label htmlFor="lname">Last Name : </label>
                        <input type="email" className="w-full h-9 border my-2 rounded pl-2" placeholder="User Email" />
                    </div>
                    <div className="my-2">
                        <label htmlFor="email">Email : </label>
                        <input type="email" className="w-full h-9 border my-2 rounded pl-2" placeholder="User Email" />
                    </div>
                    <div className="my-2">
                        <label htmlFor="password">Password : </label>
                        <input type="password" className="w-full h-9 border my-2 rounded pl-2" placeholder="User Password" />
                    </div>       
                    <div className="">
                        <button className="w-full h-9 bg-blue-600 text-white font-semibold rounded duration-500 hover:bg-blue-700">Login</button>
                    </div>             
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp