
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
                        <div className="lg:grid grid-cols-2 gap-3">
                            <div className="">
                                <button type="reset" className="w-full h-9 rounded bg-red-600 text-white font-semibold duration-500 hover:bg-red-700">
                                    Clear
                                </button>
                            </div>
                        </div>
                    </div>             
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp