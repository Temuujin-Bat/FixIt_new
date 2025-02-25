import { Dispatch, SetStateAction } from "react";

export type TContactCategories = {
  title: string;
  category: string;
};

export interface TContactUsDialogProps {
  isDialogAnchor: HTMLButtonElement | null;
  setIsDialogAnchor: Dispatch<SetStateAction<HTMLButtonElement | null>>;
  selectedCategory: TContactCategories | null;
}
