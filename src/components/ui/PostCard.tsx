import Image from "next/image";
import heartActive from "../../../public/icon-heart-active.png";

export default function PostCard(){
    return(
        <>
            <div className="border-2 border-dark-40 rounded-lg p-5 bg-dark-20 hover:border-brand-color transition-colors duration-500">
                <div className="flex justify-between">
                    <p className="font-inter text-brand-color text-sm">17 de Agosto de 2024</p>
                    <Image
                        src={heartActive}
                        width={20}
                        alt="heart-icon"
                    />
                </div>
                <p className="font-space text-dark-60 text-2xl">O que é linguagem de programação? Conheça as principais</p>
                <p className="font-inter text-dark-50 text-xl">Uma das mais populares vertentes da tecnologia da informação, a área de programação segue tendo muita demanda de trabalho justamente pela velocidade com que dispositivos tecnológicos vêm avançando.</p>
            </div>
        </>
    )
}