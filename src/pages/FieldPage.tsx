import {FieldModel} from "../components/FieldModel.tsx";
import {ToastContainer} from "react-toastify";



const FieldPage=()=>{
    return(
        <div>
            <FieldModel/>
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
export default FieldPage;