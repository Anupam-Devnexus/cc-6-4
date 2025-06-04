import { useNavigate } from "react-router-dom";

export default function Confirm({ message = "Are you sure?", onCancel = () => { }, onConfirm }) {
    const navigate = useNavigate();

    const confirmHandle = () => {
        onConfirm
        navigate('/')
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg px-4 py-9 w-[90%] max-w-sm animate-fadeIn">
                <h1 className="text-lg font-semibold mb-4 text-center">{message}</h1>
                <div className="flex justify-center gap-3">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 cursor-pointer rounded bg-gray-300 text-gray-800 hover:bg-gray-400 transition"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={confirmHandle}
                        className="px-4 py-2 cursor-pointer rounded bg-[var(--var-red-col)] text-white hover:bg-red-700 transition"
                    >
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}
