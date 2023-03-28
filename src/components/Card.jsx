import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Card() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [totalPages, setTotalPages] = useState(0);

  const router = useRouter();

  const getNews = async () => {
    try {
      const response = await fetch(
        `https://api-tefa-berita.vercel.app/api/news/v1?quantity=${itemsPerPage}&page=${currentPage}`
      );
      const data = await response.json();
      setData(data.data);
      setTotalPages(Math.ceil(data.meta.totalData / itemsPerPage));
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getNews();
  }, [currentPage, itemsPerPage]);

  const handlePreviousClick = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`inline-flex items-center justify-center w-8 h-8 text-sm border rounded shadow-md  ${
            currentPage === i
              ? "font-bold text-white bg-blue-600"
              : "font-medium"
          }`}
          onClick={() => handlePageClick(i)}
        >
          {i}
        </button>
      );
    }
    return pageNumbers;
  };

  const [keyword, setKeyword] = useState("");
    const [hasilFilter, setHasilfilter] = useState([]);

    const handlefilter = (e) => {
        const filterData = data.filter((e) => {
            return e.category.toLowerCase().includes(keyword.toLowerCase());
        });
        setHasilfilter(filterData);
    };
    console.log(keyword);

    useEffect(() => {
        handlefilter();
    }, [data, keyword]);


    
  return (
    <>
      <div className="container mx-auto px-8">
        <div className="text-black mt-10">
          <div className="text-center mb-5 pb-3 border-b-2 border-lime-500">
            <h3 className="text-2xl font-bold pb-1">Berita Populer</h3>
            <form onChange={handlefilter}>
                            <select
                                className="filter border-2 border-lime-500 rounded-md hover:border-lime-500 text-black  hover:text-lime-600"
                                name="isAvailable"
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            >
                                <option value="">Pilihan Berita</option>
                                <option value="bisnis">Bisnis</option>
                                <option value="health">Kesehatan</option>
                                <option value="lifestyle">Lifestyle</option>
                                <option value="music">Musik</option>
                                <option value="sosial">Sosial</option>
                                <option value="sports">Olahraga</option>
                                <option value="technology">Teknologi</option>
                            </select>
                        </form>
          </div>
          <form>
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full px-4 py-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-lime-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-lime-500"
                placeholder="Let's search"
                required
                onChange={(event) => {
                  setSearchTerm(event.target.value);
                }}
              />
            </div>
          </form>
        </div>
        <div className="container my-5  mx-auto">
          <section className="mb-32 text-gray-800">
            <div className="grid lg:grid-cols-3 gap-6">
              {hasilFilter? hasilFilter.map((val) => {
                  let content = val.content;
                  let excerpt = "";

                  if (Array.isArray(content)) {
                    excerpt = content[0].text.substring(0, 120) + "...";
                  } else if (typeof content === "string") {
                    excerpt = content.substring(0, 120) + "...";
                  }

                  return (
                    <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
                      <img
                        alt="Office"
                        src={val.image.image_url}
                        className="h-56 w-full object-cover"
                      />

                      <div className="p-4 sm:p-6">
                        <p className="bg-lime-500 text-white px-0.5 rounded-md w-24 text-center">
                          {val.category}
                        </p>
                        <a href="#">
                          <h3 className="text-lg font-medium text-gray-900">
                            {val.title}
                          </h3>
                        </a>
                        <div className="block text-xs text-gray-500">
                          <time datetime={val.createdAt}>
                            {new Date(val.createdAt).toLocaleDateString()}
                          </time>
                          • {val.author}
                        </div>

                        <p className="mt-2 text-sm leading-relaxed text-gray-800 line-clamp-3">
                          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
                        </p>

                        <button
                          onClick={() => router.push(`/news/${val.slug}`)}
                          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                          Lanjukan membaca
                          <span
                            aria-hidden="true"
                            className="block transition group-hover:translate-x-0.5"
                          >
                            &rarr;
                          </span>
                        </button>
                      </div>
                    </article>
                  );
                }) : data
                .filter((val) => {
                  if (searchTerm == "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })
                .map((val) => {
                  let content = val.content;
                  let excerpt = "";

                  if (Array.isArray(content)) {
                    excerpt = content[0].text.substring(0, 120) + "...";
                  } else if (typeof content === "string") {
                    excerpt = content.substring(0, 120) + "...";
                  }

                  return (
                    <article className="overflow-hidden rounded-lg border border-gray-100 shadow-sm">
                      <img
                        alt="Office"
                        src={val.image.image_url}
                        className="h-56 w-full object-cover"
                      />

                      <div className="p-4 sm:p-6">
                        <p className="bg-blue-500 text-white px-0.5 rounded-md w-16 text-center">
                          {val.category}
                        </p>
                        <a href="#">
                          <h3 className="text-lg font-medium text-gray-900">
                            {val.title}
                          </h3>
                        </a>
                        <div className="block text-xs text-gray-500">
                          <time datetime={val.createdAt}>
                            {new Date(val.createdAt).toLocaleDateString()}
                          </time>
                          • {val.author}
                        </div>

                        <p className="mt-2 text-sm leading-relaxed text-gray-800 line-clamp-3">
                          <div dangerouslySetInnerHTML={{ __html: excerpt }} />
                        </p>

                        <button
                          onClick={() => router.push(`/news/${val.slug}`)}
                          className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
                        >
                          Lanjukan membaca
                          <span
                            aria-hidden="true"
                            className="block transition group-hover:translate-x-0.5"
                          >
                            &rarr;
                          </span>
                        </button>
                      </div>
                    </article>
                  );
                })}
            </div>
            {/* pagination page number */}
            <div className="flex justify-center space-x-1 dark:text-gray-100 mt-4">
              <button
                title="previous"
                type="button"
                disabled={currentPage === 1}
                onClick={handlePreviousClick}
                className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
              >
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>
              {renderPageNumbers()}
              <button
                title="next"
                type="button"
                disabled={currentPage === totalPages}
                onClick={handleNextClick}
                className="inline-flex items-center justify-center w-8 h-8 py-0 border rounded-md shadow-md dark:bg-gray-900 dark:border-gray-800"
              >
                <svg
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Card;
