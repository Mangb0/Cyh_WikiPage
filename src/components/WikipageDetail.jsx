import { useParams } from "react-router-dom";

const WikipageDetail = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>Wikipage{id} Detail</h1>
      <p>Wikipage{id} content</p>
    </div>
  );
};

export default WikipageDetail;
