import React from "react";
import { search } from "react-icons-kit/fa/search";
import { Icon } from "react-icons-kit";
import styled from "styled-components";

const Search = () => {
  return (
    <SearchWrapper>
      <input id="" type="text" name="" />
      <Icon icon={search} />
    </SearchWrapper>
  );
};

export default Search;
const SearchWrapper = styled.div`
  display: flex;
  i {
    position: relative;
    right: 2em;
    color: grey;
  }
`;
