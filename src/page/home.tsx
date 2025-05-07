//import './App.css'

import { useEffect, useState } from "react";
import ColorList from "../modules/list";
import SearchHeader from "../modules/searchHeader";
import axios from "axios";
import type { ListItemProps } from "../library/listItem";

export type DataProps = {
  colors?: ListItemProps[];
  count: number;
  message: string;
}

export default function Home() {

  const [data, setData] = useState<DataProps>();

  useEffect(() => {

    (async () => {
      try {
        const response = await axios.get("https://www.csscolorsapi.com/api/colors");
        const data = response.data;
        setData(data); // use split if you have to, I dont think you need that.
      } catch (err) {
        console.error(err);
      }
    })()

  }, [])

  return (
    <>
      <h1>Hello World</h1>
      <SearchHeader />
      <ColorList colors={data?.colors} />
    </>
  )
}
