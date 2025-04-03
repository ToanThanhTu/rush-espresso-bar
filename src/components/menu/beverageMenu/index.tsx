import { Button } from "@/components/shadcn/button"
import { beverages } from "@/lib/menu"
import { BeverageCategory } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function BeverageMenu() {
  const [categorySelection, setCategorySelection] = useState<BeverageCategory>(
    BeverageCategory.BEVERAGES
  )
  const [menuBorderColor, setMenuBorderColor] = useState<string>("border-menu-beverages")

  const categoryColors = {
    [BeverageCategory.BEVERAGES]: {
      bg: "bg-menu-beverages",
      text: "text-menu-beverages",
      border: "border-menu-beverages",
      hover: "hover:bg-menu-beverages hover:text-white",
    },
    [BeverageCategory.DESSERTS]: {
      bg: "bg-menu-desserts",
      text: "text-menu-desserts",
      border: "border-menu-desserts",
      hover: "hover:bg-menu-desserts hover:text-white",
    },
  }

  const handleCategoryChange = (category: BeverageCategory) => {
    setCategorySelection(category)
    setMenuBorderColor(categoryColors[category].border)
  }

  return (
    <article className="relative flex items-start w-full">
      <div className="flex items-center justify-center gap-2 rotate-270 w-9 mt-36">
        {Object.values(BeverageCategory).map((category) => (
          <Button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={cn(
              `rounded-t-2xl rounded-b-none text-sm font-medium`,
              `${categoryColors[category].hover} hover:cursor-pointer`,
              categorySelection === category
                ? `${categoryColors[category].bg} text-white`
                : `bg-white ${categoryColors[category].text} border ${categoryColors[category].border} border-b-0`
            )}
          >
            {category}
          </Button>
        ))}
      </div>

      <ul className={cn("border rounded-xl flex flex-col items-start gap-1 grow", menuBorderColor)}>
        {beverages[categorySelection].map((section) => (
          <li key={section.header} className="flex flex-col items-start w-full text-center gap-4 even:bg-menu p-4">
            <h2 className="text-xl font-semibold uppercase text-left">{section.header}</h2>

            <ul className="flex flex-col items-start gap-2 w-full">
              {section.items.map((item) => (
                <li key={item.name} className="flex flex-col items-start text-darkGray w-full">
                  <p className="flex items-center justify-between font-semibold w-full">
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </p>
                  {item.description && <p className="text-left text-sm">{item.description}</p>}
                  {item.addons && <p className="text-left text-sm italic">{item.addons}</p>}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </article>
  )
}
