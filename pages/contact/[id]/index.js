import { useRouter } from "next/router";

const Single = () => {
  const route = useRouter();
  console.log(route.query.id);
  return `Singleee ${route.query.id}`;
};

export default Single;
