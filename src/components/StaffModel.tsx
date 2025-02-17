import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../store/store.ts";
import {useState} from "react";
import {saveStaff} from "../reducers/StaffSlice.ts";
import {FaEraser, FaPlus, FaSave, FaSearch, FaTrash} from "react-icons/fa";
import Staff from "../models/Staff.ts";

export const StaffModel = () => {
    const dispatch = useDispatch<AppDispatch>();
    const staffState = useSelector((state: RootState) => state.staff);
    const [staffFormData, setStaffData] = useState<Staff>({
        id: '',
        name: '',
        Designation: '',
        gender: '',
        dob: '',
        contact: '',
        role: '',
        fieldCode: ''
    });

    // useEffect(() => {
    //     dispatch(getAllStaff());
    // }, [dispatch]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStaffData({...staffFormData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async () => {
        await dispatch(saveStaff(staffFormData));
        setStaffData({id: '', name: '', Designation: '', gender: '', dob: '', contact: '', role: '', fieldCode: ''});
    };

    // const handleUpdate = () => {
    //     dispatch(updateStaff(formData));
    //     setFormData({id: '', name: '', designation: '', gender: '', dob: '', contact: '', role: '', fieldCode: ''});
    // };

    const handleClear = () => {
        setStaffData({id: '', name: '', Designation: '', gender: '', dob: '', contact: '', role: '', fieldCode: ''});
    };

    // const handleDelete = (id: string) => {
    //     dispatch(deleteStaff(id));
    // };

    // const handleRowClick = (staff: any) => {
    //     setFormData(staff);
    // };


    return (
        <>
            <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-8">
                <div className="w-[1400px] mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
                    <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-8 text-center">Staff
                        Management</h1>
                    {/*Search bar*/}
                    <div className="mb-6 flex gap-4 items-end bg-gray-200 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                        <div className="flex-grow flex flex-col">
                            <label className="text-gray-700 dark:text-white mb-1">Search Staff:</label>
                            <input
                                type="text"
                                value={staffFormData.id}
                                onChange={handleChange}
                                name="id"
                                placeholder="Search Staff..."
                                className="w-full p-3 border rounded-lg text-gray-700 dark:text-white bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button

                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg flex items-center gap-2 transition duration-300"
                        >
                            <FaSearch/> Search
                        </button>
                    </div>


                    {/* Form */}
                    <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md">
                        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input type="text" name="id" placeholder="Staff ID" value={staffFormData.id}
                                   onChange={handleChange} className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                            <input type="text" name="name" placeholder="Staff Name" value={staffFormData.name}
                                   onChange={handleChange} className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                            <input type="text" name="designation" placeholder="Designation" value={staffFormData.Designation}
                                   onChange={handleChange} className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                            <input type="text" name="gender" placeholder="Gender" value={staffFormData.gender}
                                   onChange={handleChange} className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                            <input type="date" name="dob" value={staffFormData.dob} onChange={handleChange}
                                   className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                            <input type="text" name="contact" placeholder="Contact Number" value={staffFormData.contact}
                                   onChange={handleChange} className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                            <input type="text" name="role" placeholder="Role" value={staffFormData.role}
                                   onChange={handleChange} className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                            <input type="text" name="fieldCode" placeholder="Field Code" value={staffFormData.fieldCode}
                                   onChange={handleChange} className="w-full p-3 border rounded-lg bg-white dark:bg-gray-800 text-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
                        </form>
                        <div className="flex justify-end gap-4 mt-6">
                            <button onClick={handleSubmit} className="bg-green-500 text-white px-6 py-3 rounded-lg">
                                <FaPlus/> Add
                            </button>
                            <button  className="bg-yellow-500 text-white px-6 py-3 rounded-lg">
                                <FaSave/> Update
                            </button>
                            <button onClick={handleClear} className="bg-gray-500 text-white px-6 py-3 rounded-lg">
                                <FaEraser/> Clear
                            </button>
                        </div>
                    </div>

                    {/* Table */}
                    <h1 className="text-4xl pt-8 font-bold text-gray-800 dark:text-white mb-8 text-center">Staff
                        Table</h1>
                    <div className="mt-8 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-md overflow-x-auto">
                        <table className="w-full border-collapse border border-gray-300 rounded-lg overflow-hidden">
                            <thead>
                            <tr className="bg-gray-300 text-gray-800">
                                <th className="p-4 border">ID</th>
                                <th className="p-4 border">Name</th>
                                <th className="p-4 border">Designation</th>
                                <th className="p-4 border">Gender</th>
                                <th className="p-4 border">DOB</th>
                                <th className="p-4 border">Contact</th>
                                <th className="p-4 border">Role</th>
                                <th className="p-4 border">Field Code</th>
                                <th className="p-4 border">Actions</th>
                            </tr>
                            </thead>
                           {/* <tbody>
                            {staffState.map((staff) => (
                                <tr key={staff.id} className="border text-gray-700"
                                    >
                                    <td className="p-4 border">{staff.id}</td>
                                    <td className="p-4 border">{staff.name}</td>
                                    <td className="p-4 border">{staff.Designation}</td>
                                    <td className="p-4 border">{staff.gender}</td>
                                    <td className="p-4 border">{staff.dob}</td>
                                    <td className="p-4 border">{staff.contact}</td>
                                    <td className="p-4 border">{staff.role}</td>
                                    <td className="p-4 border">{staff.fieldCode}</td>
                                    <td className="p-4 border">
                                        <button onClick={() => (staff.id)}
                                                className="bg-red-500 text-white px-4 py-2 rounded-lg"><FaTrash/> Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>*/}
                        </table>
                    </div>
                </div>
            </div>
        </>
    )

}