import React, { useEffect, useState } from "react";

import axios from "axios";

import "./style.css";
import { Pagination } from "@mui/material";

const QuoteComponent = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);

  const [slogan, setSlogan] = useState("");

  const fetchData = async () => {
    const info = { pageSize: 18, page, searchString: slogan };

    const options = {
      method: "POST",
      url: "https://quotel-quotes.p.rapidapi.com/search",
      headers: {
        "content-type": "application/json",
        "X-RapidAPI-Key": "b2edccb7famsh6579cae3dacffa8p135922jsn5e2bd510396a",
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

    console.log("fasdf");
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div className="quote">
      <h4>Free slogan maker</h4>
      <p>
        Simply enter a term that describes your business, and get up to 1,000
        relevant slogans for free.
      </p>
      <p>Word for your slogan</p>
      <div>
        <input
          type="text"
          placeholder="Enter Word..."
          id="slogan"
          name="slogan"
          onChange={(e) => setSlogan(e.target.value)}
        />
      </div>
      <button onClick={() => fetchData()}>Generate Slogans</button>
      <div className="qouteItems">
        {data?.map((qoute) => (
          <div className="quoteItem" key={qoute.id}>
            {qoute.quote.length > 75 && qoute.quote.slice(0, 75) + "..."}
          </div>
        ))}
      </div>
      {data.length > 0 && (
        <Pagination
          count={10}
          color="primary"
          onChange={(e, p) => setPage(p)}
        />
      )}
    </div>
  );
};

export default QuoteComponent;
