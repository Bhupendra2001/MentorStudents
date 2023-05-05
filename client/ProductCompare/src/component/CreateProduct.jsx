import axios from "axios";
import React, { useState } from "react";
import styled from "styled-components";
import { Link} from 'react-router-dom'
import { Navbar } from "./Navbar";
const Container = styled.div`
  border: 2px solid red;
  height: 400px;
`;

const Form = styled.form`
  border: 1px solid black;
  border-radius : 10px;
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 220px;
  height: auto;
  padding : 10px;
`;
const InputContainer = styled.div``;

const Input = styled.input`

outline : none;
padding : 3px;
border-radius : 10px;
`;

const Title = styled.h1`
font-size : 30px;
color : teal;
text-align : center;
`;

const Label = styled.label`
color : blue;
`;
const Button = styled.button`

  width : auto;
  height : 30px;
  color: blue;
  margin : auto;
  margin-top : 20px;
  background-color: #fff;
  outline: none;
  padding : 5px;
  border : 2px solid green;
 border-radius : 5px;
  &:hover{
    background-color : blue;
    color : #fff
  }
`;

const CreateProduct = () => {
  const [payload, setPayload] = useState({
    name: "",
    price: "",
    ratings: "",
    description: "",
  });

  
  const handleChange = (e) => {
  
    setPayload({
      ...payload,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault()
 
    try{

        let res =  await axios.post('http://localhost:4000/products', payload)
        console.log(res.data.data)
        alert(res.data.message)
    }catch(err){
        alert(err.response.data.message)
    }
  }
  return (
    <Container>
      <Navbar/>
      <Title>Create Product Details </Title>

      <Form onSubmit={handleSubmit}>
        <InputContainer>
          <Label> Product Name</Label>
          <Input
            type="text"
            placeholder="product name"
            name="name"
            onChange={handleChange}
          />
        </InputContainer>

        <InputContainer>
          <Label>Product Price </Label>
          <Input
            type="number"
            placeholder="product price"
            name="price"
            onChange={handleChange}
          />
        </InputContainer>

        <InputContainer>
          <Label> Product Ratings</Label>
          <Input
            type="number"
            placeholder="product ratings"
            name="ratings"
            onChange={handleChange}
          />
        </InputContainer>

        <InputContainer>
          <Label>Description</Label>
          <Input
            type="text"
            placeholder="product description"
            name="description"
            onChange={handleChange}
          />
        </InputContainer>

        <Button type="submit">Submit</Button>
      </Form>
     
     

    </Container>
  );
};

export default CreateProduct;
