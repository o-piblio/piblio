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

export function SidebarRight({ indice = [], ...props }) {
  const montarIndice = indice.map((item) => ({
    topico: item.topico,
    url: `#${item.topico.toLowerCase().replace(/\s+/g, "-")}`,
    items: item.item?.map((subItem) => ({
      subtopico: subItem.subtopico,
      sub_url: `#${subItem.subtopico.toLowerCase().replace(/\s+/g, "-")}`,
    })),
  }));

  return (
    <Sidebar
      collapsible="none"
      className="sticky top-(--header-height) h-[calc(100svh-var(--header-height))]! hidden lg:flex border-l"
      {...props}
    >
      <SidebarHeader className="font-semibold">Nesta página</SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {montarIndice.map((item) => (
              <SidebarMenuItem key={item.topico}>
                <SidebarMenuButton asChild>
                  <Link href={item.url} className="font-medium" scroll>
                    {item.topico}
                  </Link>
                </SidebarMenuButton>
                {item.items?.length ? (
                  <SidebarMenuSub className="ml-0 border-l-0 px-1.5">
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
