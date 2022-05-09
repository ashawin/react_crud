import React, { Component, useEffect, useState } from "react";
import { allProducts } from "../action/product";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Grid, Card, Paper, styled, CardMedia, CardContent, Typography } from "@material-ui/core";
import { Routes, Route, Link, BrowserRouter, Router } from "react-router-dom";
function Home(props) {
  const dispatch = useDispatch();
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  useEffect(() => {
     dispatch(allProducts());
  }, [dispatch]);
  const { products } = props;
  console.log("products ->>>>", products);
  return (
    <header className="App-header">
      <Grid container spacing={2}>
        {products?.map((item,i) => {
          console.log("data =>e", item);
          return <Grid item xs={12} md={3} key={i}>
            <Card>
              <CardMedia 
                component="img"
                height="194"
                image={item.images[0]}
                alt={item.brand}/>
              <CardContent>
                <Typography variant="h6" gutterBottom>{item.title}</Typography>
                <Typography variant="body1">{item.description}</Typography>
                {/* <Link to={}/> */}
              </CardContent>
            </Card>
          </Grid>;
        })}
      </Grid>
    </header>
  );
}
function mapStateToProps(state) {
  const {
    auth: { isLoggedIn },
    product: { products },
  } = state;
  return {
    isLoggedIn,
    products,
  };
}
export default connect(mapStateToProps)(Home);
