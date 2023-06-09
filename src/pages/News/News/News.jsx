import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorsInsight from "../EditorsInsights/EditorsInsight";
import useTitle from "../../../hooks/useTitle";

const News = () => {
  const news = useLoaderData();
  const { _id, title, details, image_url, category_id } = news;
  useTitle('News Details');
  return (
    <div>
      <Card className="my-4">
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="danger">
              {" "}
              <FaArrowLeft /> All News in this Category
            </Button>
          </Link>
        </Card.Body>
      </Card>
      <EditorsInsight />
    </div>
  );
};

export default News;
