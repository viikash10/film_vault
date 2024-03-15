import React from "react";

function MoviesCard({ imageUrl, title }) {
  return (
    <div
      style={{
        backgroundImage: `url('${imageUrl}')`,
      }}
      className="h-[40vh] w-[140px] hover:scale-110 duration-300 bg-center bg-cover rounded-xl hover:cursor-pointer flex flex-col justify-end"
    >
      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 p-4 bg-cover">
        {title}
      </div>
    </div>
  );
}

export default MoviesCard;
