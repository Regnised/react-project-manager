import Button from '../Button';
import Tasks from '../Tasks';

export default function ProjectPage({ project, onDelete, updateTasks }) {
    return (
        <div className="">
            <p className="grid grid-cols-4 gap-4 font-bold text-3xl text-stone-700">
                {project.title}
                <span className="col-start-4 text-right">
                    <Button
                        onClick={() => onDelete(project.title)}
                        btnText="Delete"
                    />
                </span>
            </p>
            <p className="font-sans text-sm text-stone-400 mt-2">
                {project.dueDate.toLocaleDateString()}
            </p>
            <p className="font-sans text-sm text-stone-600 mt-4">
                {project.description}
            </p>
            <hr className="h-1 my-8 bg-gray-300 border-0 dark:bg-gray-700"></hr>
            <Tasks updateTasks={updateTasks} project={project} />
        </div>
    );
}
