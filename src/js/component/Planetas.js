import React from "react";
import { element } from "prop-types";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

fetch("https://www.swapi.tech/api/planets", requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));

const MostrarData = (data) => {
  console.log(data);
};
