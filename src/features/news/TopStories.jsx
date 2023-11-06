import { useQuery } from "@tanstack/react-query";
import { getAllNews } from "../../services/news";
import { NewsCard } from "./NewsCard";

export function TopStories() {
  const { data: news, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: getAllNews,
  });
  if (isLoading) return <p>Loader</p>;
  return (
    <div className="bg-white px-8 py-6">
      <h1 className="font-bold text-xl pb-4">Top stories</h1>
      <div className="grid sm:flex sm:flex-wrap place-items-center gap-8">
        {news.map((news) => (
          <NewsCard key={news.id} news={news} />
        ))}
      </div>
    </div>
  );
}
