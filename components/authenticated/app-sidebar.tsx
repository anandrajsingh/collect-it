import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { Folder, Compass, Settings } from "lucide-react"; 

const items = [
  {
    title: "Collection",
    url: "collection",
    icon: Folder
  },
  {
    title: "Explore",
    url: "explore",
    icon: Compass
  },
  {
    title: "Settings",
    url: "settings",
    icon: Settings
  }
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader />
      <SidebarContent>
        <SidebarGroup />
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={`/${item.url}`} className="flex items-center gap-2 text-xl px-5 font-semibold">
                  <item.icon className="w-10 h-10"/>
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
