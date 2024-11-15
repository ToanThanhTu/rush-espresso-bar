import { menu } from "@/app/lib/data";

export default function Page() {
  return (
    <div className="flex flex-col gap-6 items-center px-6 max-w-screen-lg m-auto">
      <h1 className="text-3xl font-bold">Menu</h1>

      {menu.map((section) => (
        <div
          key={section.header}
          className="flex flex-col items-center text-center gap-6"
        >
          <div className="border-t-2 w-full border-t-slate-300 my-4"></div>

          <h2 className="text-xl font-semibold">{section.header}</h2>

          {section.items.map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center text-darkGray"
            >
              <p>
                <span className="font-bold">{item.name}</span> - ${item.price}
              </p>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
