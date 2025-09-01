"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function FloatingWhatsAppButton() {
  return (
    <div style={{ position: "fixed", bottom: "20px", left: "20px", zIndex: 5 }}>
      <FloatingWhatsApp
        phoneNumber="+6285730134736"
        accountName="Grahaco Support"
        avatar="/placeholder-user.jpg"
        statusMessage="Online"
        chatMessage="Halo! 🤝 Ada yang bisa kami bantu?"
        className="md:w-14 md:h-14 w-12 h-12"
      />
    </div>
  );
}
