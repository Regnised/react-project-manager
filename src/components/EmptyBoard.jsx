import Button from './Button';
import noProjects from '../assets/no-projects.png';

export default function EmptyBoard({ createNewProject }) {
    return (
        <div className="mt-24 text-center w-2/3">
            <img className="w-16 m-auto" src={noProjects} />
            <p className="text-center py-4 font-bold text-stone-700">
                No Project Selected
            </p>
            <p className="text-center py-4 text-stone-700">
                Select a project or get started with a new one
            </p>
            <span className=" m-auto justify-center align-middle">
                <Button
                    onClick={createNewProject}
                    btnText="Create new project"
                />
            </span>
        </div>
    );
}
