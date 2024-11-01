export default function ProjectsList({ projects, onSelect }) {
    console.log(`RENDER ProjectsList`);
    console.log(projects);

    return (
        <div className="flex flex-col m">
            {projects.map((project) => {
                return (
                    <li
                        className="text-stone-300 list-none mt-4 cursor-pointer"
                        key={project.title}
                        onClick={() => onSelect(project.title)}
                    >
                        {project.title}
                    </li>
                );
            })}
        </div>
    );
}
