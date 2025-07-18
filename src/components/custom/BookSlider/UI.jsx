import { atom, useAtom } from "jotai";

const pictures = [
  
];

export const pageAtom = atom(0);
export const pages = [
  {
    front: "book-cover",
    back: pictures[0],
  },
];
for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "book-back",
});

export const UI = () => {
  const [page, setPage] = useAtom(pageAtom);

  return (
    <>
      <main className="pointer-events-none select-none relative w-full flex justify-between flex-col py-16">
        <div className="w-full overflow-auto pointer-events-auto flex justify-center">
          <div className="flex flex-wrap justify-center items-center gap-4 max-w-full p-4 sm:p-10">
            {[...pages].map((_, index) => (
              <button
                key={index}
                className={`
          border-transparent hover:border-white transition-all duration-300 
          rounded-full text-lg uppercase shrink-0 border
          px-3 py-2 sm:px-4 sm:py-3
          text-center
          ${index === page ? "bg-white/90 text-black" : "bg-black/30 text-white"}
          min-w-[90px] sm:min-w-[120px]
          truncate
        `}
                onClick={() => setPage(index)}
                title={index === 0 ? "Cover" : `Page ${index}`}
              >
                {index === 0 ? "Cover" : `Page ${index}`}
              </button>
            ))}
            <button
              className={`
        border-transparent hover:border-white transition-all duration-300 
        rounded-full text-lg uppercase shrink-0 border
        px-3 py-2 sm:px-4 sm:py-3
        text-center
        ${page === pages.length ? "bg-white/90 text-black" : "bg-black/30 text-white"}
        min-w-[90px] sm:min-w-[120px]
        truncate
      `}
              onClick={() => setPage(pages.length)}
              title="Back Cover"
            >
              Back Cover
            </button>
          </div>
        </div>

      </main>


    </>
  );
};