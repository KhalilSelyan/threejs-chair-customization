import { Dispatch, SetStateAction, createContext, useState } from "react";

const chairColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

const cushionColors = [
  {
    color: "#683434",
    name: "brown",
  },
  {
    color: "#1a5e1a",
    name: "green",
  },
  {
    color: "#659994",
    name: "blue",
  },
  {
    color: "#896599",
    name: "mauve",
  },
  {
    color: "#ffa500",
    name: "orange",
  },
  {
    color: "#59555b",
    name: "grey",
  },
  {
    color: "#222222",
    name: "black",
  },
  {
    color: "#ececec",
    name: "white",
  },
];

interface ICustomizationContext {
  material: "leather" | "fabric";
  setMaterial: Dispatch<SetStateAction<"leather" | "fabric">>;
  legs: "classic" | "modern";
  setLegs: Dispatch<SetStateAction<"classic" | "modern">>;
  cushionColors: typeof cushionColors;
  chairColors: typeof chairColors;
  cushionColor: (typeof cushionColors)[number]["color"];
  setCushionColor: Dispatch<
    SetStateAction<(typeof cushionColors)[number]["color"]>
  >;
  chairColor: (typeof chairColors)[number]["color"];
  setChairColor: Dispatch<
    SetStateAction<(typeof chairColors)[number]["color"]>
  >;
}

export const CustomizationContext = createContext<ICustomizationContext>({
  material: "leather",
  legs: "classic",
  cushionColor: cushionColors[0].color,
  chairColor: chairColors[0].color,
  cushionColors,
  chairColors,
  setCushionColor: () => {},
  setChairColor: () => {},
  setMaterial: () => {},
  setLegs: () => {},
});

export const CustomizationProvider = (props: { children: React.ReactNode }) => {
  const { children } = props;
  const [material, setMaterial] = useState<"leather" | "fabric">("leather");
  const [legs, setLegs] = useState<"classic" | "modern">("classic");
  const [cushionColor, setCushionColor] = useState<
    (typeof cushionColors)[number]["color"]
  >(cushionColors[0].color);
  const [chairColor, setChairColor] = useState<
    (typeof chairColors)[number]["color"]
  >(chairColors[0].color);
  const value = {
    material,
    setMaterial,
    legs,
    setLegs,
    cushionColors,
    cushionColor,
    setCushionColor,
    chairColors,
    chairColor,
    setChairColor,
  };
  return (
    <CustomizationContext.Provider value={value}>
      {children}
    </CustomizationContext.Provider>
  );
};
