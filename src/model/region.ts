import * as L from "monocle-ts/Lens";
import { PopulationLayers } from "./population";
import { pipe } from "fp-ts/lib/function";

export type Region = Readonly<{
  id: string,
  separatism: number,
  populationLayers: PopulationLayers,
}>

export const populationLayers = pipe(
  L.id<Region>(),
  L.prop("populationLayers"),
)

export const setPopulationLayers = (f: (p: PopulationLayers) => PopulationLayers) => pipe(
  populationLayers,
  L.modify(f)
)

export const getRegionAggressive = (r: Region) => {
}

export type GetRegionPopulation = (r: Region) => number;
