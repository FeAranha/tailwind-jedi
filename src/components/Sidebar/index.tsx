import { Search } from "lucide-react";
import { Logo } from "./Logo";

export function Sidebar() {
  return(
    <aside className="border-r border-zinc-300 dark:border-zinc-200 px-5 py-8 space-y-6">
      <Logo />

      <div className="flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-3">
        <Search className="h-5 w-5 to-zinc-500"/>
        <input 
          className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-500" 
          placeholder="Search" />
      </div>
    </aside>
  )
}