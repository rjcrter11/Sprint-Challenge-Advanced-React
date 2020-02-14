import React from "react";
import { useApi } from "../hooks/useApi";

const styles = {
  border: "1px solid black",
  width: "20%",
  margin: "1% auto"
};

function Players() {
  const { data } = useApi("http://localhost:5000/api/players");

  return (
    <div>
      <h2>Most Searched Players: </h2>
      {data &&
        data.map((player) => (
          <div key={player.id} style={styles}>
            <h2 data-testid="name"> Name: {player.name} </h2>
            <h3 data-testid="country">Country: {player.country} </h3>
            <p data-testid="searches">Searches: {player.searches} </p>
          </div>
        ))}
    </div>
  );
}
export default Players;
