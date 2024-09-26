import { useRef } from "react"
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}) {
    const modalRef = useRef();
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handleSave() {
        const titleEntered = title.current.value;
        const desc = description.current.value;
        const dateEntered = dueDate.current.value;

        if (titleEntered.trim() === '' || desc.trim() === '' || dateEntered.trim() === '') {
            //Show error Modal
            modalRef.current.open();
            return;
        }

        onAdd({
            title: titleEntered,
            description: desc,
            dueDate: dateEntered
        });
    }

    return <>
        <Modal ref={modalRef} btnTxt="Close">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops... looks like you didnot add all values.</p>
            <p className="text-stone-600 mb-4">Please check and add missing values.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button 
                    className="text-stone-800 hover:text-stone-950"
                    onClick={onCancel}>
                        Cancel
                </button></li>
                <li><button 
                    className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                    onClick={handleSave}>
                        Save
                    </button></li>
            </menu>
            <div>
                <Input ref={title} label="Title" type="text" />
                <Input ref={description} label="Description" isTextArea />
                <Input ref={dueDate} label="Due Date" type="date" />
            </div>
        </div>   
    </>
}