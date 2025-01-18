import "../style/PageTitle.css"
export const FieldModel=()=>{
    return(

        <>
            <div className="min-h-screen bg-gradient-to-r from-teal-500 to-gray-800">
                <h1 className="page-title bg-blue-600 pt-6 text-5xl font-extrabold text-center text-gray-900 mb-4">
                    Field Management
                </h1>
                <div className="min-h-screen bg-gradient-to-r from-teal-500 to-gray-800 p-6">

                    <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-800 rounded-md shadow-md">

                        <div className="flex justify-end mb-8 mt-5">
                            <div className="flex items-center space-x-2 max-w-md">
                                <div className="relative">
                                    <div
                                        className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                        <svg
                                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                            />
                                        </svg>
                                    </div>
                                    <input
                                        type="search"
                                        id="default-search"
                                        className="w-full focus:outline-none p-4 pl-12 pr-20 text-md text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 hover:border-blue-500 transition-all duration-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Search Code"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="absolute right-2.5 bottom-2.5 text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 transition-all duration-300 dark:bg-blue-600 dark:hover:from-blue-700 dark:hover:to-blue-900 dark:focus:ring-blue-800"
                                    >
                                        Search
                                    </button>
                                </div>

                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-10 mb-4">

                            <div>
                                <label htmlFor="fieldCode"
                                       className="block text-xl text-white font-medium mb-1">Code
                                </label>
                                <input type="text" placeholder="Field-Code"
                                       className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 focus:outline-none "
                                />

                                <small id="fieldCodeFeedback" className="text-red-500 text-sm hidden">Invalid ID format!
                                    Use format FLD-00.</small>
                            </div>

                            <div>
                                <label htmlFor="fieldName"
                                       className="block text-xl text-white font-medium mb-1">Name</label>
                                <input type="text" placeholder="Ex: Nebula"
                                       className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 focus:outline-none "
                                />
                            </div>

                            <div>
                                <label htmlFor="fieldLocation"
                                       className="block text-xl text-white font-medium mb-1">Location</label>
                                <input type="text" placeholder="Location Ex:Galle"
                                       className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 focus:outline-none "
                                />

                            </div>

                            <div>
                                <label htmlFor="fieldSize" className="block text-xl text-white font-medium mb-1">Field
                                    Size</label>
                                <input type="text" placeholder="Size(m)"
                                       className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 focus:outline-none "
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-8 mb-4 mt-14">

                            <div>
                                <label htmlFor="monitorLogDropdown"
                                       className="block text-xl text-white font-medium mb-1">Monitor Log</label>
                                <select id="LogId"
                                        className="bg-gray-100 border-none p-3.5 focus:ring-2 focus:ring-teal-500  text-gray-900 text-sm rounded-lg focus:outline-none: focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  ">
                                    <option selected>Choose Log ID</option>
                                    <option value="US">Log-001</option>
                                    <option value="CA">Log-002</option>
                                    <option value="FR">Log-003</option>
                                    <option value="DE">Log-004</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="staffDropdown1"
                                       className="block text-xl text-white font-medium mb-1">Staff Member 1</label>
                                <select id="LogId"
                                        className="bg-gray-100 border-none p-3.5 focus:ring-2 focus:ring-teal-500  text-gray-900 text-sm rounded-lg focus:outline-none: focus:border-blue-500 block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white  ">
                                    <option selected>Choose Staff ID</option>
                                    <option value="US">Staff-001</option>
                                    <option value="CA">Staff-002</option>
                                    <option value="FR">Log-003</option>
                                    <option value="DE">Log-004</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="fieldImage1"
                                       className="block text-xl text-white font-medium mb-1">Details</label>
                                <input type="text" placeholder="Enter Details"
                                       className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 focus:outline-none "
                                />
                            </div>

                            <div>
                                <label htmlFor="fieldImage2"
                                       className="block text-xl text-white font-medium mb-1">Category</label>
                                <input type="text" placeholder="See Category"
                                       className="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-teal-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 focus:outline-none "
                                />
                            </div>
                        </div>

                        <div className="flex space-x-3">
                            <button
                                type="button"
                                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl px-8 focus:outline-none focus:ring-4 focus:ring-green-200 focus:bg-gradient-to-br focus:from-yellow-400 focus:to-red-600 hover:scale-105 transform transition-all duration-300 ease-in-out font-medium rounded-xl text-sm py-2.5 text-center me-2 mb-2 shadow-lg hover:shadow-2xl"
                            >
                                Add
                            </button>
                            <button
                                type="button"
                                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl px-6 focus:outline-none focus:ring-4 focus:ring-green-200 focus:bg-gradient-to-br focus:from-yellow-400 focus:to-red-600 hover:scale-105 transform transition-all duration-300 ease-in-out font-medium rounded-xl text-sm py-2.5 text-center me-2 mb-2 shadow-lg hover:shadow-2xl"
                            >
                                Update
                            </button>
                            <button
                                type="button"
                                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl px-6 focus:outline-none focus:ring-4 focus:ring-green-200 focus:bg-gradient-to-br focus:from-yellow-400 focus:to-red-600 hover:scale-105 transform transition-all duration-300 ease-in-out font-medium rounded-xl text-sm py-2.5 text-center me-2 mb-2 shadow-lg hover:shadow-2xl"
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl px-6 focus:outline-none focus:ring-4 focus:ring-green-200 focus:bg-gradient-to-br focus:from-yellow-400 focus:to-red-600 hover:scale-105 transform transition-all duration-300 ease-in-out font-medium rounded-xl text-sm py-2.5 text-center me-2 mb-2 shadow-lg hover:shadow-2xl"
                            >
                                Clear
                            </button>
                        </div>
                    </div>
                    {/*<div className="relative overflow-x-auto mt-4 shadow-md sm:rounded-lg">*/}
                    {/*    <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">*/}
                    {/*        <thead*/}
                    {/*            className="text-sm  text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">*/}
                    {/*        <tr>*/}
                    {/*            <th scope="col" className="px-6 py-3">*/}
                    {/*                Product name*/}
                    {/*            </th>*/}
                    {/*            <th scope="col" className="px-6 py-3">*/}
                    {/*                Color*/}
                    {/*            </th>*/}
                    {/*            <th scope="col" className="px-6 py-3">*/}
                    {/*                Category*/}
                    {/*            </th>*/}
                    {/*            <th scope="col" className="px-6 py-3">*/}
                    {/*                Price*/}
                    {/*            </th>*/}
                    {/*            <th scope="col" className="px-6 py-3">*/}
                    {/*                <span className="sr-only">Edit</span>*/}
                    {/*            </th>*/}
                    {/*        </tr>*/}
                    {/*        </thead>*/}
                    {/*        <tbody>*/}
                    {/*        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">*/}
                    {/*            <th scope="row"*/}
                    {/*                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">*/}
                    {/*                Apple MacBook Pro 17"*/}
                    {/*            </th>*/}
                    {/*            <td className="px-6 py-4">*/}
                    {/*                Silver*/}
                    {/*            </td>*/}
                    {/*            <td className="px-6 py-4">*/}
                    {/*                Laptop*/}
                    {/*            </td>*/}
                    {/*            <td className="px-6 py-4">*/}
                    {/*                $2999*/}
                    {/*            </td>*/}
                    {/*            <td className="px-6 py-4 text-right">*/}
                    {/*                <a href="#"*/}
                    {/*                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>*/}
                    {/*            </td>*/}
                    {/*        </tr>*/}
                    {/*        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">*/}
                    {/*            <th scope="row"*/}
                    {/*                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">*/}
                    {/*                Microsoft Surface Pro*/}
                    {/*            </th>*/}
                    {/*            <td className="px-6 py-4">*/}
                    {/*                White*/}
                    {/*            </td>*/}
                    {/*            <td className="px-6 py-4">*/}
                    {/*                Laptop PC*/}
                    {/*            </td>*/}
                    {/*            <td className="px-6 py-4">*/}
                    {/*                $1999*/}
                    {/*            </td>*/}
                    {/*            <td className="px-6 py-4 text-right">*/}
                    {/*                <a href="#"*/}
                    {/*                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>*/}
                    {/*            </td>*/}
                    {/*        </tr>*/}
                    {/*        <tr className="bg-white dark:bg-gray-800">*/}
                    {/*            <th scope="row"*/}
                    {/*                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">*/}
                    {/*                Magic Mouse 2*/}
                    {/*            </th>*/}
                    {/*            <td className="px-6 py-4">*/}
                    {/*                Black*/}
                    {/*            </td>*/}
                    {/*            <td className="px-6 py-4">*/}
                    {/*                Accessories*/}
                    {/*            </td>*/}
                    {/*            <td className="px-6 py-4">*/}
                    {/*                $99*/}
                    {/*            </td>*/}
                    {/*            <td className="px-6 py-4 text-right">*/}
                    {/*                <a href="#"*/}
                    {/*                   className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>*/}
                    {/*            </td>*/}
                    {/*        </tr>*/}
                    {/*        </tbody>*/}
                    {/*    </table>*/}
                    {/*</div>*/}
                    <div className="relative overflow-x-auto mt-4 shadow-lg rounded-lg border border-teal-500">
                        <table className="w-full text-md text-left rtl:text-right text-gray-500 dark:text-gray-400">

                            <thead
                                className="text-sm uppercase text-white bg-gradient-to-r from-blue-500 to-purple-600 dark:from-gray-800 dark:to-gray-600">
                            <tr>
                                <th
                                    scope="col"
                                    className="px-6 py-6 font-bold text-lg tracking-wider border-b border-gray-300 dark:border-gray-600">
                                    Product Name
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-6 font-bold text-lg tracking-wider border-b border-gray-300 dark:border-gray-600">
                                    Color
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-6 font-bold text-lg tracking-wider border-b border-gray-300 dark:border-gray-600">
                                    Category
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-6 font-bold text-lg tracking-wider border-b border-gray-300 dark:border-gray-600">
                                    Price
                                </th>
                                <th
                                    scope="col"
                                    className="px-6 py-6 font-bold text-lg tracking-wider border-b border-gray-300 dark:border-gray-600">
                                    <span className="sr-only">Edit</span>
                                </th>
                            </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            <tr className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-200">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Apple MacBook Pro 17"
                                </th>
                                <td className="px-6 py-4">
                                    Silver
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $2999
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#"
                                       className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            <tr className="bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 transition duration-200">
                                <th scope="row"
                                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    Microsoft Surface Pro
                                </th>
                                <td className="px-6 py-4">
                                    White
                                </td>
                                <td className="px-6 py-4">
                                    Laptop
                                </td>
                                <td className="px-6 py-4">
                                    $1999
                                </td>
                                <td className="px-6 py-4 text-right">
                                    <a href="#"
                                       className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>


                </div>


            </div>


        </>
    )
}