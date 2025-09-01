"use client";

import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function FloatingWhatsAppButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="+6281234567890"
      accountName="Grahaco Support"
      avatar="/placeholder-user.jpg"
      statusMessage="Typically replies instantly"
      chatMessage="Hello! How can we help you with our property services?"
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        zIndex: 9999,
      }}
      className="md:w-14 md:h-14 w-12 h-12"
    />
  );
}
