import Swal from "sweetalert2";

interface ConfirmationModalProps {
    title?: string;
    text?: string;
    confirmText?: string;
    cancelText?: string;
}
export const showConfirmationModal = async ({
                                                title = "Are you sure?",
                                                text = "You won't be able to revert this action!",
                                                confirmText = "Yes, delete it!",
                                                cancelText = "Cancel",
                                            }: ConfirmationModalProps): Promise<boolean> => {
    const result = await Swal.fire({
        title,
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#d33",
        cancelButtonColor: "#3085d6",
        confirmButtonText: confirmText,
        cancelButtonText: cancelText,
    });

    return result.isConfirmed;
};

