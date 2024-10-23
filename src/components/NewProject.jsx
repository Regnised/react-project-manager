import Button from './Button';

export default function NewProject() {
    return (
        <section className="relative flex flex-col flex-1" id="new-project">
            <img></img>
            <p>No Project Selected</p>
            <p>Select a project or get started with a new one</p>
            <Button name="Create new project" />
        </section>
    );
}
