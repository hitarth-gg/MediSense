
export default function LoginForm() {
    return (
      <>
        <section className="bg-transparent">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 animate-slidein opacity-0 ">
            
            <div className="w-full bg-transparent rounded-lg shadow-2xl  md:mt-0 sm:max-w-md xl:p-0 ">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Sign in to your account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#">
                <div>
                    <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-bold text-[#4876ee]"
                    >
                    Your email
                    </label>
                    <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-transparent border border-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="name@company.com"
                    required=""
                    />
                </div>
                <div>
                    <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-bold text-[#4876ee]"
                    >
                    Password
                    </label>
                    <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-transparent border border-gray-800 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    required=""
                    />
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-start">
                    <div className="flex items-center h-5">
                        <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-800 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                        required=""
                        />
                    </div>
                    <div className="ml-3 text-sm">
                        <label
                        htmlFor="remember"
                        className="text-gray-700"
                        >
                        Remember me
                        </label>
                    </div>
                    </div>
                    <a
                    href="#"
                    className="text-sm text-[#4876ee] hover:underline font-bold"
                    >
                    Forgot password?
                    </a>
                </div>
                <button
                    type="submit"
                    className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                    Sign in
                </button>
                <p className="text-sm font-light text-gray-700">
                    Don’t have an account yet?{" "}
                    <a
                    href="#"
                    className="text-[#4876ee] font-bold hover:underline "
                    >
                    Sign up
                    </a>
                </p>
                </form>
            </div>
            </div>
        </div>

        {/* ---------------------- gradient ---------------------- */}
        <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
        >
            <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            />
        </div>

        <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-50rem)]"
            aria-hidden="true"
        >
            <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
                clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            />
        </div>
      {/* ------------------------------------------------------ */}
        </section>
      </>
    );
  }
  