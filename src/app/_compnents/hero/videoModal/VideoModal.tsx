'use client'

import { useEffect, useRef } from "react"


interface VideoModalProps {
    isOpen: boolean,
    onClose:()=> void;
}


export default function VideoModal({ isOpen, onClose}: VideoModalProps) {

    const dialogRef = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        const dialog = dialogRef.current
        dialog && isOpen && dialog.showModal();
        dialog && !isOpen && dialog.close();
    }, [isOpen])

    return (
        <dialog 
        className="w-200 backdrop:backdrop-blur-sm m-auto rounded-2xl shadow-[0_0_50px_-15px_rgba(119,114,241,0.5)] overflow-hidden bg-black isolate"
        ref={dialogRef}
        onClick={(e)=> e.target === dialogRef.current ? onClose() : ''}
        >
            {isOpen && <video
                src="/videos/VideoModal.mp4"
                autoPlay
                controls
                playsInline
            >
            </video>}
        </dialog>
    )
}