import React from "react";
import contactData from "@/data/contactData";

export default function ContactComp() {
    return (
        <section id="contact" className="h-screen flex flex-col gap-20 justify-center items-center">
            <h1 className="text-4xl font-extrabold">Contact Me!!</h1>
            <div className="flex flex-col gap-10">
                {contactData.map(({ name, icon: Icon, reach, display, styling }) => (
                    <div key={name} className="flex flex-row gap-4">
                        <Icon size={40} className={styling}/>
                        <p>{display}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}