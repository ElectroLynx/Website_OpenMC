import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Blocks, Compass, MapPinned } from "lucide-react";

export default function City() {
    return (
        <main className="bg-[#f4f1eb] text-[#24231f]">
            <section className="relative flex min-h-[82svh] items-end overflow-hidden bg-[#222] text-white">
                <Image
                    src="/placeholder/background_omc.png"
                    alt="Vue d'une partie de la ville OpenMC dans Minecraft"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative mx-auto w-full max-w-7xl px-6 pb-16 pt-36 md:px-12 md:pb-24">
                    <p className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-white/80">
                        <MapPinned size={17} aria-hidden="true" />
                        Le monde OpenMC
                    </p>
                    <h1 className="max-w-3xl text-5xl font-black leading-[0.98] md:text-7xl">
                        Une ville à
                        <br />
                        vivre et à bâtir.
                    </h1>
                    <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 md:text-lg">
                        Des rues à parcourir, des constructions à découvrir et un monde qui
                        prend forme grâce à sa communauté.
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-4">
                        <Link
                            href="/join"
                            className="inline-flex min-h-12 items-center gap-3 bg-[#f47796] px-5 py-3 font-semibold text-white transition-colors hover:bg-[#e65f82] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            Rejoindre OpenMC <ArrowRight size={18} aria-hidden="true" />
                        </Link>
                        <a
                            href="#decouvrir"
                            className="inline-flex min-h-12 items-center gap-2 px-3 py-3 font-medium text-white transition-colors hover:text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                        >
                            Découvrir la ville <ArrowDown size={17} aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </section>

            <section
                id="decouvrir"
                className="mx-auto grid max-w-7xl gap-10 px-6 py-20 md:grid-cols-[0.8fr_1.2fr] md:items-center md:gap-16 md:px-12 md:py-28"
            >
                <div>
                    <p className="mb-4 text-sm font-bold uppercase tracking-[0.16em] text-[#b74e6a]">
                        Explorez à votre rythme
                    </p>
                    <h2 className="max-w-lg text-3xl font-bold leading-tight md:text-5xl">
                        Chaque détour raconte quelque chose.
                    </h2>
                    <p className="mt-6 max-w-lg text-base leading-7 text-[#59564f]">
                        Le meilleur moyen de découvrir la ville, c&apos;est de s&apos;y
                        promener. Observez les détails, repérez les lieux qui vous
                        inspirent et imaginez ce que vous pourriez y construire.
                    </p>
                    <div className="mt-9 grid gap-5 border-t border-[#d8d2c8] pt-6 sm:grid-cols-2">
                        <div className="flex gap-3">
                            <Compass className="mt-1 shrink-0 text-[#b74e6a]" size={21} aria-hidden="true" />
                            <div>
                                <h3 className="font-semibold">Prenez le temps d&apos;explorer</h3>
                                <p className="mt-1 text-sm leading-6 text-[#68645c]">
                                    Laissez-vous guider par les rues et les constructions.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <Blocks className="mt-1 shrink-0 text-[#b74e6a]" size={21} aria-hidden="true" />
                            <div>
                                <h3 className="font-semibold">Ajoutez votre empreinte</h3>
                                <p className="mt-1 text-sm leading-6 text-[#68645c]">
                                    Retrouvez la communauté en jeu et participez à l&apos;aventure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden bg-[#d8d2c8]">
                    <Image
                        src="/placeholder/homepage.webp"
                        alt="Architecture en bois et cerisiers en fleurs dans la ville OpenMC"
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                    />
                </div>
            </section>

            <section className="bg-[#24231f] text-white">
                <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-16 md:flex-row md:items-center md:justify-between md:px-12 md:py-20">
                    <div>
                        <p className="mb-3 text-sm font-bold uppercase tracking-[0.16em] text-[#f59ab0]">
                            À vous de jouer
                        </p>
                        <h2 className="max-w-2xl text-3xl font-bold leading-tight md:text-4xl">
                            La prochaine histoire de la ville peut être la vôtre.
                        </h2>
                    </div>
                    <Link
                        href="/join"
                        className="inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start bg-white px-5 py-3 font-semibold text-[#24231f] transition-colors hover:bg-[#f5dce2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:self-auto"
                    >
                        Comment nous rejoindre <ArrowRight size={18} aria-hidden="true" />
                    </Link>
                </div>
            </section>
        </main>
    );
}