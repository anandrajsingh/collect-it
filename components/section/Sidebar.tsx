"use client"
import { PanelRightOpen } from "lucide-react";

interface SideBarProps {
    sideOpen: boolean;
    setSideOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }

export default function SideBar(props: SideBarProps) {
    return (
        <div className="w-60 flex bg-slate-100 border min-h-screen">
            <button className="hover:bg-stone-300 p-2 m-1 rounded-lg size-12" onClick={() => (props.setSideOpen(!props.sideOpen))}>
                    <PanelRightOpen className="m-0 size-8" />
            </button>
            <div className="text-3xl font-bold p-2 m-1 size-fit">Menu</div>
        </div>
    )
}