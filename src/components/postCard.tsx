import { useRouter } from "next/router";
import { TinaMarkdown } from "tinacms/dist/rich-text";

interface PostCardProps {
  title: any;
  body: any;
  category: any;
  slug: string;
}

export function PostCard({ title, body, category, slug }: PostCardProps) {
  const router = useRouter();

  return (
    <div
      className="w-full mx-auto md:col-span-auto h-[30vh] md:h-[260px] transition-shadow ease-in-out duration-500 bg-base-post p-[15px] shadow-none hover:shadow-sm hover:shadow-white/50"
      onClick={() => router.push(`/blog/${slug}`)}
    >
      <div className="h-[97%] overflow-hidden">
        <p className="font-bold text-[20px] text-base-title">{title}</p>
        <p className="text-base-text text-[16px] mx-auto prose prose-xl prose-h3:text-white prose-h1:text-white prose-h2:text-white prose-h4:text-white prose-a:text-white">
          <TinaMarkdown content={body} />
        </p>
      </div>
    </div>
  );
}
