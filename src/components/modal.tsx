import { X } from "lucide-react";

export default function Modal({
    open,
    onClose,
    children,
}: {
    open: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onClose: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: any;
}) {
    return (
        // backdrop
        <div
            onClick={onClose}
            className={`fixed inset-0 flex justify-center items-center transition-colors ${open ? "visible bg-black/50" : "invisible"
                }`}
        >
            {/* Modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                className={`bg-[#030712] md:rounded-xl shadow p-6 transition-all md:w-auto w-screen md:h-auto h-screen ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"
                    }`}
            >
                {/* X Button */}
                <button
                    onClick={onClose}
                    className="absolute top-6 right-6 rounded-lg text-gray-400 hover:text-gray-600 transition duration-200"
                >
                    <X size={25} />
                </button>
                {children}
            </div>
        </div>
    );
}