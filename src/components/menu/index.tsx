"use client"

import BeverageMenu from "@/components/menu/beverageMenu"
import FoodMenu from "@/components/menu/foodMenu"
import { Button } from "@/components/shadcn/button"
import { MenuType } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"
import { motion } from "motion/react"
import { useSearchParams } from "next/navigation"

export default function Menu() {
  const [menuSelection, setMenuSelection] = useState<MenuType>(MenuType.FOOD)

  const searchParams = useSearchParams()
  const params = searchParams.get("type")

  useEffect(() => {
    if (params === "beverage" || params === "dessert") {
      setMenuSelection(MenuType.BEVERAGE)
    } else {
      setMenuSelection(MenuType.FOOD)
    }
  }, [searchParams])

  return (
    <motion.section
      className={cn("flex flex-col gap-6 items-center px-4", "md:w-9/10", "lg:max-w-screen-lg")}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex items-center justify-center gap-2">
        <Button
          className={cn(
            "rounded-full", "hover:text-white hover:cursor-pointer",
            menuSelection === MenuType.FOOD ? "" : "bg-secondary text-primary border border-primary"
          )}
          onClick={() => setMenuSelection(MenuType.FOOD)}
        >
          {MenuType.FOOD}
        </Button>

        <Button
          className={cn(
            "rounded-full", "hover:text-white hover:cursor-pointer",
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
    </motion.section>
  )
}
