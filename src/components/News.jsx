function News() {
  return (
    <div className="container mx-auto px-10 my-10">
      <div className="text-center mb-5 pb-2 border-b-2 border-lime-500 font-medium ">
        <h3 className="text-2xl font-bold">Topik Favorit</h3>
      </div>
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-4 sm:grid-cols-2">
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
          style={{ backgroundImage: "url(../Asset/foto1.png);" }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
            >
              Sosial
            </a>
          </div>
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
          style={{ backgroundImage: "url(../Asset/foto4.jpg);" }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
            >
              Kesehatan
            </a>
          </div>
         
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
          style={{ backgroundImage: "url(../Asset/foto2.jpg);" }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
            >
              Lifestyle
            </a>
          </div>
         
        </div>
        <div
          className="relative flex items-end justify-start w-full text-left bg-center bg-cover h-96 dark:bg-gray-500"
          style={{ backgroundImage: "url(../Asset/foto3.jpg);" }}
        >
          <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
          <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
            <a
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs font-semibold tracking-wider uppercase dark:text-gray-100 bgundefined"
            >
              Olahraga
            </a>
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default News;
