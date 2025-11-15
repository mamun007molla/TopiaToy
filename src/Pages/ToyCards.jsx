import React, { useEffect } from "react";
import { useLoaderData, useParams } from "react-router";
import Toys from "../component/Toys";

const ToyDetails = () => {
    useEffect(() => {
    document.title = "Toys | ToyTopia";
  }, []);
  const { id } = useParams();
  const toy = useLoaderData();
  const filteredToy = toy.filter((t) => t.categoryId == id);
  
  return (
    <div>
      <h1 className=" text-2xl font-bold text-center">
        {filteredToy[0].subCategory}
      </h1>
      <div>
        {filteredToy.map((t) => <Toys t={t} key={t._id} />)}
      </div>
    </div>
  );
};

export default ToyDetails;
