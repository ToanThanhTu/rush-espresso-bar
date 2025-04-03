import { Button } from "@/components/shadcn/button"
import { foodMenu } from "@/lib/menu"
import { FoodCategory } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function FoodMenu() {
  const [categorySelection, setCategorySelection] = useState<FoodCategory>(FoodCategory.FOOD)
  const [menuBorderColor, setMenuBorderColor] = useState<string>("border-menu-food")

  const categoryColors = {
    [FoodCategory.FOOD]: {
      bg: "bg-menu-food",
      text: "text-menu-food",
      border: "border-menu-food",
      hover: "hover:bg-menu-food hover:text-white",
    },
    [FoodCategory.LUNCH]: {
      bg: "bg-menu-lunch",
      text: "text-menu-lunch",
      border: "border-menu-lunch",
      hover: "hover:bg-menu-lunch hover:text-white",
    },
  }

  const handleCategoryChange = (category: FoodCategory) => {
    setCategorySelection(category)
    setMenuBorderColor(categoryColors[category].border)
  }

  return (
    <article className="relative flex items-start w-full">
      <div className="flex items-center justify-center gap-2 rotate-270 w-9 mt-36">
        {Object.values(FoodCategory).map((category) => (
          <Button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={cn(
              "rounded-t-2xl rounded-b-none text-sm font-medium",
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
        {foodMenu[categorySelection].map((section) => (
          <li
            key={section.header}
            className="flex flex-col items-start w-full text-center gap-4 even:bg-menu p-4"
          >
            <h2 className="text-xl font-semibold uppercase">{section.header}</h2>

            <ul className={cn("flex flex-col items-start gap-2 w-full")}>
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
