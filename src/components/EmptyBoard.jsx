import Button from './Button';
import noProjects from '../assets/no-projects.png';

export default function EmptyBoard({ createNewProject }) {
    return (
        <div className="flex h-screen ml-64">
            <div className="m-auto ">
                <img className="w-16 m-auto" src={noProjects} />
                <p className="text-center py-4 font-bold text-stone-700">
                    No Project Selected
                </p>
                <p className="text-center py-4 text-stone-700">
                    Select a project or get started with a new one
                </p>
                <span className="flex m-auto justify-center align-middle">
                    <Button
                        onClick={createNewProject}
                        btnText="Create new project"
                    />
                </span>
            </div>
        </div>
    );
}
