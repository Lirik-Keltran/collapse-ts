import { Event } from "./event"

export type World = Readonly<{
  activeEvents: Array<String>,
  deletedEvents: Array<Event>,
}>;
