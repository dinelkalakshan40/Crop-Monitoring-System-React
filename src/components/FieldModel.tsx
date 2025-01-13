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
                                <input
                                    type="text"
                                    id="searchInput"
                                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
                                    placeholder="Search Field Code: FLD-00"
                                    aria-label="Search"
                                />
                                <button
                                    className="btn text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 px-4 py-2 rounded-full flex items-center hover:shadow-lg hover:shadow-gray-400 transition-all duration-300 hover:scale-110"
                                    id="searchButton">
                                    Search
                                    <i className="fas fa-search ml-2"></i>
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-4 gap-4 mb-4">

                            <div>
                                <label htmlFor="fieldCode"
                                       className="block text-gray-700 text-sm font-medium mb-1">Code</label>
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
                                    className="form-input w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500"
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