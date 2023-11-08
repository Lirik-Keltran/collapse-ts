export type OnceEvent = Readonly<{
  type: "Once"
  id: string,
  condition: (world: unknown) => boolean,
  action: (world: unknown) => unknown,
}>;

export type MultypleEvent = Readonly<{
  type: "Multyple"
  id: string,
  condition: (world: unknown) => boolean,
  action: (world: unknown) => unknown,
}>;


export type Event = OnceEvent | MultypleEvent;
