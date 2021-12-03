export const getQuantity = (
  listSize: number,
  itemSize: number,
  offset: number,
): number => {
  return Math.floor(listSize / (itemSize + offset))
}
