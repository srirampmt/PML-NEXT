"use client";

interface MapProps {
  iframeSrc: string;
  title?: string;
}

export default function Map({ iframeSrc, title = "Location Map" }: MapProps) {
  return (
    <section className="w-screen left-[50%] right-[50%] ml-[-50vw] mr-[-50vw] relative bg-white font-['Montserrat']">
      <div className="w-full max-w-[1440px] mx-auto px-4 md:px-10 pb-10">
        <div className="w-full max-w-[1280px] mx-auto">
          {/* Map Container */}
          <div className="w-full h-[250px] md:h-[350px] lg:h-[400px] rounded-[10px] overflow-hidden shadow-md">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d393421.54495261016!2d2.582007853010404!3d39.613561217286986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1297b8766606c129%3A0xb7eb9bff02d2ecc0!2sMajorca!5e0!3m2!1sen!2sin!4v1765204028351!5m2!1sen!2sin"
              title={title}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}