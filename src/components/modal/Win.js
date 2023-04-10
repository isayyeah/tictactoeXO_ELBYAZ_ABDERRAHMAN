import React, { useContext } from "react";
import { GameContext } from "../../context/GameContex";
import Oicon from "../icons/Oicon";
import Xicon from "../icons/Xicon";

const Win = () => {
  const { winner, handleNextRound, handleReset } = useContext(GameContext);
  return (
    <div className="score">
      {winner && winner !== "no" ? (
        <>
          <p>Vous avez gagné !!</p>
          <h3
            className={`score__title ${
              winner === "o" ? "text-yellow" : "text-blue"
            } `}
          >
            {winner === "x" && <Xicon />}
            {winner === "o" && <Oicon />}
            Prendre le tour
          </h3>
        </>
      ) : (
        <h3 className="score__title text-yellow">Aucun Gagnant !</h3>
      )}
      <div className="score__btns">
        <button className="btn btn-sm" onClick={handleReset}>
          Quitter
        </button>
        <button
          className={`btn   btn-sm ${
            winner === "x" ? "btn-yellow" : "btn-blue"
          }`}
          onClick={handleNextRound}
        >
          Tour Suivant
        </button>
      </div>
    </div>
  );
};

export default Win;
