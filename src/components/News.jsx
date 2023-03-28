function News() {
  return (
    <div className="container mx-auto px-10 my-10">
      <div className="text-center mb-5 pb-2 border-b-2 border-gray-400 font-medium ">
        <h3 className="text-xl font-bold">Topik Favorit</h3>
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
            {/* <div className="flex flex-col justify-start text-center dark:text-gray-100">
					<span className="text-3xl font-semibold leading-none tracking-wide">04</span>
					<span className="leading-none uppercase">Aug</span>
				</div> */}
          </div>
          <h2 className="z-10 p-5">
            {/* <a rel="noopener noreferrer"  className="font-medium text-md hover:underline dark:text-gray-100">Inventore reiciendis aliquam excepturi</a> */}
          </h2>
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
              Health
            </a>
            {/* <div className="flex flex-col justify-start text-center dark:text-gray-100">
					<span className="text-3xl font-semibold leading-none tracking-wide">01</span>
					<span className="leading-none uppercase">Aug</span>
				</div> */}
          </div>
          <h2 className="z-10 p-5">
            {/* <a rel="noopener noreferrer"  className="font-medium text-md hover:underline dark:text-gray-100">Inventore reiciendis aliquam excepturi</a> */}
          </h2>
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
            {/* <div className="flex flex-col justify-start text-center dark:text-gray-100">
					<span className="text-3xl font-semibold leading-none tracking-wide">28</span>
					<span className="leading-none uppercase">Jul</span>
				</div> */}
          </div>
          <h2 className="z-10 p-5">
            {/* <a rel="noopener noreferrer"  className="font-medium text-md hover:underline dark:text-gray-100">Officiis mollitia dignissimos commodi optio vero animi</a> */}
          </h2>
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
              Sports
            </a>
            {/* <div className="flex flex-col justify-start text-center dark:text-gray-100">
					<span className="text-3xl font-semibold leading-none tracking-wide">19</span>
					<span className="leading-none uppercase">Jul</span>
				</div> */}
          </div>
          <h2 className="z-10 p-5">
            {/* <a rel="noopener noreferrer"  className="font-medium text-md hover:underline dark:text-gray-100">Doloribus sit illo necessitatibus architecto exercitationem enim</a> */}
          </h2>
        </div>
      </div>
    </div>
  );
}

export default News;
