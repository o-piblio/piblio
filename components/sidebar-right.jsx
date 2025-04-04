// importações de dependências:
import * as React from "react";
import Link from "next/link";

// importações de componentes:
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function SidebarRight({ indice = [], titulo = "", ...props }) {

  const montarIndice = indice.map((item) => ({
    topico: item.topico,
    url: `#${item.topico.toLowerCase().replace(/\s+/g, "-")}`,
    items: item.subtopicos?.map((subtopico) => ({
      subtopico: subtopico.subtopico,
      sub_url: `#${subtopico.subtopico.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  }));

  return (
    <Sidebar
      collapsible="none"
      className="sticky top-(--header-height) h-[calc(100svh-var(--header-height))]! hidden lg:flex border-l"
      {...props}
    >
      <SidebarContent>
        <SidebarGroup>
        <SidebarHeader className="font-semibold">Nesta página</SidebarHeader>
          <SidebarMenu>
            <SidebarHeader>
              <Link
                href={`#${titulo.toLowerCase().replace(/\s+/g, "-")}`}
                scroll
              >
                {titulo}
              </Link>
            </SidebarHeader>
            {montarIndice.map((item) => (
              <SidebarMenuItem key={item.topico}>
                <SidebarMenuButton asChild>
                  <Link href={item.url} className="font-medium" scroll>
                    {item.topico}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-2 border-l-0 px-1.5">
                    {item.items.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.subtopico}>
                        <SidebarMenuSubButton asChild>
                          <Link href={subItem.sub_url} scroll>
                            {subItem.subtopico}
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                ) : null}
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};
