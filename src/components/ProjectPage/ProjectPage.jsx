import Button from '../Button';
import Tasks from '../Tasks';

export default function ProjectPage({ project, onDelete, updateTasks }) {
    return (
        <div className="w-[35rem] mt-16">
            <header className="pb-4 mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between ">
                    <h1 className="font-bold text-3xl text-stone-600 mb-2">
                        {project.title}
                    </h1>

                    <Button
                        onClick={() => onDelete(project.title)}
                        btnText="Delete"
                    />
                </div>
                <p className="font-sans text-sm text-stone-400 mt-2">
                    {project.dueDate.toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                    })}
                </p>
                <p className="font-sans text-sm text-stone-600 mt-4 whitespace-pre-wrap">
                    {project.description}
                </p>
            </header>

            <Tasks updateTasks={updateTasks} project={project} />
        </div>
    );
}
