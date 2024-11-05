import { createPortal } from 'react-dom';
import { forwardRef, useImperativeHandle, useRef } from 'react';
import Button from './Button';

const Modal = forwardRef(function Modal({ children, btnCaption }, ref) {
    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                console.log(dialog.current);

                dialog.current.showModal();
            },
        };
    });
    return createPortal(
        <dialog
            ref={dialog}
            className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
        >
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button btnText={btnCaption}></Button>
            </form>
        </dialog>,
        document.getElementById('modal-root')
    );
});

export default Modal;
