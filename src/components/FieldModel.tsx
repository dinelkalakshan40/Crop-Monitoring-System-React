import "../style/PageTitle.css"
export const FieldModel=()=>{
    return(

        <>
            <div className="min-h-screen bg-gradient-to-r from-teal-500 to-gray-800">
                <h1 className="page-title bg-blue-600 text-5xl font-extrabold text-center text-gray-900 mb-6">
                    Field Management
                </h1>
                <div className="min-h-screen bg-gradient-to-r from-teal-500 to-gray-800 p-6">

                    <div className="p-6 bg-gradient-to-r from-gray-800 to-gray-800 rounded-md shadow-md">

                        <div className="flex justify-end mb-4">
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

                        <div className="grid grid-cols-4 gap-4 mb-4">

                            <div>
                                <label htmlFor="fieldCode"
                                       className="block text-xl text-white font-medium mb-1">Code</label>
                                <input
                                    type="text"
                                    id="fieldCode"
                                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    placeholder="FLD-001"
                                />
                                <small id="fieldCodeFeedback" className="text-red-500 text-sm hidden">Invalid ID format!
                                    Use format FLD-00.</small>
                            </div>

                            <div>
                                <label htmlFor="fieldName"
                                       className="block text-gray-700 text-sm font-medium mb-1">Name</label>
                                <input
                                    type="text"
                                    id="fieldName"
                                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Ex: Nebula"
                                />
                            </div>

                            <div>
                                <label htmlFor="fieldLocation"
                                       className="block text-gray-700 text-sm font-medium mb-1">Location</label>
                                <input
                                    type="text"
                                    id="fieldLocation"
                                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:border-white focus:ring-0 focus:outline-none"
                                    placeholder="Ex: 38.8951° latitude, -77.0364° longitude"
                                />

                            </div>

                            <div>
                                <label htmlFor="fieldSize" className="block text-gray-700 text-sm font-medium mb-1">Field
                                    Size</label>
                                <input
                                    type="number"
                                    id="fieldSize"
                                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Extent of the field (Preferred Sq. m)"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mb-4">

                            <div>
                                <label htmlFor="monitorLogDropdown"
                                       className="block text-gray-700 text-sm font-medium mb-1">Monitor Log</label>
                                <select
                                    id="monitorLogDropdown"
                                    className="form-select w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="" disabled selected>Select a Monitor-Log</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="staffDropdown1"
                                       className="block text-gray-700 text-sm font-medium mb-1">Staff Member 1</label>
                                <select
                                    id="staffDropdown1"
                                    className="form-select w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="" disabled selected>Select Staff1</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="fieldImage1"
                                       className="block text-gray-700 text-sm font-medium mb-1">Details</label>
                                <input
                                    type="text"
                                    id="fieldImage1"
                                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Field details"
                                />
                            </div>

                            <div>
                                <label htmlFor="fieldImage2"
                                       className="block text-gray-700 text-sm font-medium mb-1">Category</label>
                                <input
                                    type="text"
                                    id="fieldImage2"
                                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Field Category"
                                />
                            </div>
                        </div>

                        <div className="flex space-x-3">
                            <button
                                type="button"
                                id="AddField"
                                className="bg-gradient-to-r from-green-400 to-green-600 border-2 border-transparent text-white px-4 py-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-green-500 hover:to-green-700 hover:border-green-700"
                            >
                                Add
                            </button>
                            <button
                                type="button"
                                id="deleteField"
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                            >
                                Delete
                            </button>
                            <button
                                type="button"
                                id="updateField"
                                className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600"
                            >
                                Update
                            </button>
                            <button
                                type="button"
                                id="clearField"
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                                Reset
                            </button>
                        </div>
                    </div>
                </div>


            </div>


        </>
    )
}