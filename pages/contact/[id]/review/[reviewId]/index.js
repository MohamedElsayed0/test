import { useRouter } from "next/router";
import React from "react";

const ReviewId = () => {
  const route = useRouter();

  return <div>reviewId {route.query.reviewId}</div>;
};
export default ReviewId;
