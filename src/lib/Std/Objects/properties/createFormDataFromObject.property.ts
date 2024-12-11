export default function createFormDataFromJSON(object: any): FormData {
  const formData = new FormData(),
        entries = Object.entries(object)

  for(let [key, value] of entries) {
    if(value instanceof FileList) {
      for(let file in value) formData.append(value[file].name, value[file])
    } else if(value !== undefined || value !== null) {
      formData.append(key, value as string)
    }
  }

  return formData
}