import type { KeyValueObject } from "../../global.type"

export interface CacheStorageImpl {
  updateByKey: <T>(param: CacheUpdateParam<T>) => void
  getByKey: <T>(key: string) => T | undefined
  deleteByKey: (key: string) => void
}

export type CacheConstructorParam = {
  expiredAt?: number
}

export type CacheStorageObj = KeyValueObject<{ savedAt: string, value: any } | null>

export type CacheUpdateParam<T> = {
  key: string
  callback:((currentValue?: T) => T)| T 
}