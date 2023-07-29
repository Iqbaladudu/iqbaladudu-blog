import Hero from "@/components/hero";
import { client } from "./../../tina/__generated__/client";
import { PostCard } from "@/components/postCard";
import type { InferGetStaticPropsType, GetStaticProps } from "next";
import { useEffect, useState } from "react";
import Head from "next/head";

export const getStaticProps: GetStaticProps<{ repo: any }> = async () => {
  const postsResponse = await client.queries.postConnection();
  const repo = postsResponse.data.postConnection.edges?.map((post) => {
    return {
      title: post?.node?.title,
      body: post?.node?.body,
      category: post?.node?.categories,
      slug: post?.node?._sys.filename,
    };
  });

  return { props: { repo } };
};

export default function Index({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Iqbal Adudu | Knowledge First</title>
      </Head>
      <Hero />
      <Body repo={repo} />
    </>
  );
}

interface BodyProps {
  repo: any;
}

function Body({ repo }: BodyProps) {
  const [isClient, setIsClient] = useState(false);

  console.log(repo[0].slug);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <section className="w-[80%] mx-auto">
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-2 mt-5">
            <div>
              <p className="text-base-subtitle text-[15px] sm:text-[18px] font-bold">
                Tulisan
              </p>
            </div>
            <div>
              <input
                type="text"
                className="form-input w-full bg-base-input h-[40px] sm:h-[50px] rounded-xl text-base-subtitle text-[16px]"
                placeholder="Cari tulisan"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 justify-center gap-y-5 md:gap-x-5">
            {isClient &&
              repo.map((val: any, index: number) => (
                <PostCard
                  key={index}
                  title={val.title}
                  body={val.body}
                  category={val.category}
                  slug={val.slug}
                />
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
