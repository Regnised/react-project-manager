import Button from './Button';
import ProjectsList from './ProjectsList/ProjectsList';

export default function SidePanel({ projects, selectProject, createProject }) {
    return (
        <aside className="w-1/3 px-8 py-16 md:w-72 rounded-tr-lg bg-stone-900 dark:bg-stone-900">
            <h2 className="text-xl my-8 font-semibold uppercase text-white">
                Your projects
            </h2>
            <Button onClick={createProject} btnText="+ Add Project" />
            <ProjectsList projects={projects} onSelect={selectProject} />
        </aside>
    );
}
