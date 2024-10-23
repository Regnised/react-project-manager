import Button from './Button';

export default function SidePanel() {
    return (
        <div className="relative flex flex-col bg-clip-border rounded-tr-lg bg-neutral-900 h-[calc(100vh)] w-full max-w-[20rem] p-5 shadow-xl shadow-blue-gray-900/5 mt-6">
            <h2 className="text-xl my-8 font-semibold uppercase text-white">
                Your projects
            </h2>
            <Button name="+ Add Project" />
        </div>
    );
}
