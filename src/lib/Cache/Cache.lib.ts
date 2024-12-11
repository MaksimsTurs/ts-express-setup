import type { CacheConstructorParam, CacheStorageImpl, CacheStorageObj, CacheUpdateParam } from "./Cache.lib.type"

class CacheStorage implements CacheStorageImpl {
  private cacheExpiredAfter: number = 0;
  private cacheStorage: CacheStorageObj = {}

  constructor(constructorParam?: CacheConstructorParam) {
    this.cacheExpiredAfter = constructorParam?.expiredAt || 0
  }

  updateByKey<T>(update: CacheUpdateParam<T>) {
    const { callback, key } = update

    let value: T

    if(typeof callback === 'function') {
      value = (callback as ((currentValue?: T) => T))(this.cacheStorage[key].value)
    } else {
      value = callback
    }

    this.cacheStorage[key] = { savedAt: new Date().toISOString(), value }
  }

  getByKey<T>(key: string): T | undefined {
    const { savedAt, value } = this.cacheStorage[key],
          expiredAt: number = this.cacheExpiredAfter

    if(!savedAt && !value) return undefined

    if(!expiredAt || !this.isCacheExpired(savedAt, expiredAt)) return value as T
  }

  deleteByKey(key: string) {
    this.cacheStorage[key] = { savedAt: "", value: undefined }
  }

  private isCacheExpired(savedAt: string, expiredAt: number) {
    const dateNow: number = Date.now(),
          dateSavedAt: number = Date.parse(savedAt) + expiredAt

    return dateSavedAt > dateNow
  }
}

export default CacheStorage