import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navbar } from "./Navbar";
import styled from "styled-components";

const Container = styled.div`
  border: 2px solid gray;
  width: 500px;
  height: auto;
  margin: auto;
  padding : 10px;
`;

const ProductTitle = styled.h3`
  color: green;
`;
const Table = styled.table`
  margin: auto;
  border: 2px solid red;
  margin-top: 30px;
`;
const TableRow = styled.tr``;
const TableHead = styled.th`
  border: 2px solid black;
  padding: 10px;
`;
const TableBody = styled.td`
  border: 2px solid black;
  color: blue;
`;

export const ComparePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await axios.get("http://localhost:4000/products");

        setProducts(response.data.data);
      } catch (err) {
        alert(err.response.data.message);
      }
    };
    getProduct();
  }, []);

  return (

    <Container>
      <Navbar/>
      <h2>Compare Two Products Table</h2>
      {products.map((item, ind) => (
        <Table item={item} key={item._id}>
          <ProductTitle>Product {ind + 1}</ProductTitle>
          <TableRow>
            <TableHead>Product Name</TableHead>

            <TableHead>Product Price</TableHead>

            <TableHead>Product Ratings</TableHead>
            <TableHead>Product Description</TableHead>
          </TableRow>
          <TableRow>
            <TableBody>{item.name}</TableBody>

            <TableBody>₹{item.price}</TableBody>

            <TableBody>{item.ratings}</TableBody>
            <TableBody>{item.description}</TableBody>
          </TableRow>
        </Table>
      ))}
    </Container>
  );
};
