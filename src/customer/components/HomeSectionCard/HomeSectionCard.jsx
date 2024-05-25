import React from "react";

const HomeSectionCard = () => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-full">
      <div className="h-48 w-full">
        <img
          className="object-cover object-top w-full h-full rounded-t-lg hover:scale-110 transition duration-500"
          src="https://rukminim2.flixcart.com/image/612/612/xif0q/trouser/k/0/n/36-bi-trouser-combraided-original-imagqtjmvshkqdyt.jpeg?q=70"
          alt=""
        />
      </div>
      <div className="p-4 w-full ">
        <h3 className="text-lg font-medium text-gray-900">Tommy Hillfigure</h3>
        <p className="mt-2 text-sm text-gray-500">
          Lorem ipsum dolor sit amet
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
