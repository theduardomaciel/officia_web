import Image from 'next/image'

import {Logo, PlayStoreEN} from "components/Icons"

export default function Home() {
    return (
        <main className="flex flex-col justify-between items-center min-h-screen">
            <section className='flex w-full h-screen flex-row items-center justify-between -mt-[2rem] gap-x-24 relative px-12'>
                <p className='font-black text-[15rem] tracking-[0.125em] text-primary opacity-10 leading-none
                absolute top-[20%] -left-[5%] -z-20'>
                    AUTO <br />
                    NOMIA
                </p>

                <div className='flex flex-1 h-full relative'>
                    <Image
                        src={`/images/screenshot_1.png`}
                        className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-text-100 rounded-[18.75px] shadow-2xl'
                        width={234.38}
                        height={507.5}
                        priority
                        alt='Mobile app screenshot 1'
                    />
                    <Image
                        src={`/images/screenshot_2.png`}
                        className='absolute top-[47%] left-[42%] -translate-x-1/2 -translate-y-1/2 -z-10 border-2 border-text-100 rounded-[18.75px] shadow-2xl'
                        width={234.38}
                        height={507.5}
                        priority
                        alt='Mobile app screenshot 2'
                    />
                </div>

                <div className='flex flex-1 flex-col items-center justify-center gap-y-20'>
                    <Logo className='w-[101px] h-[80px]' />
                    <div className='flex flex-1 flex-col items-center justify-center gap-y-4'>
                        <h1 className="font-title text-5xl leading-[95%]">Simplicidade.</h1>
                    <p className="text-center max-w-[60%] mt-4">Estamos aqui para unir tudo que o seu negócio precisa em um só lugar.</p>
                    </div>
                    <PlayStoreEN className='cursor-pointer' />
                </div>
            </section>
        </main>
    )
}
