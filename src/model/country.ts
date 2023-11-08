import { Region } from "./region";

export type Country = Readonly<{
  budget: number,
  regions: Region,
}>
