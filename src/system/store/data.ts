import { atom } from "nanostores";
import type { ListItemProps } from "../../library/listItem/index";
import type { DataProps } from "../../page/home";

export const $data = atom<DataProps>({});
export const $filteredData = atom<ListItemProps[]>([]);
export const $groups = atom<(string | undefined)[]>([]);
export const $searchTerm = atom<string>("");

export const setData = (newData: (DataProps)) => {
  $data.set(newData);
};

export const setFilteredData = (newData: (ListItemProps[])) => {
  $filteredData.set(newData);
};

export const setGroups = (groups: (string | undefined)[]) => {
  $groups.set(groups.filter((group): group is string => typeof group === "string"));
};


export const setSearchTerm = (term: string) => {
  $searchTerm.set(term);
};
