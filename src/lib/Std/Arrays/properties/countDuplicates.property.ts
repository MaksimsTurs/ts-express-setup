export default function countDuplicates<T>(arrayWithDuplicate: any[], find: (keyof T)[]): Record<keyof T, number> {
  let count: Record<keyof T, number> = {} as Record<keyof T, number>

  for(let index: number = 0; index < arrayWithDuplicate.length; index++) {
    for(let jndex: number = 0; jndex < find.length; jndex++) {
      if(arrayWithDuplicate[index] === find[jndex]) {
        count?.[find[jndex]] ? count[find[jndex]]++ : count[find[jndex]] = 1
      }
    }
  }
  
  return count!
}