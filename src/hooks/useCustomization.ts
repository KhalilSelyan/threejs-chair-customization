import { useContext } from "react";
import { CustomizationContext } from "../contexts/customizationContext";

export const useCustomization = () => {
  const context = useContext(CustomizationContext);
  return context;
};
