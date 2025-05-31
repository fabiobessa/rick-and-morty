export const sanitizer = {
  clearNullProperty: function (initialObject: any) {
    Object.keys(initialObject).forEach((key) => {
      if(!initialObject[key]) {
        delete initialObject[key]
      }
    })

    return initialObject
  }
}