"use client"

import BeverageMenu from "@/components/menu/beverageMenu"
import FoodMenu from "@/components/menu/foodMenu"
import { Button } from "@/components/shadcn/button"
import { MenuType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useState } from "react"

export default function Menu() {
  const [menuSelection, setMenuSelection] = useState<MenuType>(MenuType.FOOD)

  return (
    <section className={cn("flex flex-col gap-6 items-center px-4", "md:w-9/10", "lg:max-w-screen-lg")}>
      <div className="flex items-center justify-center gap-2">
        <Button
          className={cn(
            "rounded-full",
            menuSelection === MenuType.FOOD
              ? ""
              : "bg-secondary text-primary border border-primary"
          )}
          onClick={() => setMenuSelection(MenuType.FOOD)}
        >
          {MenuType.FOOD}
        </Button>

        <Button
          className={cn(
            "rounded-full",
            menuSelection === MenuType.BEVERAGE
              ? ""
              : "bg-secondary text-primary border border-primary"
          )}
          onClick={() => setMenuSelection(MenuType.BEVERAGE)}
        >
          {MenuType.BEVERAGE}
        </Button>
      </div>

      {menuSelection === MenuType.FOOD && <FoodMenu />}
      {menuSelection === MenuType.BEVERAGE && <BeverageMenu />}
    </section>
  )
}
