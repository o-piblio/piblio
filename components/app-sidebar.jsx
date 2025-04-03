"use client";

// importações de dependências:
import React from "react";

// importações de componentes:
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Sidebar,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { NavMain } from "@/components/nav-main";

// importações de ícones:
import { BadgeHelp, List, User } from "lucide-react";

// items do menu lateral:
// - `navMain` contém os grupos principais do menu lateral, cada um com seu título, ícone e itens.
// - cada item tem um título e um ícone.
// - `isActive` indica se o grupo está ativo ou não.
// - `title` é o título do grupo.
// - `icon` é o ícone do grupo.
// - `items` contém os subitens do grupo, cada um com seu título e URL.
// - `items` é um array de objetos, cada um representando um item do menu.
const data = {
  navMain: [
    {
      title: "Categorias",
      icon: List,
      isActive: true,
      items: [
        {
          title: "Autoajuda",
          url: "#",
        },
        {
          title: "Biografia",
          url: "#",
        },
        {
          title: "Ciência",
          url: "#",
        },
        {
          title: "Fantasia",
          url: "#",
        },
        {
          title: "Ficção científica",
          url: "#",
        },
        {
          title: "Não-ficção",
          url: "#",
        },
        {
          title: "Romance",
          url: "#",
        },
        {
          title: "Terror",
          url: "#",
        },
      ],
    },
    {
      title: "Autores",
      icon: User,
      items: [
        {
          title: "Brandon Sanderson",
          url: "#",
        },
        {
          title: "Isaac Asimov",
          url: "#",
        },
        {
          title: "Stephen King",
          url: "#",
        },
        {
          title: "Robert Jordan",
          url: "#",
        },
        {
          title: "George R.R. Martin",
          url: "#",
        },
        {
          title: "Agatha Christie",
          url: "#",
        },
        {
          title: "J.R.R. Tolkien",
          url: "#",
        },
        {
          title: "Arthur C. Clarke",
          url: "#",
        },
      ],
    },
    {
      title: "Tutoriais",
      icon: BadgeHelp,
      items: [
        {
          title: "Como contribuir",
          url: "#",
        },
        {
          title: "Como enviar livros",
          url: "#",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarHeader className="selet-none">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <DropdownMenu>
              <SidebarMenuButton size="lg" asChild className="cursor-pointer">
                <DropdownMenuTrigger className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src="https://githb.com/shadn.png" />
                    <AvatarFallback>
                      <p className="font-reenie text-2xl">pb</p>
                    </AvatarFallback>
                  </Avatar>

                  Entre ou crie uma conta
                </DropdownMenuTrigger>
              </SidebarMenuButton>
                <DropdownMenuContent align="start">
                  <DropdownMenuLabel>Conta</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Entrar</DropdownMenuItem>
                  <DropdownMenuItem>Criar conta</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <h2 className="pl-2 mt-5">Navegação</h2>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}
