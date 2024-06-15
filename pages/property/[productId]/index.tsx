import { Router, useRouter } from "next/router";
import { useReducer } from "react";

const PropertyDetail = () => {
  const router = useRouter();
  const { productId } = router.query;
  return <div>PropertyDetail {productId}</div>;
};
export default PropertyDetail;
