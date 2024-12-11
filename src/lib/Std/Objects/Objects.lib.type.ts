export type Objects = {
  inObject: <T>(keys: (keyof T)[], object?: T) => boolean
  createFormDataFromJSON: (object: any) => FormData
}