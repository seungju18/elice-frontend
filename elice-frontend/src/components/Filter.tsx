import {
  FilterDiv,
  FilterDescription,
  FilterCategory,
} from "../styles/Filter.style";
import { ChipType, ChipURL } from "../types/ChipType";
import FilterButton from "./FilterButton";

interface FilterProps {
  chipName: string;
  chipCondition: ChipURL;
}

export default function Filter({ chipName, chipCondition }: FilterProps) {
  const FilterArr = Object.entries(ChipType[chipCondition]);
  return (
    <FilterDiv>
      <FilterDescription>
        <a>{chipName}</a>
      </FilterDescription>
      <FilterCategory>
        {FilterArr.map(([id, data]) => {
          return (
            <FilterButton
              key={id}
              buttonName={data.name}
              filterCondition={chipCondition}
              id={id}
            />
          );
        })}
      </FilterCategory>
    </FilterDiv>
  );
}
