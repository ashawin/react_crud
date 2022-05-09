import React, { Component, useEffect, useState } from "react";
import { allProducts } from "../action/product";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { Routes, Route, Link, BrowserRouter, Router } from "react-router-dom";
function Home(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    return dispatch(allProducts());
  }, [dispatch]);
  const { products } = props;
  console.log("products ->>>>", products);
  return (
    <header className="App-header">
      {products?.map((e) => {
        return <p>{e.title}</p>;
      })}
    </header>
  );
}
function mapStateToProps(state) {
  const { auth:{isLoggedIn},product:{products} } = state; 
  return {
    isLoggedIn, 
    products,
  };
}
export default connect(mapStateToProps)(Home);
