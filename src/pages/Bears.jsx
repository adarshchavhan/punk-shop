import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Topbar from "../components/Topbar";
import axios from "axios";
import BearCard from "../components/BearCard";

const Bears = () => {
  const [bears, setBears] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);

  const handleKeyDown = async (e) => {
    if (e.key === "Enter" || e.key === "Tab") {
      const res = await axios.get(
        `https://api.punkapi.com/v2/beers?${query && `beer_name=${query}`}`
      );
      if (res.data) {
        setBears([...res.data]);
        setPage(1);
      }
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(
        `https://api.punkapi.com/v2/beers?${
          query && `beer_name=${query}&`
        }page=${page}&per_page=9`
      );
      if (res.data) {
        setBears((prev) => [...prev, ...res.data]);
      }
    };

    fetchData();
  }, [page]);

  useEffect(() => {
    const handleInfinteScroll = () => {
      if (
        Math.ceil(document.documentElement.scrollTop + window.innerHeight + 70) >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    };

    window.addEventListener("scroll", handleInfinteScroll);
    return () => {
      window.removeEventListener("scroll", handleInfinteScroll);
    };
  }, []);

  return (
    <>
      <Topbar {...{ query, setQuery, handleKeyDown }} />
      <BearsWrapper>
        {bears.length > 0 ? (
          bears.map((bear, i) => <BearCard key={i} bear={bear} />)
        ) : (
          <Message>No item Yet.</Message>
        )}
      </BearsWrapper>
    </>
  );
};

const BearsWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 15px;
  margin: auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
`;

const Message = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.dark};
`;

export default Bears;
