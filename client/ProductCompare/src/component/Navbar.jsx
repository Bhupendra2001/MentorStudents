import React from 'react'
import styled from 'styled-components'
import {Link}  from 'react-router-dom'

import  logo from  '../img/bhupendra.jpg'


const Container = styled.div`
height : 70px;
border : 1px solid red;
display : flex;
align-items : center;
justify-content : space-between;


`
const Left = styled.div`

`
const Right = styled.div`
display : flex;
gap : 20px;
margin-right : 20px;


`
const List = styled.li`


list-style : none;
`
const Image = styled.img`
border : 2px solid gray;
border-radius : 10px ;
margin-left : 10px;
width : 80px;`

export const Navbar = () => {
  return (
    <Container>
        <Left>
            <Image src={logo}/>
        </Left>
        <Right>

           <Link style={{textDecoration: "none"}} to={'/'}>
           <List>Home</List>
           </Link>  
           <Link style={{textDecoration: "none"}} to={'/compare'}>
            <List>Compare Page</List>
           </Link>
           <Link style={{textDecoration: "none"}} to={'/create'}>
            <List>Create Product</List>
           </Link>
        </Right>
    </Container>
  )
}
