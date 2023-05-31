import React, { useState } from "react";

export const useSearchVideo = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [errors, handleError] = useState();

  const handleSearch = () => {
    const apiKey = `AIzaSyCM2u5ApEvK3i5uV5jdkqS6zyXp1RiOYn4`;
    const cx = `516061bff07e8485c`;
    const url = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${searchTerm}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {})
      .catch((error) => {
        handleError(error);
      });
  };

  return {
    searchTerm,
    setSearchTerm,
    handleSearch,
    errors,
  };
};

export default useSearchVideo;
