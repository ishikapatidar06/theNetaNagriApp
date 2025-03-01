import { FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

const Buttons = () => {
  const phoneNumber = "8821909217";

  const handleWhatsAppRedirect = () => {
    const whatsAppURL = `https://wa.me/+91${phoneNumber}`;
    window.location.href = whatsAppURL;
  };

  const handleMailRedirect = () => {
    const senderEmail = "thenetanagri@gmail.com";
    const subject = "Subject of the email";
    const body = "Body of the email";

    const mailtoLink = `mailto:${senderEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const handleInstagram = () => {
    window.location.href =
      "https://www.instagram.com/thenetanagri.app?igsh=a3hpNW15eDEzcW8w";
  };

  return (
    <div className="fixed right-0 top-0 h-screen flex flex-col justify-center items-end mr-4 z-20">
      <div className="flex flex-col items-end space-y-4">
        {/* WhatsApp Button */}
        <div
          onClick={handleWhatsAppRedirect}
          className="relative flex items-center justify-end bg-green-500 p-2 rounded-lg"
        >
          <FaWhatsapp
            size={30}
            className="hidden md:block cursor-pointer"
            color="white"
          />
          <FaWhatsapp
            size={25}
            className="md:hidden block cursor-pointer"
            color="white"
          />
          <div className="hidden absolute right-8 bg-gray-800 text-white p-2 rounded shadow-lg whitespace-nowrap group-hover:block">
            WhatsApp
          </div>
        </div>

        {/* Message Button */}
        <div
          onClick={handleMailRedirect}
          className="relative flex items-center justify-end bg-blue-500 p-2 rounded-lg"
        >
          <FaEnvelope
            size={30}
            className="hidden md:block cursor-pointer"
            color="white"
          />
          <FaEnvelope
            size={25}
            className="md:hidden block cursor-pointer"
            color="white"
          />
          <div className="hidden z-50 absolute right-8 bg-gray-800 text-white p-2 rounded shadow-lg whitespace-nowrap group-hover:block">
            Mail
          </div>
        </div>

        {/* Location Button */}
        <div
          onClick={handleInstagram}
          className="relative flex items-center justify-end bg-pink-600 p-2 rounded-lg"
        >
          <FaInstagram
            size={30}
            className="hidden md:block cursor-pointer"
            color="white"
          />
          <FaInstagram
            size={25}
            className="md:hidden block cursor-pointer"
            color="white"
          />
          <div className="hidden absolute right-8 bg-gray-800 text-white p-2 rounded shadow-lg whitespace-nowrap group-hover:block">
            Location
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buttons;
