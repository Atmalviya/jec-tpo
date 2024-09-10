import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
// import Logo from "/logo.svg";

export default function Page() {
  return (
    <section className="bg-white h-[calc(100vh-60px)]">
      <div className="lg:grid h-full lg:grid-cols-12">
        <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
          <Image
            alt="Background image"
            src='/building.jpg'
            className="absolute inset-0 h-full w-full object-cover opacity-80"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
          />

          <div className="hidden lg:relative lg:block lg:p-12">
            <a className="block text-white" href="#">
              <span className="sr-only">Home</span>
              {/* <img src={'/logo.svg'} alt="" /> */}
            </a>

            <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
              Training and Placement Cell
            </h2>

            <p className="mt-4 leading-relaxed text-white/90 lg:text-[50px]">
              Jabalpur Engineering Collge, Jabalpur
            </p>
          </div>
        </section>

        <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
          <div className="max-w-xl lg:max-w-3xl">
            <div className="relative -mt-16 block lg:hidden">
              <a
                className="inline-flex size-16 items-center justify-center rounded-full bg-white text-blue-600 sm:size-20"
                href="#"
              >
                <span className="sr-only">Home</span>
                {/* <img src='/logo.svg' alt="" /> */}
              </a>

              <h1 className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              Welcome to AI Form Builder
              </h1>

              <p className="mt-4 leading-relaxed text-gray-500">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>

            <SignIn />

          </div>
        </main>
      </div>
    </section>
  );
}