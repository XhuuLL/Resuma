"use client";

import {
  useRef,
  type ForwardRefExoticComponent,
  type HTMLAttributes,
  type RefAttributes,
} from "react";
import { useReducedMotion } from "motion/react";

import { FileCheckIcon } from "@/components/ui/file-check";
import { FingerprintIcon } from "@/components/ui/fingerprint";
import { GalleryThumbnailsIcon } from "@/components/ui/gallery-thumbnails";
import { MonitorCheckIcon } from "@/components/ui/monitor-check";
import { PenToolIcon } from "@/components/ui/pen-tool";
import { SparklesIcon } from "@/components/ui/sparkles";

import { Reveal, RevealItem, RevealStagger } from "./reveal";

type AnimatedIconHandle = {
  startAnimation: () => void;
  stopAnimation: () => void;
};

type AnimatedIcon = ForwardRefExoticComponent<
  HTMLAttributes<HTMLDivElement> & {
    size?: number;
  } & RefAttributes<AnimatedIconHandle>
>;

type Feature = {
  Icon: AnimatedIcon;
  title: string;
  description: string;
};

const FEATURES: Feature[] = [
  {
    Icon: PenToolIcon,
    title: "Beradaptasi dengan perangkat Anda",
    description:
      "Kanvas tarik-lepas di desktop, formulir terpandu di ponsel. Satu editor yang sesuai dengan layar Anda.",
  },
  {
    Icon: MonitorCheckIcon,
    title: "Pratinjau langsung",
    description:
      "Setiap perubahan langsung terlihat dalam pratinjau akurat, sehingga apa yang Anda lihat adalah apa yang Anda ekspor.",
  },
  {
    Icon: GalleryThumbnailsIcon,
    title: "Beragam templat",
    description:
      "Beralih di antara sembilan belas tata letak yang dipoles seperti klasik, linimasa, dan atlas tanpa mengetik ulang sedikit pun.",
  },
  {
    Icon: FileCheckIcon,
    title: "Impor dan ekspor PDF",
    description:
      "Bawa CV yang ada untuk memulai, lalu ekspor PDF bersih yang siap cetak dengan satu klik.",
  },
  {
    Icon: SparklesIcon,
    title: "Bantuan AI",
    description:
      "Pertajam kata-kata Anda dan cocokkan kata kunci deskripsi pekerjaan dengan wawasan dan saran AI bawaan.",
  },
  {
    Icon: FingerprintIcon,
    title: "Privasi sebagai standar",
    description:
      "Tanpa akun, tanpa pelacakan, tanpa bayar. Data Anda tetap di peramban, dan seluruh proyek ada di GitHub.",
  },
];

export function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32 md:py-48">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Semua yang Anda butuhkan untuk <br />
          <span className="bg-linear-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
            membuat CV Anda
          </span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Editor yang fokus, cepat dengan fitur yang penting, dan tidak ada yang menghalangi Anda.
        </p>
      </Reveal>

      <RevealStagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </RevealStagger>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const iconRef = useRef<AnimatedIconHandle>(null);
  const reduce = useReducedMotion();
  const { Icon } = feature;

  return (
    // Motion owns `transform` (blur-up entrance + hover lift), so the card must
    // never CSS-transition it — that fight caused a post-entrance drift.
    <RevealItem
      onMouseEnter={
        reduce ? undefined : () => iconRef.current?.startAnimation()
      }
      onMouseLeave={reduce ? undefined : () => iconRef.current?.stopAnimation()}
      whileHover={reduce ? undefined : { y: -4, boxShadow: "var(--shadow-lg)" }}
      className="group rounded-2xl relative h-full overflow-hidden p-6 bg-background border"
    >
      <div className="">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(120% 90% at 0% 0%, rgba(16, 185, 129, 0.10), transparent 55%)",
          }}
        />
        <span className="relative inline-flex size-10 items-center justify-center rounded-xl bg-linear-to-r from-emerald-500 to-teal-600 text-white shadow-sm ring-1 ring-emerald-500/20 transition-transform duration-300 group-hover:scale-105">
          <Icon ref={iconRef} size={20} />
        </span>
        <h3 className="relative mt-4 font-semibold">{feature.title}</h3>
        <p className="relative mt-2 text-sm text-muted-foreground">
          {feature.description}
        </p>
      </div>
    </RevealItem>
  );
}
