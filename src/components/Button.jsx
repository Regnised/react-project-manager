export default function Button({ name, ...props }) {
    return (
        <button
            className="sw-32 bg-stone-700  hover:bg-stone-600 my-2 p-2 rounded-lg font-semibold max-w-sm text-stone-200"
            {...props}
        >
            {name}
        </button>
    );
}
