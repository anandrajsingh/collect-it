import { SidebarProvider} from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/authenticated/app-sidebar"
import { AppNavBar } from "@/components/authenticated/app-navbar"

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <AppNavBar>
          <div></div>
        </AppNavBar>
        {children}
      </main>
    </SidebarProvider>
  )
}
