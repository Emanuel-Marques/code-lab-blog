"use client";
import Button from "@/components/ui/Button";
import Image from "next/image";
import LoginArt from "../../../../public/Login-Art.png";
import LoginArtMobile from "../../../../public/login-art-mobile.png";
import Input from "@/components/ui/Input";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import InfoModal from "@/components/ui/InfoModal";
import ErrorIcon from "@/components/ui/icons/ErrorIcon";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [infoModal, setInfoModal] = useState("");
  const router = useRouter();

  function handleClickLogin() {
    if (email === "" || password === "") {
      setInfoModal("Usuário e senha incorretos!");
      setIsModalOpen(!isModalOpen);
      return;
    }

    const user = {
      email,
      password,
    };
    document.cookie = `user=${JSON.stringify(user)};`;
    router.push("/");
  }

  return (
    <>
      <div className="flex p-10 gap-5 bg-dark-10 max-sm:flex-col-reverse max-sm:p-3 max-md:flex-col-reverse max-md:p-3 ">
        <div className="flex flex-col p-10 gap-5 max-sm:p-3 max-md:p-3">
          <h3 className="font-space text-4xl max-sm:text-3xl">
            Bem-vindo de volta!👋
          </h3>
          <span className="font-inter text-xl max-sm:text-lg text-dark-50">
            Hoje é um novo dia. Ele é seu. Você o molda. Faça login para começar
            a gerenciar seus posts.
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
            <span className="text-inter text-cyan-700 hover:cursor-pointer hover:underline">
              Esqueceu sua password?
            </span>
          </div>
          <Button classe="bg-brand-color" onClick={handleClickLogin}>
            Entrar
          </Button>
          <div className="flex justify-center items-center">
            Não tem uma conta?
            <Link
              href="/register"
              className="text-inter text-cyan-700 hover:cursor-pointer hover:underline"
            >
              Registrar
            </Link>
          </div>
        </div>
        <div className="max-sm:hidden max-md:hidden">
          <Image src={LoginArt} alt="login-art" />
        </div>
        <div className="hidden max-sm:flex max-sm:mt-5 max-md:flex max-md:mt-5">
          <Image
            src={LoginArtMobile}
            alt="login-art-mobile"
            className="max-md:w-full max-sm:w-full"
          />
        </div>
      </div>
      {isModalOpen && (
        <InfoModal
          info={infoModal}
          closeModal={setIsModalOpen}
          buttonText="Fechar"
        >
          <ErrorIcon width="96" height="96" />
        </InfoModal>
      )}
    </>
  );
}
