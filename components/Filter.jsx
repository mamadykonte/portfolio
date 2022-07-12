import { useEffect } from "react";

function Filter({ setActiveStack, activeStack, setFiltered, allProjects }) {
  useEffect(() => {
    if (activeStack === "All") {
      setFiltered(allProjects);
      return;
    }

    const filtered = allProjects.filter((techno) =>
      techno.tech.includes(activeStack)
    );
    setFiltered(filtered);
  }, [activeStack, allProjects]);

  const Link = ({ text, activeStack, setActiveStack }) => {
    return (
      <button
        onClick={() => setActiveStack(text)}
        className={`${
          activeStack == text
            ? "group-hover:text-gray-400 text-main bg-foreground dark:bg-foreground-dark" : ""} relative inline-flex items-center justify-start px-5 py-3 overflow-hidden font-bold rounded-full group
        `}
      >
        <span className="w-32 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-foreground dark:bg-foreground-dark opacity-[3%]"></span>
        <span className="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-foreground opacity-100 group-hover:-translate-x-8"></span>
        <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-gray-400">
          {text}
        </span>
        <span className="absolute inset-0 border-2 border-gray-300 rounded-full"></span>
      </button>
    );
  };

  return (
    <div className="my-6 flex flex-wrap justify-center gap-2 font-[Cormorant]">
      <Link
        text="All"
        activeStack={activeStack}
        setActiveStack={setActiveStack}
      />
      <Link
        text="Javascript"
        activeStack={activeStack}
        setActiveStack={setActiveStack}
      />
      <Link
        text="PHP"
        activeStack={activeStack}
        setActiveStack={setActiveStack}
      />
      <Link
        text="Framework JS"
        activeStack={activeStack}
        setActiveStack={setActiveStack}
      />
      <Link
        text="React"
        activeStack={activeStack}
        setActiveStack={setActiveStack}
      />
      <Link
        text="Framework CSS"
        activeStack={activeStack}
        setActiveStack={setActiveStack}
      />
      <Link
        text="Intégration"
        activeStack={activeStack}
        setActiveStack={setActiveStack}
      />
      <Link
        text="Node"
        activeStack={activeStack}
        setActiveStack={setActiveStack}
      />
      <Link
        text="Framework PHP"
        activeStack={activeStack}
        setActiveStack={setActiveStack}
      />
    </div>
  );
};

export default Filter;
