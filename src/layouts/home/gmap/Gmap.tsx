import React from "react";
import SimpleMap from "@/components/map/Map";

function GmapSection() {
  return (
    <section id="contactUs" className="px-[80px] space-y-5">
      <div className="font-bold text-2xl text-black w-full text-center">
        Categories
      </div>
      <div className="grid grid-cols-2 gap-2">
        <SimpleMap />
        <div className="h2">
          <div>Alamat : jalan gatot subroto 45</div>
          <div>Email : linktree@suport.com</div>
        </div>
      </div>
    </section>
  );
}

export default GmapSection;
