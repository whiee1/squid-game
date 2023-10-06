import React, { useEffect } from "react";
import axios from "axios";

export const SendFinalScore = ({ finalScore }) => {
  useEffect(() => {
    const sendScore = async () => {
      try {
        const response = await axios.post(
          "https://customer-api.krea.se/coding-tests/api/squid-game",
          {
            answer: finalScore,
            name: "Malin Malmgren",
          }
        );
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    sendScore();
  }, [finalScore]);

  return <h1>Final Score {finalScore}</h1>;
};
