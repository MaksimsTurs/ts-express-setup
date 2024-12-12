import type { KeyValueObject } from "../../../../global.type"

export default function removeDuplicates(array: any[] | null, duplicatesObject: KeyValueObject<null> | null): any[] {
  if(!duplicatesObject || !array) return []
  
  let withoutDuplicate: any[] = []

  for(let index: number = 0; index < array.length; index++) {
    if(duplicatesObject[array[index]] !== null) withoutDuplicate.push(array[index])
  }

  duplicatesObject = null
  array = null
  return withoutDuplicate
}