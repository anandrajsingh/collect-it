"use client"
import { useState } from "react";
import Navbar from "../components/section/Navbar";
import SideBar from "../components/section/Sidebar";
import { PanelRightClose } from "lucide-react";

export default function Home() {
    const [sideOpen, setSideOpen] = useState(true)
    return (
        <div className="flex">
            <div>
                {sideOpen ? (
                    <button className="hover:bg-stone-300 p-2 m-1 rounded-lg size-12" onClick={() => (setSideOpen(!sideOpen))}>
                        <PanelRightClose className="m-0 size-8" />
                    </button>
                ) : (
                    <SideBar  sideOpen={sideOpen} setSideOpen={setSideOpen} />
                )}
            </div>
            <div className="w-full">
                <Navbar />
                <div className="">Hello</div>
            </div>
        </div>
    )
}