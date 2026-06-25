import React from "react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/917893138625?text=Hi!%20I%27m%20interested%20in%20Rudra%20Gym%20Warangal."
      target="_blank" rel="noopener noreferrer"
      title="Chat on WhatsApp"
      className="wa-float"
      style={{
        position:"fixed", bottom:28, right:28, zIndex:200,
        width:58, height:58, borderRadius:"50%",
        background:"#25D366",
        display:"flex", alignItems:"center", justifyContent:"center",
        boxShadow:"0 8px 28px rgba(37,211,102,0.45)",
        textDecoration:"none",
      }}
    >
      <svg viewBox="0 0 32 32" fill="white" width="28" height="28">
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.5 2.1 7.9L.4 31.6l8-2.1c2.3 1.2 4.9 1.9 7.6 1.9 8.6 0 15.6-7 15.6-15.6C31.6 7.4 24.6.4 16 .4zm0 28.5c-2.5 0-5-.7-7.1-1.9l-.5-.3-5 1.3 1.3-4.8-.3-.5C3.1 21 2.2 18.5 2.2 16 2.2 8.4 8.4 2.2 16 2.2S29.8 8.4 29.8 16 23.6 28.9 16 28.9zm8.6-9.7c-.5-.2-2.8-1.4-3.2-1.5-.4-.2-.7-.2-1 .2-.3.5-1.2 1.5-1.4 1.8-.3.3-.5.4-1 .1-.5-.2-2-.7-3.8-2.3-1.4-1.2-2.3-2.7-2.6-3.2-.3-.5 0-.7.2-1l.7-.8c.2-.3.3-.5.4-.8.1-.3 0-.6-.1-.8-.1-.2-1-2.4-1.3-3.3-.4-.9-.7-.8-1-.8h-.9c-.3 0-.8.1-1.2.6S7.9 13 7.9 15.2c0 2.2 1.6 4.3 1.8 4.6.2.3 3.1 4.8 7.6 6.7 1.1.5 1.9.7 2.6.9 1.1.3 2.1.3 2.9.2.9-.1 2.8-1.1 3.2-2.2.4-1.1.4-2 .3-2.2-.2-.2-.5-.3-1-.5z"/>
      </svg>
    </a>
  );
}