import { useEffect } from "react";
import { useStore } from '@nanostores/react'
import ColorList from "../modules/list";
import SearchHeader from "../modules/searchHeader";
import axios from "axios";
import type { ListItemProps } from "../library/listItem";
import { $data, setData, $groups, setGroups } from "../system /store/data";

export type DataProps = {
  colors?: ListItemProps[];
  count?: number;
}

export default function Home() {
  const data = useStore($data)
  const groups = useStore($groups)

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get("https://www.csscolorsapi.com/api/colors");
        setData(response.data);
        setGroups(response.data);
      } catch (err) {
        console.error(err);
      }
    })()
  }, [])

  return (
    <>
      <h1>Color Finder</h1>
      <SearchHeader groups={groups} />
      <ColorList colors={data?.colors} count={data?.count} />
    </>
  )
}
