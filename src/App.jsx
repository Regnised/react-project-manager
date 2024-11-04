import { useState } from 'react';
import SidePanel from './components/SidePanel';
import ProjectPage from './components/ProjectPage/ProjectPage';
import EmptyBoard from './components/EmptyBoard';
import NewProject from './components/NewProjectForm/NewProjectForm';

function App() {
    console.log(`Render APP !!!`);

    const [projects, setProject] = useState([
        {
            title: 'Project 1',
            description: 'Description 1',
            dueDate: new Date(),
            selected: false,
            tasks: ['Create Backlog', 'Find a team', 'Release'],
        },
    ]);
    // component status: create, edit, read, empty
    const [projectStatus, setProjectStatus] = useState('empty');

    function addProject(project) {
        setProject((projects) => {
            return [...projects, { ...project, tasks: [], selected: false }];
        });
        setProjectStatus('empty');
    }

    function updateTasks(tasks) {
        console.log(tasks);

        setProject((projects) => [
            ...projects.map((p) => {
                if (p.selected === true) {
                    p.tasks = [...tasks];
                }
                console.log(p.tasks);

                return p;
            }),
        ]);
    }

    function selectProject(name) {
        setProject((projects) => [
            ...projects.map((p) => {
                if (p.title === name) {
                    p.selected = true;
                } else {
                    p.selected = false;
                }
                return p;
            }),
        ]);
    }

    function deleteProject(name) {
        setProject((projects) => {
            return [...projects.filter((p) => p.title !== name)];
        });
    }

    function showProjectForm() {
        setProjectStatus('create');
        selectProject('');
    }

    function handleCancelBtn(e) {
        setProjectStatus('empty');
    }
    const isProjectSelected = projects.find((p) => p.selected);

    return (
        <main className="sidebar mt-8 flex gap-8 -pb-8">
            <SidePanel
                projects={projects}
                selectProject={selectProject}
                createProject={showProjectForm}
            />
            {isProjectSelected && (
                <ProjectPage
                    project={projects.find((p) => p.selected)}
                    onDelete={deleteProject}
                    updateTasks={updateTasks}
                    clearTask
                />
            )}
            {!isProjectSelected && projectStatus === 'create' && (
                <NewProject
                    submitFunc={addProject}
                    onCancel={handleCancelBtn}
                />
            )}
            {!isProjectSelected && projectStatus === 'empty' && (
                <EmptyBoard createNewProject={showProjectForm} />
            )}
        </main>
    );
}

export default App;
