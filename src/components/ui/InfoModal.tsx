import { InfoModalProps } from "@/lib/types";
import Button from "./Button";

export default function InfoModal({children, closeModal, buttonText, info}: InfoModalProps){
    return(
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
            <div className="bg-dark-10 border-2 border-dark-30 rounded-xl w-[600px] p-5 flex flex-col justify-center items-center gap-4">
                { children }
                <p className="font-inter text-xl text-dark-50">{ info }</p>
                <Button 
                classe="bg-brand-color w-1/2 font-inter"
                onClick={()=> closeModal(false)}
                >
                    { buttonText }
                </Button>
            </div>
        </div>
    )
}