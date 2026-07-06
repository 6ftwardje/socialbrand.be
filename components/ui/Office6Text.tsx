export default function Office6Text({ children }: { children: string }) {
  return children.split(/(Office6|OFFICE6)/g).map((part, index) => {
    if (part === "Office6") {
      return (
        <span key={`${part}-${index}`}>
          Office<span className="text-[#dc1326]">6</span>
        </span>
      );
    }

    if (part === "OFFICE6") {
      return (
        <span key={`${part}-${index}`}>
          OFFICE<span className="text-[#dc1326]">6</span>
        </span>
      );
    }

    return part;
  });
}
