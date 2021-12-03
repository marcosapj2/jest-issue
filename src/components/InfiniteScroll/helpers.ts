export const getQuantity = (listSize: number, itemSize: number, offset: number) => {
  return Math.floor(listSize / (itemSize + offset))
}
