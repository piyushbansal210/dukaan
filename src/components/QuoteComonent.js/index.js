import React, { useEffect, useState } from "react";

import axios from "axios";

import "./style.css";
import { Pagination, Tooltip } from "@mui/material";

const QuoteComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const [slogan, setSlogan] = useState("");
  const [copied, setCopied] = useState("");
  const [title, setTitle] = useState("Click To Copy");

  const fetchData = async () => {
    const info = { pageSize: 18, page, searchString: slogan };

    const options = {
      method: "POST",
      url: "https://quotel-quotes.p.rapidapi.com/search",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "a08ca9e7d9msh5b3197ff7119886p1bb713jsna9f9356d394c",
        "X-RapidAPI-Host": "quotel-quotes.p.rapidapi.com",
      },
      data: info,
    };

    await axios
      .request(options)
      .then(function (response) {
        setData(response.data);
        console.log(response);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const handleCopy = (quote) => {
    setCopied(quote.quote);
    setTitle("Copied");
    setTimeout(() => {
      setTitle("Click To Copy");
    }, 1000);
  };

  useEffect(() => {
    navigator.clipboard.writeText(copied);
  }, [copied]);

  return (
    <div
      className="quote"
      style={{
        paddingBottom: data.length > 0 ? "70px" : "20px",
      }}
    >
      <div>
        <div className="headerTitle">Free slogan maker</div>
        <p className="desc">
          Simply enter a term that describes your business, and get up to 1,000
          relevant slogans for free.
        </p>
        <p className="word">Word for your slogan</p>
        <div>
          <input
            type="text"
            placeholder="Enter a word"
            id="slogan"
            name="slogan"
            onChange={(e) => setSlogan(e.target.value)}
          />
        </div>
        <button className="buttonGenerate" onClick={() => fetchData()}>
          Generate Slogans
        </button>
      </div>
      {data.length > 0 && <div className="border" />}

      {data.length > 0 && (
        <div className="value">
          <span>We have generated 180 slogans for “{slogan}”</span>
          <div class="download_button">Download All</div>
        </div>
      )}

      <div className="qouteItems">
        {data?.map((qoute, index) => (
          <Tooltip
            title={title}
            placement={index % 2 ? "right" : "left"}
            onClick={() => handleCopy(qoute)}
          >
            <span className="quoteItem" key={qoute.id}>
              {qoute.quote.length > 75 && qoute.quote.slice(0, 75) + "..."}
            </span>
          </Tooltip>
        ))}
      </div>
      {data.length > 0 && (
        <div className="pagination">
          <Pagination
            count={10}
            color="primary"
            onChange={(e, p) => setPage(p)}
          />
        </div>
      )}
    </div>
  );
};

export default QuoteComponent;
