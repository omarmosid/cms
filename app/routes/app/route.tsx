import { AppSidebar } from "@/components/app-sidebar";
import { CmsNav } from "@/components/cms-nav";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";

const CMSLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SidebarProvider>
        <AppSidebar />
        <main>
          {/* <CmsNav /> */}
          <div className="prose container p-4">
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
};

export default CMSLayout;
