import type { KeyValueObject } from "../../../global.type"

export type Arrays = {
  include: (what: any[], inObject: KeyValueObject<null>) => boolean
  countDuplicates: <T>(inArray: any[], find: (keyof T)[]) => Record<keyof T, number>
  removeDuplicates: (fromArray: any[], duplicatesObject: KeyValueObject<null>) => any[]
}