import React, { useState } from "react";
import styled from "styled-components";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const Conatiner = styled.div`

padding 10px;
border : 1px solid teal;
margin : auto;
width : 500px;
`;

const Title = styled.h1`
text-align : center;
color : blue;`;

const Form = styled.form`
display : flex;
flex-direction : column;
margin : auto;
width : 240px;
text-align: center;
border : 2px solid gray;`;

const Input = styled.input`
padding : 5px;
border-radius : 10px;
outline : none;
margin-bottom : 5px;
`;

const Label = styled.label`
color : teal;
`;

const InputContainer = styled.div`

`;
const Button = styled.button`
background-color : #fff;
outline : none;
border : 2px solid teal;
border-radius : 10px;
padding : 5px;
width : 100px;
margin : auto;
margin-bottom : 5px;
`;

export const UpdateProduct = () => {
  const [payload, setPayload] = useState({
    name: "",
    price: "",
    ratings: "",
    description: "",
  });
  const nevigate = useNavigate();
  const { id } = useParams();
  const handleChange = (e) => {
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let res = await axios.put(`http://localhost:4000/products/${id}` , payload);
      if (res) alert("updated successfully");
      nevigate("/");
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return (
    <Conatiner>
      <Title>Update page</Title>
      <hr/>
      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label>Product Name</Label>
          <Input
            type="text"
            placeholder="name"
            name="name"
            onChange={handleChange}
          />
        </InputContainer>

        <InputContainer>
          <Label>Product Price</Label>
          <Input
            type="number"
            placeholder="price"
            name="price"
            onChange={handleChange}
          />
        </InputContainer>

        <InputContainer>
          <Label>Product Ratings</Label>
          <Input
            type="number"
            placeholder="rating"
            name="ratings"
            onChange={handleChange}
          />
        </InputContainer>

        <InputContainer>
          <Label>Product Description</Label>
          <Input
            type="text"
            placeholder="description"
            name="description"
            onChange={handleChange}
          />
        </InputContainer>

        <Button type="submit">Update</Button>
      </Form>
    </Conatiner>
  );
};
