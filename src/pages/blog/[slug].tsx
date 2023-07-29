import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { client } from "../../../tina/__generated__/client";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { useEffect, useState } from "react";
import { FaCalendarDay } from "react-icons/fa";
import { IoIosArrowBack } from "react-icons/io";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const getStaticPaths = async () => {
  const postsResponse = await client.queries.postConnection();
  const paths = postsResponse.data.postConnection.edges?.map((post) => {
    return {
      params: {
        slug: post?.node?._sys.filename,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<{ repo: any }> = async ({
  params,
}) => {
  const repo = await client.queries.post({
    relativePath: `${params?.slug}.md`,
  });

  return { props: { repo } };
};

const Page = ({ repo }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const date = String(repo.data?.post.create_at);

  return (
    isClient && (
      <>
        <Head>
          <title>{repo.data.post.title} | Iqbal Adudu Blog</title>
        </Head>
        <section className="flex flex-col gap-4 h-auto">
          <div className="flex justify-start items-start w-[80%] flex-col bg-base-profile h-auto mx-auto p-5 gap-3 rounded-xl drop-shadow-2xl">
            <div>
              <Link href="/" className="inline-flex items-center gap-1">
                <IoIosArrowBack size={20} className="text-white" />
                <span className="text-base-subtitle text-[17px]">Kembali</span>
              </Link>
            </div>
            <div>
              <h1 className="text-white text-2xl md:text-4xl font-bold prose">
                {repo.data.post.title}
              </h1>
            </div>
            <div className="flex gap-4 text-white flex-col sm:flex-row">
              <span className="inline-flex items-center gap-1">
                <FaCalendarDay size={17} />
                <p className="text-[17px]">{date.split("T")[0]}</p>
              </span>
              <span className="inline-flex items-center gap-1">
                <p className="font-bold">Kategori: </p>
                <p className="text-[17px]">
                  {repo.data.post.categories.name === null
                    ? "Tidak Ada"
                    : String(repo.data.post.categories.name)}
                </p>
              </span>
              <span className="inline-flex items-center gap-1">
                <p className="font-bold">Series: </p>
                <p className="text-[17px]">
                  {repo.data.post.series === null
                    ? "Tidak Ada"
                    : String(repo.data.post.series)}
                </p>
              </span>
            </div>
          </div>
          <div className="max-w-[80%] mx-auto">
            <Image
              src={String(repo.data.post.image)}
              alt="Image"
              width={500}
              height={500}
              className="rounded-md"
            />
          </div>
          <article className="text-white max-w-[79%] mx-auto prose prose-xl prose-h3:text-white prose-h1:text-white prose-h2:text-white prose-h4:text-white prose-a:text-white prose-code:text-white">
            <TinaMarkdown content={repo.data.post.body} />
          </article>
        </section>
      </>
    )
  );
};

export default Page;
