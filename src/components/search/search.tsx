import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export const Search: React.FC = () => {
  const navigate = useNavigate();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;

    if (query.length >= 3) {
      navigate(`/?search=${query}`);
    }
  };

  return (
    <Form>
      <Input type="text" placeholder="Search for movies..." onChange={handleInputChange} />
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
