import Image from "next/image";
import { useRouter } from "next/router";

const SingleBlog = ({ name, image }) => {
  const router = useRouter();

  return (
    <div>
      {router.isFallback && <p>Loading...</p>}
      <p>SingleBlog: {name}</p>
      <Image src={image} alt={name} height={300} width={300} />
    </div>
  );
};

export const getStaticProps = async (context) => {
  const data = await fetch(
    `https://rickandmortyapi.com/api/character/${context.params.slug}`
  ).then((res) => res.json());
  return {
    props: {
      ...data,
    },
  };
};

export const getStaticPaths = () => {
  return {
    paths: [
      {
        params: {
          slug: "1",
        },
      },
      {
        params: {
          slug: "2",
        },
      },
      {
        params: {
          slug: "3",
        },
      },
      {
        params: {
          slug: "4",
        },
      },
      {
        params: {
          slug: "5",
        },
      },
    ],
    // fallback: true,
    fallback: "blocking",
  };
};

export default SingleBlog;
