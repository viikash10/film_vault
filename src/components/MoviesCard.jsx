import React from "react";

function MoviesCard() {
  return (
    <div
      style={{
        backgroundImage: `url('https://www.tallengestore.com/cdn/shop/products/Joker_-_Put_On_A_Happy_Face_-_Joaquin_Phoenix_-_Hollywood_English_Movie_Poster_3_de5e4cfc-cfd4-4732-aad1-271d6bdb1587.jpg?v=1579504979')`,
      }}
      className="h-[40vh] w-[140px] hover:scale-110 duration-300 bg-center bg-cover rounded-xl hover:cursor-pointer"
    ></div>
  );
}

export default MoviesCard;
