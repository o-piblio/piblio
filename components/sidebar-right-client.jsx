'use client'
import { useIndice } from "@/contexts/IndiceContext";
import { SidebarRight } from "@/components/sidebar-right";

export default function SidebarRightClient() {
  const { indice } = useIndice();
  return <SidebarRight indice={indice} />;
}
