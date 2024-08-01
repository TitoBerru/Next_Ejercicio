import { Sidebar } from "@/presentation/components";
import Infobar from "@/presentation/components/Infobar/page";

export default function Layout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row gap-40">
      
    <Sidebar/>
   
    <main className="basis-1/2">
    <div className="grow h-14">
    <Infobar/>
    </div>
    
      {children}
    </main>
    </div>
  );
}