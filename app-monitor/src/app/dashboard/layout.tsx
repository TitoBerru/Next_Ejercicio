import { commandRepository } from "@/infrastructure/repository/commands";
import { Sidebar } from "@/presentation/components";
import { CardCommand } from "@/presentation/components/card-command/CardCommand";
import Infobar from "@/presentation/components/Infobar/page";


export default function Layout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-row gap-40">

      <Sidebar />
      <main className="basis-1/2">
        <div className="basis-1/2">
          <Infobar />
        </div>
        {children}
      </main>
    </div>
  );
}