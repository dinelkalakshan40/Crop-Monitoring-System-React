import "../style/PageTitle.css"
import {FaEraser, FaPlus, FaSave, FaSearch, FaTrash} from "react-icons/fa";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {saveField} from "../reducers/FieldSlice.ts";
import {AppDispatch} from "../store/store.ts";
import {toast} from "react-toastify";



export const FieldModel = () => {

    const dispatch=useDispatch<AppDispatch>();
    const[formData,setFormData]=useState({
        code:"",
        name: "",
        location: "",
        fieldSize: "",
        category: "",
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit =async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await dispatch(saveField(formData));
            toast.success("Field saved SuccessFully");
            setFormData({ code: "", name: "", location: "", fieldSize: "", category: "" });
        }catch {
            toast.error("Failed to save field! ❌")
        }
    };

    const handleClear = () => {
        setFormData({ code: "", name: "", location: "", fieldSize: "", category: "" });
    };

    return (
        <>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
                <div className="w-[1400px] mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">Field
                        Management</h1>

                    {/* Search Bar */}
                    <div className="mb-6 flex gap-4 items-end bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                        <div className="flex-grow flex flex-col">
                            <label className="text-gray-700 dark:text-white mb-1">Search Field:</label>
                            <input
                                type="text"
                                placeholder="Search Field..."
                                className="w-full p-3 border rounded-lg text-gray-700 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg flex items-center gap-2 transition duration-300">
                            <FaSearch/> Search
                        </button>
                    </div>


                    {/* Form */}
                    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-gray-700 dark:text-white mb-2">Field Code</label>
                                <input
                                    type="text" name="code" placeholder="Field Code"
                                    value={formData.code}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-white mb-2">Field Name</label>
                                <input
                                    type="text" name="name" placeholder="Field Name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-white mb-2">Location</label>
                                <input
                                    type="text" name="location" placeholder="Location"
                                    value={formData.location}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-white mb-2">Field Size</label>
                                <input
                                    type="text" name="fieldSize" placeholder="Field Size"
                                    value={formData.fieldSize}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 dark:text-white mb-2">Category</label>
                                <input
                                    type="text" name="category" placeholder="Category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    required
                                />
                            </div>
                        </form>
                        {/* Buttons */}
                        <div className="flex justify-end gap-4 mt-6">
                            <button onClick={handleSubmit}
                                className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition duration-300">
                                <FaPlus/> Add Field
                            </button>
                            <button
                                className="bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition duration-300">
                                <FaSave/> Update
                            </button>
                            <button onClick={handleClear}
                                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition duration-300">
                                <FaEraser/> Clear
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <h1 className="text-4xl pt-8 font-bold text-gray-800 dark:text-white mb-8 text-center">
                        Field Table
                    </h1>
                    <div className="mt-8 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md overflow-x-auto">
                        <table
                            className="w-full border-collapse border border-gray-300 dark:border-gray-700 rounded-lg overflow-hidden">
                            <thead>
                            <tr className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-white">
                                <th className="p-4 border">Code</th>
                                <th className="p-4 border">Name</th>
                                <th className="p-4 border">Location</th>
                                <th className="p-4 border">Field Size</th>
                                <th className="p-4 border">Category</th>
                                <th className="p-4 border">Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr className="border text-gray-700 dark:text-white">
                                <td className="p-4 border">Sample Code</td>
                                <td className="p-4 border">Sample Name</td>
                                <td className="p-4 border">Sample Location</td>
                                <td className="p-4 border">123</td>
                                <td className="p-4 border">Sample Category</td>
                                <td className="p-4 border-r-2 border-solid border-gray-300 flex gap-2 justify-center">
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300 flex flex-row-reverse items-center">
                                        <FaTrash/> Delete
                                    </button>
                                </td>
                            </tr>
                            <tr className="border text-gray-700 dark:text-white">
                                <td className="p-4 border">Sample Code</td>
                                <td className="p-4 border">Sample Name</td>
                                <td className="p-4 border">Sample Location</td>
                                <td className="p-4 border">123</td>
                                <td className="p-4 border">Sample Category</td>
                                <td className="p-4 border-r-2 border-solid border-gray-300 flex gap-2 justify-center">
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300 flex flex-row-reverse items-center">
                                        <FaTrash/> Delete
                                    </button>
                                </td>
                            </tr>
                            <tr className="border text-gray-700 dark:text-white">
                                <td className="p-4 border">Sample Code</td>
                                <td className="p-4 border">Sample Name</td>
                                <td className="p-4 border">Sample Location</td>
                                <td className="p-4 border">123</td>
                                <td className="p-4 border">Sample Category</td>
                                <td className="p-4 border-r-2 border-solid border-gray-300 flex gap-2 justify-center">
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition duration-300 flex flex-row-reverse items-center">
                                        <FaTrash/> Delete
                                    </button>
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