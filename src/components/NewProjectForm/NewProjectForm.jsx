import { Datepicker, TextInput, Textarea, Label } from 'flowbite-react';

import './NewProjectForm.css';
import Button from '../Button';
import Input from '../Input';
import { useRef } from 'react';
import Modal from '../Modal';

export default function NewProject({ onCancel, submitFunc }) {
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();

    function handleSubmit() {
        const titleValue = title.current.value;
        const descriptionValue = description.current.value;
        const dueDateValue = dueDate.current.value;


        if (
            titleValue.trim() === '' ||
            descriptionValue.trim() === '' ||
            dueDateValue.trim() === ''
        ) {
            modal.current.open();
            return;
        }

        submitFunc({
            title: titleValue,
            description: descriptionValue,
            dueDate: dueDateValue,
        });
    }

    return (
        <>
            <Modal ref={modal} btnCaption="OK">
                <h2 className="text-center py-4 font-bold text-stone-700">
                    Invalid Input
                </h2>
                <p className="text-center p-4 text-stone-700">
                    Oops... looks like you forgot to enter a value
                </p>
                <p className="text-center text-stone-700">
                    Please make sure you provide a valid values
                </p>
            </Modal>
            <div className="w-[35rem] mt-16">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <Button btnText="Cancel" onClick={onCancel} />
                    <Button onClick={handleSubmit} btnText="Save" />
                </menu>
                <div>
                    <Input ref={title} type="text" label="Title" />
                    <Input ref={description} textarea label="Description" />
                    <Input ref={dueDate} type="date" label="Due Date" />
                </div>
            </div>
        </>
    );
}
