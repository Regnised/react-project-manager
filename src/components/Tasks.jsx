import Button from './Button';

export default function Tasks({ updateTasks, project }) {
    const tasks = project.tasks;

    function handleAddTask(e) {
        e.preventDefault();

        tasks.push(e.target[0].value);
        updateTasks(tasks);
    }

    function handleClearTask(taskName) {
        const updatedTasks = [...tasks.filter((t) => t != taskName)];
        updateTasks(updatedTasks);
    }

    return (
        <>
            <h2 className="font-bold text-2xl text-stone-700 mb-2">Tasks</h2>
            <form onSubmit={handleAddTask}>
                <input type="text" name="taskTitle" />
                <span className="pl-4">
                    <Button
                        className="text-base font-semibold  text-stone-700 hover:text-stone-900"
                        btnText="Add Task"
                    />
                </span>
            </form>
            <ul className="pt-10">
                {tasks.map((t) => (
                    <li className="flex bg-stone-200  p-4" key={t}>
                        <p className="font-semibold">{t}</p>
                        <p
                            className="ml-auto cursor-pointer text-stone-600 hover:text-stone-800"
                            onClick={() => {
                                handleClearTask(t);
                            }}
                        >
                            Clear
                        </p>
                    </li>
                ))}
            </ul>
        </>
    );
}
