import Link from "next/link";
import { MousePointerClick, PenLine, FileDown } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Reveal, RevealItem, RevealStagger } from "./reveal";

const STEPS = [
  {
    number: "01",
    Icon: MousePointerClick,
    title: "Buka Editor",
    description:
      "Klik tombol \"Open Editor\" untuk langsung memulai — tanpa perlu membuat akun atau mendaftar.",
  },
  {
    number: "02",
    Icon: PenLine,
    title: "Isi Data Anda",
    description:
      "Tulis pengalaman kerja, pendidikan, keahlian, dan informasi pribadi Anda di formulir yang sudah tersedia.",
  },
  {
    number: "03",
    Icon: FileDown,
    title: "Ekspor PDF",
    description:
      "Pilih templat yang Anda suka, lalu unduh CV dalam format PDF yang rapi dan siap dikirim ke perusahaan.",
  },
];

export function HowToUse() {
  return (
    <section
      id="cara-menggunakan"
      className="relative overflow-hidden px-6 py-24 sm:py-32 md:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(800px 500px at 50% 50%, rgba(37, 99, 235, 0.08), transparent 70%)",
        }}
      />

      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Cara{" "}
          <span className="bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent">
            Menggunakan
          </span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Tiga langkah sederhana untuk membuat CV profesional Anda.
        </p>
      </Reveal>

      <RevealStagger className="relative mx-auto mt-16 max-w-4xl">
        {/* Vertical connector line */}
        <div
          aria-hidden
          className="absolute left-6 top-0 bottom-0 hidden w-px bg-gradient-to-b from-transparent via-blue-500/30 to-transparent md:left-1/2 md:block"
        />

        <div className="flex flex-col gap-12 md:gap-16">
          {STEPS.map((step, i) => (
            <RevealItem key={step.number}>
              <div
                className={cn(
                  "relative flex flex-col items-start gap-6 md:flex-row md:items-center",
                  i % 2 === 1 && "md:flex-row-reverse",
                )}
              >
                {/* Content card */}
                <div className="flex-1 rounded-2xl border bg-background p-6 shadow-sm transition-shadow hover:shadow-md">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex size-12 shrink-0 items-center justify-center rounded-xl bg-linear-to-r from-blue-500 to-indigo-600 text-white shadow-sm">
                      <step.Icon className="size-5" />
                    </span>
                    <div>
                      <span className="text-xs font-semibold uppercase tracking-widest text-blue-500">
                        Langkah {step.number}
                      </span>
                      <h3 className="text-lg font-semibold">{step.title}</h3>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Center dot on the timeline (desktop) */}
                <div
                  aria-hidden
                  className="hidden size-4 shrink-0 rounded-full border-2 border-blue-500 bg-background shadow-sm md:block"
                />

                {/* Spacer for alternating layout */}
                <div className="hidden flex-1 md:block" />
              </div>
            </RevealItem>
          ))}
        </div>
      </RevealStagger>

      <Reveal className="mt-14 flex justify-center">
        <Link
          href="/editor"
          className={cn(
            buttonVariants({ variant: "ai", size: "lg" }),
            "px-8",
          )}
        >
          Mulai Sekarang
        </Link>
      </Reveal>
    </section>
  );
}
