import merge from "lodash/merge";
import TextFieldOverrides from "./TextFieldOverrides";
import GridOverrides from "./GridOverrides";
import SelectOverrides from "./SelectOverrides";
import Card from "./Card";
import { Theme } from "@mui/material/styles";
import { TCustomTheme } from "../type";
import {LoadingButton} from "./LoadingButton";
import {Skeleton} from "./Skeleton";
import {Accordion} from "./Accordion";
import {Paper} from "./Paper";
import {Input} from "./Input";

export default function ComponentsOverrides(theme: Theme) {
  return merge(
    TextFieldOverrides(),
    GridOverrides(),
    SelectOverrides(),
    Card(theme as TCustomTheme),
    LoadingButton(),
    Paper(),
    Skeleton(theme as TCustomTheme),
    Accordion(theme as TCustomTheme),
    Input(theme as TCustomTheme)
  );
}
