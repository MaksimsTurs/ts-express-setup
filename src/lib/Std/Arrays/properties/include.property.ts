import type { KeyValueObject } from '../../../../global.type'

export default function include(what: any[], inObject: KeyValueObject<null>): boolean {
  for(let index: number = 0; index < what.length; index++) {
    if(inObject[what[index]] === null) return true
  }

  return false
}