import { Datepicker, TextInput, Textarea, Label } from 'flowbite-react';

import './NewProjectForm.css';
import Button from '../Button';
import Input from '../Input';
import { useRef } from 'react';

export default function NewProject({ onCancel, submitFunc }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSubmit() {
        const titleValue = title.current.value;
        const descriptionValue = description.current.value;
        const dueDateValue = new Date(dueDate.current.value);

        submitFunc({
            title: titleValue,
            description: descriptionValue,
            dueDate: dueDateValue,
        });
    }

    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <Button btnText="Cancel" onClick={onCancel} />
                <Button onClick={handleSubmit} btnText="Save" />
            </menu>
            <div>
                <Input ref={title} label="Title" />
                <Input ref={description} textarea label="Description" />
                <Input ref={dueDate} type="date" label="Due Date" />
            </div>
        </div>
    );
}
