import React from "react";

export default function MapSection() {
  return (
    <section id="map" className="py-28 bg-bg2">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 reveal">
          <p className="text-accent text-xs font-semibold tracking-widest uppercase mb-3">Find Us</p>
          <h2 className="font-display text-5xl md:text-6xl leading-none mb-4">
            WE'RE IN THE<br /><span className="text-accent">HEART OF WARANGAL</span>
          </h2>
          <p className="text-gray-400">Near Hanamkonda Bus Stand, Warangal, Telangana.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start reveal">
          <div className="rounded-2xl overflow-hidden border border-white/8 shadow-2xl" style={{ height: "420px" }}>
            <iframe
              title="Rudra Gym Location – Warangal"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60908.63252!2d79.5765!3d17.9784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3349264ec627bd%3A0xa5c9b22c5c4de986!2sWarangal%2C%20Telangana!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="flex flex-col gap-4">
            {[
              ["📍", "Address", "Near Hanamkonda Bus Stand\nWarangal, Telangana 506001"],
              ["📞", "Phone", "+91 98765 43210"],
              ["✉️", "Email", "hello@rudragym.in"],
              ["⏰", "Hours", "Mon–Sat: 5:00am – 11:00pm\nSunday: 6:00am – 9:00pm\nElite Members: 24/7"],
              ["🚗", "Parking", "Free parking available for all members"],
            ].map(([ic, l, v]) => (
              <div key={l} className="flex items-start gap-4 p-5 bg-bg border border-white/8 rounded-xl hover:border-accent/30 transition-colors">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center text-lg flex-shrink-0">{ic}</div>
                <div>
                  <div className="text-accent text-xs font-bold tracking-widest uppercase mb-1">{l}</div>
                  <div className="text-sm text-gray-400 whitespace-pre-line leading-relaxed">{v}</div>
                </div>
              </div>
            ))}
            <a
              href="https://maps.google.com/?q=Warangal,Telangana"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 border border-accent text-accent hover:bg-accent hover:text-white rounded text-sm font-bold tracking-widest uppercase transition-all"
            >
              Get Directions →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}