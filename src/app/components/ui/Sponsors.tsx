import Image from "next/image";

const Sponsors = () => {
  return (
    <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8 py-8 mb-20">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center justify-items-center">
        <Image 
          src="/zapier.png"
          alt="zapier"
          width={60}
          height={60}
          className="w-auto h-auto max-h-[60px] object-contain"
        />
        <Image 
          src="/pipdrive.png"
          alt="pipdrive"
          width={60}
          height={60}
          className="w-auto h-auto max-h-[60px] object-contain"
        />
        <Image 
          src="/clbBank.png"
          alt="clbBank"
          width={60}
          height={60}
          className="w-auto h-auto max-h-[60px] object-contain"
        />
        <Image 
          src="/Z_logo.png"
          alt="Z_logo"
          width={60}
          height={60}
          className="w-auto h-auto max-h-[60px] object-contain"
        />
        <Image 
          src="/burnt.png"
          alt="burnt"
          width={60}
          height={60}
          className="w-auto h-auto max-h-[60px] object-contain"
        />
        <Image 
          src="/pandaDoc.png"
          alt="pandaDoc"
          width={60}
          height={60}
          className="w-auto h-auto max-h-[60px] object-contain"
        />
        <Image 
          src="/moz.png"
          alt="moz"
          width={60}
          height={60}
          className="w-auto h-auto max-h-[60px] object-contain"
        />
      </div>
    </div>
  );
};

export default Sponsors;
