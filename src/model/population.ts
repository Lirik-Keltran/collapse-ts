import { pipe } from "fp-ts/lib/function";
import * as L from "monocle-ts/Lens";

export type Population = Readonly<{
  agressive: number,
  amount: number,
}>

export type PopulationLayers = Readonly<{
  low: Population,
  middle: Population,
  hight: Population,
}>

export const low = pipe(
  L.id<PopulationLayers>(),
  L.prop("low")
);


export const middle = pipe(
  L.id<PopulationLayers>(),
  L.prop("middle")
);


export const hight = pipe(
  L.id<PopulationLayers>(),
  L.prop("hight")
);
