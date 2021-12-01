export const handleFulfilled = (success: any) => {
  console.log(`success`, success)
  return success.data
}
export const handleRejected = (error: any) => {
  console.log(`error`, error)
  return error
}
