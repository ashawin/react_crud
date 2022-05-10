import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleProduct } from "../../action/product";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import {
  Grid,
  Card,
  Paper,
  styled,
  CardMedia,
  CardContent,
  Typography,
  Container,
  Box,
} from "@material-ui/core";

function Product(props) {
  const { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProduct(id));
  }, [dispatch]);
  const { product } = props;
  return (
    <div className="App">
      {product ? (
        <Container maxWidth="lg">
          <Paper component={Box} mt={2}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={8}>
                <Card>
                  {/* {product.images} */}
                  <CardMedia
                    component="img"
                    height="450"
                    image={product.images[0]}
                    alt={product.brand}
                  />
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {product.title}
                    </Typography>

                    <Typography variant="body1">
                      {product.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            
            </Grid>
          </Paper>
        </Container>
      ) : null}
    </div>
  );
}
function mapStateToProps(state) {
  const {
    auth: { isLoggedIn },
    product: { product },
  } = state;
  return {
    isLoggedIn,
    product,
  };
}
export default connect(mapStateToProps)(Product);
