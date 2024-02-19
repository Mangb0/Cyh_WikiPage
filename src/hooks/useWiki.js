import axios from "axios";
import { useState } from "react";

const useWiki = () => {
  const [wikipageList, setWikipageList] = useState([]);
  const [wikipageObj, setWikipageObj] = useState({
    title: "",
    content: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const getWikipageList = async () => {
    setIsLoading(true);
    const res = await axios.get("http://localhost:3001/wikipage");
    setWikipageList(res.data);
    setIsLoading(false);
    return res.data;
  };

  const getWikipageDetail = async (wikipageId) => {
    setIsLoading(true);
    const res = await axios.get(`http://localhost:3001/wikipage/${wikipageId}`);
    setIsLoading(false);

    setWikipageObj(res.data);
  };

  const writeWikipage = async (wikipageObj) => {
    await axios.post(`http://localhost:3001/wikipage`, wikipageObj);
  };

  const updateWikipage = async (id, wikipageObj) => {
    await axios.put(`http://localhost:3001/wikipage/${id}`, wikipageObj);
  };

  return {
    getWikipageList,
    getWikipageDetail,
    writeWikipage,
    updateWikipage,
    isLoading,
    wikipageList,
    wikipageObj,
  };
};

export default useWiki;
