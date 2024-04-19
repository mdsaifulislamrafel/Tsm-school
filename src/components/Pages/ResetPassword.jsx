import { useContext, useState } from "react";
import toast from 'react-hot-toast';
import { AuthContext } from "../AuthProvider/AuthProvider";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const { resetPassword } = useContext(AuthContext);

    const handleResetPassword = () => {
        resetPassword(email)
            .then(() => {
                toast.success('Password reset email sent! Please check your inbox.');
                setEmail("");
            })
            .catch(() => {
                toast.error('Failed to send password reset email. Please try again later.');
            });
    };

    const handleCloseModal = () => {
        document.getElementById('my_modal_1').close();
    };

    const handleButtonClick = () => {
        handleResetPassword();
        handleCloseModal();
    };

    return (
        <div>
            <button onClick={() => document.getElementById('my_modal_1').showModal()}>Forgot Password?</button>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <input type="email" name="emailInput" id="emailInput" placeholder="Your Email Address" className="w-full px-4 py-3 rounded-md border border-indigo-300 focus:outline-none focus:ring" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button className="btn mt-4 btn-success font-bold text-white" onClick={handleButtonClick}>Sent</button>
                </div>
            </dialog>
        </div>
    );
};

export default ResetPassword;
