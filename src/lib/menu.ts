import { BeverageMenu, FoodMenu } from "@/lib/types"

export const foodMenu: FoodMenu = {
  "Food Menu": [
    {
      header: "Toasties",
      description: "served on your choice of Turkish, sourdough, rye, or soy linseed bread",
      items: [
        {
          name: "Cheese Tomato (V)",
          price: "10.00",
        },
        {
          name: "Ham Cheese Croissant",
          price: "10.00",
        },
        {
          name: "Ham Cheese Tomato",
          price: "12.00",
        },
        {
          name: "Chicken Cheese",
          price: "13.00",
        },
      ],
    },
    {
      header: "Salads",
      items: [
        {
          name: "Chicken Avocado Salad",
          description:
            "poached chicken, avocado, spinach, tomato, soft boiled egg, cucumber, red cabbage, topped with a vinigarette dressing",
          price: "18.00",
        },
        {
          name: "Tuna, Avo & Feta Salad",
          description:
            "Tuna, feta, soft-boiled egg, avocado, spinach, tomato, cucumber, red cabbage, vinigarette dressing",
          price: "18.00",
        },
        {
          name: "Falafel Salad (V)",
          description: "Falafel, avocado, carrot, spinach, tomato, cucumber, red cabbage, hummus",
          price: "18.00",
        },
        {
          name: "Chicken Caesar Salad",
          description:
            "Poached chicken, lean bacon, lettuce, soft boiled egg, parmesan cheese, Caesar dressing",
          price: "18.00",
        },
      ],
    },
    {
      header: "All Day Brunch",
      items: [
        {
          name: "Simple Toast (V)",
          description:
            "Choice of sourdough/soy-lin/rye/turkish toasted and served with butter, berry jam, honey, vegemite, or peanut butter",
          addons: "Gluten Free +1 / Raisin Toast, Banana Bread +1.5",
          price: "6.00",
        },
        {
          name: "Eggs on Toast (V)",
          description: "Two eggs scrambled or fried served with your choice of bread",
          addons: "Add avo +3",
          price: "10.00",
        },
        {
          name: "Avocado Toast (V)",
          description: "Served on your choice of bread with vinigarette dressing",
          addons: "Add bacon +4, feta +3",
          price: "12.00",
        },
        {
          name: "Bacon Egg Roll",
          description:
            "Double egg and double bacon served on Turkish bread with your choice of sauce",
          addons: "Add avo +3",
          price: "12.00",
        },
        {
          name: "Chilli BBQ Wrap",
          description: "Lean bacon and scrambled eggs with cheese",
          addons: "Add hash brown +4",
          price: "15.00",
        },
        {
          name: "Omelette (V*)",
          description: "Ham, spinach, tomato, onion and cheese served with toast",
          addons: "Add feta +3",
          price: "14.00",
        },
      ],
    },
    {
      header: "Light Meals",
      items: [
        {
          name: "Bircher Muesli (V)",
          description: "with yoghurt and seasonal fruits",
          price: "12.00",
        },
        {
          name: "Yoghurt Fruit Bowl (V)",
          description: "topped with your choice of honey and/or cinnamon",
          price: "12.00",
        },
        {
          name: "Homemade Vege Soup (V)",
          description: "served with your choice of toast and butter",
          price: "12.00",
        },
        {
          name: "Quesadilla (V)",
          description: "Quesadilla filled with spinach and cheese",
          addons: "Add chicken +3",
          price: "10.00",
        },
      ],
    },
    {
      header: "Add-ons",
      items: [
        {
          name: "Avocado",
          price: "3.00",
        },
        {
          name: "Bacon (2 slices)",
          price: "4.00",
        },
        {
          name: "Poached Chicken",
          price: "4.00",
        },
        {
          name: "Cheese",
          price: "2.00",
        },
        {
          name: "Feta",
          price: "3.00",
        },
        {
          name: "Hash Brown",
          price: "4.00",
        },
        {
          name: "Haloumi",
          price: "3.00",
        },
        {
          name: "Boiled Egg",
          price: "2.00",
        },
      ],
    },
  ],
  "All Day Lunch": [
    {
      header: "Lunch Wraps",
      items: [
        {
          name: "Chicken Avocado Wrap",
          description: "Poached chicken, avocado, coleslaw, spinach with mayo",
          price: "16.50",
        },
        {
          name: "Chicken Haloumi Wrap",
          description: "Poached chicken, haloumi, tomato, spinach with chili mayo",
          price: "16.50",
        },
        {
          name: "Vege Delight (V)",
          description: "Avocado, tomato, spinach, haloumi with aloil",
          price: "16.50",
        },
        {
          name: "Slow Cooked Lamb",
          description: "Lamb, feta, coleslaw with yoghurt dressing",
          price: "17.50",
        },
        {
          name: "Falafel Wrap",
          description: "Falafel, hummus, red cabbage, cucumber, avocado with chili sauce",
          price: "17.50",
        },
        {
          name: "Tuna Salad Wrap",
          description: "Tuna, avocado, feta, salad, with mayo",
          price: "16.50",
        },
      ],
    },
    {
      header: "Gourmet Sandwiches",
      items: [
        {
          name: "Classic BLT",
          description: "Bacon, lettuce, tomato with your choice of sauce on Turkish bread",
          price: "13.00",
        },
        {
          name: "Roast Beef Sandwich",
          description: "Roast beef, cheese, onion, tomato with mustard served on Turkish bread",
          price: "16.00",
        },
        {
          name: "Gourmet Chicken Sandwich",
          description: "Poached chicken, cheese, avocado, tomato, spinach, mayo on Turkish bread",
          price: "16.00",
        },
        {
          name: "Tuna Sandwich",
          description: "Tuna, avocado, spinach, tomato with mayo on Turkish bread",
          price: "16.00",
        },
        {
          name: "Smoked Salmon",
          description:
            "Smoked salmon, cream cheese, spinach, cucumber, avocado served on brown bread",
          price: "17.50",
        },
        {
          name: "Slow Cooked Lamb",
          description:
            "Lamb slow cooked in red wine, served with onion, cheese and yoghurt dressing on Turkish bread",
          price: "17.50",
        },
      ],
    },
  ],
}

