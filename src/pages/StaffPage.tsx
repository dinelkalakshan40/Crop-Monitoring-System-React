import {StaffModel} from "../components/StaffModel.tsx";
import {ToastContainer} from "react-toastify";

const StaffPage=()=>{
    return(
        <div>
            <StaffModel/>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
        </div>
    )
}
export default StaffPage;