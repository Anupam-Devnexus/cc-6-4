import react from 'react';
import { useNavigate } from 'react-router-dom';
export default function Button({ text, path }) {
    const navigate = useNavigate()

    const handleNavigator = (path) => {
        navigate(path)
    }
    return (
        <button
            onClick={() => handleNavigator(path)}
            className='bg-[var(--var-red-col)] cursor-pointer w-auto px-4 py-2 rounded-md text-white'>
            {text}
        </button>
    )
}