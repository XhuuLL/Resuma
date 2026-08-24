"use client";

import { useRef } from "react";
import Link from "next/link";
import { BookOpen } from "lucide-react";
import {
  motion,
  MotionValue,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";

import { buttonVariants } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { motionTokens } from "@/lib/motion-tokens";
import { BuilderFrame } from "./builder-showcase";
import { KineticText } from "./kinetic-text";
import { blurUp as item, staggerContainer as container } from "./reveal";

export function Hero() {
  const reduce = useReducedMotion();
  const isMobile = useIsMobile();
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.65], [12, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.65], [0.85, 1]);
  const frameY = useTransform(scrollYProgress, [0, 1], ["15%", "-12%"]);
  const contentFrameY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  const entrance = !reduce;
  const parallax = !reduce && !isMobile;
  const itemVariants = entrance ? item : undefined;

  return (
    <section ref={ref} className="relative">
      <div className="relative z-10 flex flex-col items-center gap-6 px-6 pt-24 text-center sm:pt-32 md:pt-48">
        <HeroBackdrop scrollYProgress={scrollYProgress} animated={parallax} />

        <motion.div
          className="flex flex-col items-center gap-6"
          variants={entrance ? container : undefined}
          initial={entrance ? "hidden" : false}
          animate={entrance ? "show" : undefined}
          style={parallax ? { y: contentFrameY } : undefined}
        >
          <motion.span
            variants={itemVariants}
            className="group inline-flex items-center gap-2 rounded-full border bg-background/70 py-1 pr-2 pl-3 text-xs font-medium text-muted-foreground shadow-sm backdrop-blur transition-colors hover:text-foreground"
          >
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-blue-500 opacity-75" />
              <span className="relative inline-flex size-1.5 rounded-full bg-blue-500" />
            </span>
            Gratis &amp; sumber terbuka
          </motion.span>

          <motion.div variants={itemVariants}>
            <KineticText
              text="Resuma"
              className="px-4 text-5xl tracking-tight md:text-7xl"
            />
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="max-w-md text-balance text-muted-foreground"
          >
            Buat CV siap kerja dalam hitungan menit. Tulis sekali, pratinjau langsung, dan ekspor ke PDF yang rapi.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#cara-menggunakan"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "px-5",
              )}
            >
              <BookOpen className="size-4" />
              Pelajari Selengkapnya
            </a>
            <Link
              href="/editor"
              className={cn(
                buttonVariants({ variant: "ai", size: "lg" }),
                "px-5",
              )}
            >
              Open Editor
            </Link>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-xs text-muted-foreground"
          >
            Tanpa daftar. Tanpa bayar. Data Anda tidak pernah keluar dari peramban.
          </motion.p>
        </motion.div>
      </div>

      {/* Builder frame — rises up to cover the copy */}
      <motion.div
        style={parallax ? { y: frameY } : undefined}
        className="relative z-20 px-6 pt-6 md:pt-0"
      >
        <motion.div
          initial={
            entrance
              ? {
                  opacity: 0,
                  y: motionTokens.distance.xl,
                  filter: "blur(16px)",
                }
              : false
          }
          animate={
            entrance ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined
          }
          transition={{
            duration: motionTokens.duration.deliberate,
            delay: 0.85,
            ease: motionTokens.easing.expo,
          }}
          className="relative mx-auto max-w-6xl perspective-distant"
        >
          {/* ambient glow behind the frame */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 -top-12 bottom-0 -z-10 blur-3xl"
            style={{
              background:
                "radial-gradient(60% 60% at 50% 40%, rgba(37, 99, 235, 0.28), transparent 70%)",
            }}
          />
          <motion.div
            style={
              parallax
                ? { rotateX, scale, transformOrigin: "center top" }
                : undefined
            }
          >
            <BuilderFrame />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/** Decorative grid + aurora mesh that fades out toward the bottom of the hero. */
function HeroBackdrop({
  scrollYProgress,
  animated = true,
}: {
  scrollYProgress: MotionValue<number>;
  animated?: boolean;
}) {
  const yPosition = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={animated ? { y: yPosition } : undefined}
    >
      {/* Aurora mesh — layered, offset blooms in blue / indigo. */}
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(40% 40% at 30% 0%, rgba(37, 99, 235, 0.18), transparent 70%)",
            "radial-gradient(45% 45% at 70% 8%, rgba(99, 102, 241, 0.14), transparent 72%)",
            "radial-gradient(35% 38% at 52% 14%, rgba(79, 70, 229, 0.10), transparent 70%)",
          ].join(", "),
        }}
      />
      {/* Masked grid sits over the aurora for structure. */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--foreground) 6%, transparent) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 65% 55% at 50% 0%, black, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 65% 55% at 50% 0%, black, transparent 75%)",
        }}
      />
    </motion.div>
  );
}
