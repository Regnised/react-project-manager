export default function ProjectsList({ projects, onSelect }) {
    return (
        <div className="flex flex-col m">
            {projects.map((project) => {
                let classes =
                    'text-stone-300 list-none mt-4 p-1 cursor-pointer hover:bg-stone-800';

                if (project.selected) {
                    classes += ` bg-stone-800 rounded-sm `;
                }

                return (
                    <li
                        className={classes}
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
