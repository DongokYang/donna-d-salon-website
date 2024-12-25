import { useEffect, useState } from "react";

export default function Gallery() {
  const [imageUrls, setImageUrls] = useState([]);

  // Load JSON file when the component mounts
  useEffect(() => {
    fetch("/displayUrl.json") // Make sure the file is in the `public` folder of your React project
      .then((response) => response.json())
      .then((data) => setImageUrls(data))
      .catch((error) => console.error("Error loading JSON:", error));
  }, []);

  const handleImageClick = () => {
    window.open("https://www.instagram.com/donnadstylistsalon/", "_blank");
  };

  return (
    <div className="min-h-screen py-[5rem] bg-customBlack flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-customGoldStart to-customGoldEnd bg-clip-text text-transparent">
        Gallery
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        Take a look at our salon and some of our happy customers!
      </p>
      <div className="grid grid-cols-4 gap-4">
        {imageUrls.map((url, index) => (
          <div
            key={"index"}
            className="w-48 h-48 bg-gray-300 flex items-center justify-center"
            onClick={handleImageClick}
          >
            <img
              src={
                "https://scontent.cdninstagram.com/v/t51.29350-15/407702271_354843890561633_5637483702302939229_n.heic?stp=dst-jpg_e35_tt6&_nc_cat=104&ccb=1-7&_nc_sid=18de74&_nc_ohc=BaiJ9ccEaYYQ7kNvgHnEUI1&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=ANo9K5cEAAAA&_nc_gid=ACi9kR2HTpGExR1JsoaL8p2&oh=00_AYAQTr2igIEJ96P96AUe-609wIqm80Sg1V7G89aXR15Ixg&oe=676EC02E"
              } // Dynamically load the image URL
              alt={`Gallery Image ${index + 1}`}
              className="object-cover w-full h-full"
              onError={(e) => {
                // Handle broken images by setting a placeholder
                e.target.src =
                  "https://via.placeholder.com/150?text=Image+Not+Found";
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
