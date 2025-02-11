"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import LoginArt from "../../../../public/Login-Art.png";
import LoginArtMobile from "../../../../public/login-art-mobile.png";
import Input from "@/components/ui/Input";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    function handleClickLogin(){
      const user = {
        email,
        password
      }
      document.cookie = `user=${JSON.stringify(user)};`;
      router.push("/");
    }

    return (
      <div className="flex p-10 gap-5 bg-dark-10 max-sm:flex-col-reverse max-sm:p-3 ">
        <div className="flex flex-col p-10 gap-5 max-sm:p-3">
          <h3 className="font-space text-4xl">Bem-vindo de volta!👋</h3>
          <span className="font-inter text-xl text-dark-50">
            Hoje é um novo dia. Ele é seu. Você o molda. Faça login para começar a gerenciar seus posts.
          </span>
          <Input 
            label="Email"
            onChange={(value) => setEmail(value.toString())}
            type="text"
            placeholder="johndoe@example.com"
          />
          <Input 
            label="Password"
            onChange={(value) => setPassword(value.toString())}
            type="password"
            placeholder="pelo menos 8 caracteres"
          />
          <div className="flex justify-end">
            <span className="text-inter text-cyan-700 hover:cursor-pointer hover:underline">Esqueceu sua password?</span>
          </div>
          <Button 
            classe="bg-brand-color"
            onClick={handleClickLogin}
          >
            Entrar
          </Button>
          <div className="flex justify-center items-center">
            Não tem uma conta?  
            <Link href="/register" className="text-inter text-cyan-700 hover:cursor-pointer hover:underline">Registrar</Link>
          </div>
        </div>
        <div className="max-sm:hidden ">
          <Image 
            src={LoginArt}
            alt="login-art"
          />
        </div>
        <div className="hidden max-sm:flex max-sm:mt-5">
          <Image 
            src={LoginArtMobile}
            width={380}
            alt="login-art-mobile"
          />
        </div>
      </div>
    );
  }
  