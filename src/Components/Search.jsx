import { styled } from "styled-components";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


function Search() {

  const [input, setInput] = useState('');

  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    navigate('/searched/'+input);
  }

  return (
    <FormStyle  onSubmit={submitHandler}>
      <FaSearch></FaSearch>
      <input
        type="text"
        value={input}
        onChange={(e) => {setInput(e.target.value)}}
      />
    </FormStyle>
  );
}

const FormStyle = styled.form`
    margin: 2rem 0;
    position: relative;
    width: 100%;
    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        width: 100%;
        padding: 1rem 3rem;
        border-radius: 1rem;
        outline: none;
    }
    svg{
        position: absolute;
        top: 50%;
        left: 0%;
        transform: translate(100%, -50%);
        color: white;
    }
`;

export default Search