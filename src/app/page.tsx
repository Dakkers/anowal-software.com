import Image from "next/image";
import logoImg from './logo 3.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:justify-center p-8 md:p-24 bg-purple-950">
      <div className="flex flex-col items-center h-full w-full text-white max-w-2xl">
        <Image alt='' src={logoImg} />
        <div className="flex flex-col gap-4">
          <div className="text-4xl text-center">
            Anowal Software
          </div>
          <div>
            We are an indigenous-owned software company whose mission is to assist in the revitalization of indigenous languages.
            We are currently working on <a className="text-cyan-400 underline" href="https://learn-oneida.com/">learn-oneida.com</a>, a
            website dedicated to the education of the Oneida language.
          </div>
        </div>
      </div>
    </main>
  );
}
