import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { format } from "date-fns";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const getNews = async () => {
  try {
    const response = await fetch(
      `https://api-tefa-berita.vercel.app/api/news/v1?quantity=50`
    );
    const data = await response.json();
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const Newsdetail = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [detail, setDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await getNews();
      const item = data.find((e) => e.slug === slug);

      setDetail(item);
      setLoading(false);
    }
    fetchData();
  }, [slug]);

  return (
    <React.Fragment>
      <Navbar />
      {loading && (
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-600 m-auto my-[220%] md:mt-[20%]" />
      )}
      <div className="bg-gray-50">
        {detail && (
          <div className="max-w-4xl px-6 py-16 mx-auto space-y-12">
            <article className="space-y-8 text-gray-900">
              <button
                onClick={() => router.push(`/`)}
                className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
              >
                <span
                  aria-hidden="true"
                  className="block transition group-hover:translate-x-0.5"
                >
                  &larr;
                </span>
                Kembali
              </button>
              <div className="space-y-6">
                <img
                  src={detail.image.image_url}
                  alt={detail.title}
                  className={"w-full"}
                />
                <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
                  {detail.title}
                </h1>
                <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center ">
                  <div className="flex items-center md:space-x-2">
                    <p className="text-sm">
                      {detail.author} •
                      {format(new Date(detail.createdAt), "do MMMM Y")}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="content"
                dangerouslySetInnerHTML={{ __html: detail.content }}
              ></div>
            </article>
          </div>
        )}
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Newsdetail;
