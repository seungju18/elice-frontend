import { Button } from "../styles/FilterButton.style";
import { ChipURL } from "../types/ChipType";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const base_url = "http://localhost:3000";

interface FilterButtonProps {
  buttonName: string;
  filterCondition: ChipURL;
  id: string;
}

export default function FilterButton({
  buttonName,
  filterCondition,
  id,
}: FilterButtonProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleButton = () => {
    const cur_url = new URL(window.location.href);
    let params = Array.from(new URLSearchParams(cur_url.search));
    const foundIndex = params.findIndex(
      ([key, value]) => key === filterCondition && value === id
    );
    if (foundIndex !== -1) {
      params.splice(foundIndex, 1);
    } else {
      params.push([filterCondition, id]);
    }
    const newParams = new URLSearchParams(params);
    console.log(newParams);
    navigate(`?${newParams}`);
    setClicked((isClicked) => !isClicked);
  };
  return (
    <Button isClicked={clicked} onClick={handleButton}>
      {buttonName}
    </Button>
  );
}
