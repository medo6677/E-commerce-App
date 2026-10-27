export function ProductDetailsSpecs({ description }: { description: string }) {
  const specs = description.split("\n").map((item) => {
    const [label, value] = item.split("\t");
    return { label, value };
  });
  return (
    <div className="border-y border-gray-100 py-3">
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
        {specs.map((item, index) => (
          <div key={index} className="flex items-center gap-1.5">
            <span className="text-gray-500">- {item.label}</span>
            {" "}
            <span className="font-semibold text-gray-900">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
