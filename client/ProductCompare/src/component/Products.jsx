import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
margin 0px;

`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: auto;
  text-align: center;
  margin-bottom: 10px;
  border-radius: 20px;
`;
const Title = styled.h2`
  color: blue;
  text-align: center;
`;
const Price = styled.span`
  color: green;
`;
const Name = styled.span`
  color: teal;
`;
const Ratings = styled.p`
  color: red;
`;

const Left = styled.div`
  matgin: auto;
`;
const Right = styled.div`
  padding: 10px;
`;

const DeleteProduct = styled.button`
  background-color: #fff;
  color: red;
  margin: 10px;
`;

const UpdateProduct = styled.button`
  background-color: #fff;
  color: green;
  margin: 10px;
`;

export const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");

        setProducts(response.data.data);
      } catch (err) {
        //  alert("somthing is wrong");
      }
    };
    getProduct();
  }, []);

  const Deletehandle = async (e) => {
    console.log(e.target.value);
    try {
      let response = await axios.delete(
        `http://localhost:4000/products/${e.target.value}`
      );

      if (response) alert(response.data.message);
    } catch (err) {
      alert(err.response.data.message);
    }
  };

  return (
    <Container>
      <div>
        <Navbar />
      </div>
      <Title>ALL Products</Title>
      <hr />

      {products.map((item) => (
        <Wrapper
          style={{ border: "2px solid black" }}
          item={item}
          key={item._id}
        >
          <Left>
            <Name> Product : {item.name}</Name>

            <Ratings> Ratings : {item.ratings}</Ratings>

            <Price> Price : ₹{item.price}</Price>
          </Left>
          <Right>
            <DeleteProduct value={item._id} onClick={Deletehandle}>
              Delete
            </DeleteProduct>
            <UpdateProduct>
              <Link
                style={{ textDecoration: "none" }}
                to={`/update/${item._id}`}
              >
                Update
              </Link>
            </UpdateProduct>
          </Right>
        </Wrapper>
      ))}
      <hr />
    </Container>
  );
};
