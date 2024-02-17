import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const WikipageDetail = () => {
  const { id } = useParams();

  const [wikipageObj, setWikipageObj] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const getWikipageDetail = async () => {
    const res = await axios.get(`http://localhost:3001/wikipage/${id}`);
    setWikipageObj(res.data);
    setIsLoading(false);
    console.log(res.data);
  };

  useEffect(() => {
    getWikipageDetail();
  }, []);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>{wikipageObj.title} Detail</h1>
          <p>{wikipageObj.content}</p>
        </div>
      )}
    </>
  );
};

export default WikipageDetail;
