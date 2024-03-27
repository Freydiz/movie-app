import { useState } from 'react';
import styled from 'styled-components';

interface Props {
  onSearch: (query: string) => void;
}

export const Search: React.FC<Props> = (props) => {
  const { onSearch } = props;

  const [query, setQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" placeholder="Search for movies..." value={query} onChange={handleInputChange} />
    </Form>
  );
};

const Form = styled.form`
  width: 100%;

  @media (min-width: 993px) {
    width: 500px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid;
`;
