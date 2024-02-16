import React from "react";
import Button from "./Button";

const ButtonList = () => {
  return (
    <div className="flex">
       <Button name="All" />
       <Button name="Gaming" />
       <Button name="Movies" />
       <Button name="Music" />
       <Button name="Mixes" />
       <Button name="NEET" />
       <Button name="JEE" />
       <Button name="Trending" />
       <Button name="Dramedy" />
       <Button name="Comedy" />
       <Button name="Stories" />
       <Button name="Live" />
    </div>
  )
};

export default ButtonList;