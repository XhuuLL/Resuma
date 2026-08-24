"use client";

import Link from "next/link";
import {
  CheckIcon,
  ChevronDownIcon,
  DownloadIcon,
  FileDownIcon,
  Redo2Icon,
  TriangleAlert,
  Undo2Icon,
} from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

import { Button } from "@/components/ui/button";
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Spinner } from "@/components/ui/spinner";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import type { SaveStatus } from "@/features/resume-editor/domain/draft/local-draft-storage";

type EditorTopBarProps = {
  saveStatus: SaveStatus;
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
  onExportPdf: () => void;
  isExportingPdf: boolean;
  onExportJson: () => void;
};

export function EditorTopBar({
  saveStatus,
  canUndo,
  canRedo,
  onUndo,
  onRedo,
  onExportPdf,
  isExportingPdf,
  onExportJson,
}: EditorTopBarProps) {
  const isMobile = useIsMobile();

  return (
    <header className="sticky top-0 z-40 flex h-12 shrink-0 items-center gap-2 border-b bg-background px-3 sm:gap-3 sm:px-4 print:hidden">
      <Link href="/">
        <h1 className="font-bold italic pr-1 bg-clip-text text-transparent bg-linear-to-r from-emerald-500 to-teal-600">
          Resuma
        </h1>
      </Link>

      <SaveStatusIndicator status={saveStatus} />

      <div className="flex-1" />

      <ThemeToggle />

      <ButtonGroup>
        <Button
          type="button"
          onClick={onUndo}
          disabled={!canUndo}
          aria-label="Urungkan"
          variant="outline"
          size={isMobile ? "icon-sm" : "sm"}
        >
          <Undo2Icon className="size-4" />
          <span className="hidden md:flex">Urungkan</span>
        </Button>
        <Button
          type="button"
          onClick={onRedo}
          disabled={!canRedo}
          aria-label="Ulangi"
          variant="outline"
          size={isMobile ? "icon-sm" : "sm"}
        >
          <Redo2Icon className="size-4" />
          <span className="hidden md:flex">Ulangi</span>
        </Button>
      </ButtonGroup>

      <ButtonGroup>
        <Button
          type="button"
          onClick={onExportPdf}
          disabled={isExportingPdf}
          aria-busy={isExportingPdf}
          size="sm"
        >
          {isExportingPdf ? (
            <Spinner aria-hidden className="size-4" />
          ) : (
            <DownloadIcon className="size-4" />
          )}
          {/* Label yields under 360px; `sr-only`, not `hidden`, keeps the button's name. */}
          <span className="sr-only min-[360px]:not-sr-only">
            {isExportingPdf ? "Membuat PDF…" : "Unduh PDF"}
          </span>
        </Button>
        <ButtonGroupSeparator className="bg-primary-foreground/25" />
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <Button type="button" size="icon-sm" aria-label="Opsi berkas lainnya">
                <ChevronDownIcon className="size-4" />
              </Button>
            }
          />
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem onClick={onExportJson}>
              <FileDownIcon className="size-4" />
              Ekspor JSON
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ButtonGroup>
    </header>
  );
}

function SaveStatusIndicator({ status }: { status: SaveStatus }) {
  // "idle" only holds until the first save of the session — nothing to report yet.
  if (status === "idle") return null;

  const config = {
    saving: {
      icon: <Spinner aria-hidden className="size-3.5" />,
      label: "Menyimpan…",
      className: "text-muted-foreground",
    },
    saved: {
      icon: <CheckIcon className="size-3.5" />,
      label: "Tersimpan",
      className: "text-muted-foreground",
    },
    error: {
      icon: <TriangleAlert className="size-3.5" />,
      label: "Gagal menyimpan",
      className: "text-destructive",
    },
  }[status];

  return (
    <span
      className={cn("flex items-center gap-1 text-xs", config.className)}
      role="status"
      aria-live="polite"
    >
      {config.icon}
      <span className="hidden sm:inline">{config.label}</span>
    </span>
  );
}
