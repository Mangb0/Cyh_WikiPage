import { createElement, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WikipageUpdate from "./WikipageUpdate";
import useWiki from "../hooks/useWiki";

const WikipageDetail = () => {
  const { id } = useParams();

  const [isUpdate, setIsUpdate] = useState(false);

  const {
    wikipageList,
    wikipageObj,
    getWikipageList,
    getWikipageDetail,
    updateWikipage,
    isLoading,
  } = useWiki();

  const handleUpdate = async (obj) => {
    await updateWikipage(id, obj);
    setIsUpdate(false);
  };

  useEffect(() => {
    if (isUpdate) return;
    getWikipageDetail(id);
    getWikipageList();
  }, [isUpdate]);

  const wrapper = (contentText) => {
    let modifiedContent = contentText;
    wikipageList.forEach((v) => {
      const { id, title } = v;
      const regex = new RegExp(`(?:<[^>]*>.*?<\\/[^>]*>)|${title}`, "g");
      modifiedContent = modifiedContent.replace(regex, (match) => {
        return match === title
          ? `<a href="/wikipage/${id}">${title}</a>`
          : match;
      });
    });

    return modifiedContent;
  };

  const parseHTML = (htmlString) => {
    const parser = new DOMParser();

    const parsedDocument = parser.parseFromString(htmlString, "text/html");
    return Array.from(parsedDocument.body.childNodes).map((node, index) => {
      if (node.nodeType === Node.TEXT_NODE) {
        return node.textContent;
      } else {
        const { tagName, attributes } = node;
        const props = {};

        for (let i = 0; i < attributes.length; i++) {
          props[attributes[i].name] = attributes[i].value;
        }

        return createElement(
          tagName.toLowerCase(),
          { ...props, key: index },
          parseHTML(node.innerHTML)
        );
      }
    });
  };

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isUpdate ? (
        <WikipageUpdate
          wikipageObj={wikipageObj}
          updateWikipage={handleUpdate}
        />
      ) : (
        <>
          <div>
            <h1>{wikipageObj.title}</h1>
            <div>
              {parseHTML(wrapper(wikipageObj.content)).map((node) => node)}
            </div>
          </div>
          <button onClick={() => setIsUpdate(true)}>수정</button>
        </>
      )}
    </>
  );
};

export default WikipageDetail;
