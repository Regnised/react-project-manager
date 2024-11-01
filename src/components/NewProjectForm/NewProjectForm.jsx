import { Datepicker, TextInput, Textarea, Label } from 'flowbite-react';

import './NewProjectForm.css';
import Button from '../Button';

export default function NewProjectForm({ onCancel, submitFunc }) {
    console.log('render NewProjectForm');

    function handleSubmit(e) {
        e.preventDefault();
        const title = e.target[2].value;
        const description = e.target[3].value;
        const dueDate = new Date(e.target[4].value);

        submitFunc({ title, description, dueDate });
    }

    return (
        <div className="p-4 sm:ml-64">
            <div className="p-4 mt-20">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="flex items-end justify-end mb-2 space-x-2">
                        <Button btnText="Cancel" onClick={onCancel} />
                        <Button btnText="Save" />
                    </div>
                    <div>
                        <div className="mb-0 block">
                            <Label
                                className="font-bold"
                                htmlFor="title"
                                value="TITLE"
                            />
                        </div>

                        <TextInput />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                className="font-bold"
                                htmlFor="description"
                                value="DESCRIPTION"
                            />
                        </div>
                        <Textarea></Textarea>
                    </div>

                    <div>
                        <div className="mb-2 block">
                            <Label
                                className="font-bold"
                                htmlFor="date"
                                value="DUE DATE"
                            />
                        </div>
                        <Datepicker></Datepicker>
                    </div>
                </form>
            </div>
        </div>
    );
}
