export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start space-y-10 md:space-y-0 px-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start flex-shrink-0">
          <img
            src="src/assets/global/salonlogoWtext.png"
            alt="Salon Logo"
            className="h-30 md:h-36" // Adjusted height for better scaling
          />
        </div>

        {/* Info Section */}
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-16 w-full justify-between">
          {/* Salon Hours */}
          <div className="flex flex-col items-center md:items-start md:border-l md:border-gray-600 md:pl-6">
            <h3 className="text-lg font-semibold mb-2">SALON HOURS</h3>
            <p className="text-sm">Tue–Sat: 9:00am–6:00pm</p>
          </div>

          {/* Address */}
          <div className="flex flex-col items-center md:items-start md:border-l md:border-gray-600 md:pl-6">
            <h3 className="text-lg font-semibold mb-2">ADDRESS</h3>
            <p className="text-sm">1551 Arlington Street</p>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start md:border-l md:border-gray-600 md:pl-6">
            <h3 className="text-lg font-semibold mb-2">CONTACT</h3>
            <p className="text-sm">📞 (204) 599 3161 | (204) 813 1991</p>
            <p className="text-sm">📧 donnadstylist1551@gmail.com</p>
            <p className="text-sm">📸 @donnadstylistsalon</p>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-4">
        Copyright © 2024 Donna D Stylist Salon All rights reserved
      </div>
    </footer>
  );
}