export const beverages: BeverageMenu = {
  Desserts: [
    {
      header: "Desserts",
      items: [
        {
          name: "Caramel Slice",
          description: "Layers of buttery shortbread, creamy caramel, and rich chocolate ganache.",
          price: "6.50",
        },
        {
          name: "Chocolate Brownie",
          description: "Rich, fudgy chocolate brownie with a crisp crust.",
          price: "6.00",
        },
        {
          name: "Blueberry Muffin",
          description: "Soft, moist muffin bursting with plump blueberries.",
          price: "5.50",
        },
        {
          name: "Chocolate Muffin",
          description: "Soft and moist muffin with rich chocolate chunks and a golden-brown crust.",
          price: "5.50",
        },
      ],
    },
  ],
  Beverages: [
    {
      header: "Coffee",
      items: [
        {
          name: "Caffe Latte",
          description: "",
          price: "4.30",
        },
        {
          name: "Flat White",
          description: "",
          price: "4.30",
        },
        {
          name: "Long Black",
          description: "",
          price: "4.30",
        },
        {
          name: "Mocha",
          description: "",
          price: "4.80",
        },
        {
          name: "Cappuchino",
          description: "",
          price: "4.30",
        },
      ],
    },
    {
      header: "Iced Coffee/Cold Beverage",
      items: [
        {
          name: "Iced Mocha",
          description: "",
          price: "7.50",
        },
        {
          name: "Iced Latte",
          description: "",
          price: "7.00",
        },
        {
          name: "Iced Long Black",
          description: "",
          price: "6.50",
        },
        {
          name: "Apple Juice",
          description: "",
          price: "5.50",
        },
        {
          name: "Orange Juice",
          description: "",
          price: "5.50",
        },
        {
          name: "Bottle Coke Classic",
          description: "",
          price: "5.50",
        },
        {
          name: "Bottle Coke No Sugar",
          description: "",
          price: "5.50",
        },
        {
          name: "Bottle Water",
          description: "",
          price: "4.00",
        },
      ],
    },
  ],
}
