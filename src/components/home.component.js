import React, { Component, useEffect, useState } from "react";
import { allProducts } from "../action/product";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Grid, Card, Paper, styled } from "@material-ui/core";
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
    return dispatch(allProducts());
  }, [dispatch]);
  const { products } = props;
  console.log("products ->>>>", products);
  return (
    <header className="App-header">
      <Grid container spacing={2}>
        {products?.map((e) => {
          <Grid item xs={6} md={8}>
            <Item>{e.titile}</Item>
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
