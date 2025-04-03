"use client";

// importação de dependências:
import React from "react";
import Link from "next/link"; 


// importação de componentes:
import { Button } from "@/components/ui/button";
import { Logo } from "./structure/logo";
import { Progress } from "./progress";
import { SearchForm } from "@/components/search-form";
import { Separator } from "@/components/ui/separator";
import { Toggle } from "./ui/toggle";
import { useSidebar } from "@/components/ui/sidebar";

// importação de ícones:
import { SidebarIcon } from "lucide-react";

export function SiteHeader() {
  const { toggleSidebar } = useSidebar();

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b">
      <div className="flex h-(--header-height) w-full items-center gap-2 px-4">
        <Button
          className="h-8 w-8"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4" />
        <Logo />

        <SearchForm className="w-full sm:ml-auto sm:w-auto" />
        <Button asChild variant="outline">
          <Link href="/contribuir">Contribua</Link>
        </Button>
        <Toggle />
      </div>
      <Progress />
    </header>
  );
}
