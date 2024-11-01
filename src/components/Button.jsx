export default function Button({ btnText, ...props }) {
    return (
        <button
            className="text-sm bg-stone-800  hover:bg-stone-700 p-2 rounded-lg text-stone-300 hover:text-white"
            {...props}
        >
            {btnText}
        </button>
    );
}
