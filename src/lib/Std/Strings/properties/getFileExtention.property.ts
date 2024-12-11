export default function getFileExtention(name: string): string {
  return name.slice(name.lastIndexOf('.', name.length - 1) + 1, name.length)
}