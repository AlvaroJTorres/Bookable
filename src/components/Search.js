import styled from "@emotion/styled";

const SearchRow = styled.div`
  display: flex;
`;

const StyledInput = styled.input`
  width: 70%;
  border: none;
  background: #faf2ed;
  padding: 10px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: block;
`;

const StyledButton = styled.button`
  padding: 10px;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  display: block;
  margin: 0;
`;

export default function Search({ query, setQuery, placeholder, onSearch }) {
  return (
    <SearchRow>
      <StyledInput
        type="text"
        placeholder={placeholder}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <StyledButton onClick={onSearch}>Search</StyledButton>
    </SearchRow>
  );
}
