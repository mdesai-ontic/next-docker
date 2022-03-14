import path from "path";

export default function Hey(props) {
  return <pre>{JSON.stringify(props, null, 2)}</pre>;
}

export function getStaticProps() {
  // const fs = require("fs");

  // const file = fs.readFileSync("../package.json");
  // console.log(file);

  const myPath = path.join("my", "path", __dirname);
  console.log(myPath);
  return {
    props: { myPath },
  };
}
