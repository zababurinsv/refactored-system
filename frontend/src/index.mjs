import pkg from "../../package.json"
import isEmpty from './modules/isEmpty/isEmpty.mjs'
import c from 'template-colors-web';
let stack = {}
let props = {
  self: {
    isAssert: true,
    isConsole: true
  },
  init: true,
  count: 0,
  maxCount: 0
}

let preset = (type, pathToFile,id) => {
  switch (type) {
    case -1:
      stack[`${pathToFile}`][`${id}`].maxCount = 100
      stack[`${pathToFile}`][`${id}`].self.isAssert = false
      break
    default:
      break
  }
}

let print = (count = 0, pathToFile = '', id='', ...args) => {
  console.log(c`${stack[pathToFile][id].count} ${pathToFile}.rgb(0,133,255).bold ${id}.rgb(63,146,63).bold`, args)

}


let assert = {
  assert: (maxCount, pathToFile= '/', id = "default", ...args) => {
    if(isEmpty(stack[`${pathToFile}`])) {
      stack[`${pathToFile}`] = {}
      if(isEmpty(stack[pathToFile][id])) {
        stack[pathToFile][id] = Object.assign({}, props)
      }
    } else {
      if(isEmpty(stack[pathToFile][id])) {
        stack[pathToFile][id] = Object.assign({}, props)
      }
    }
    if(stack[pathToFile][id].init) {
      stack[pathToFile][id].maxCount = maxCount
      stack[pathToFile][id].count = 1
      stack[pathToFile][id].init = false
      preset(maxCount, pathToFile, id)
      if(stack[pathToFile][id].maxCount === 0) {
        if(stack[pathToFile][id].self.isConsole) {
          print(stack[pathToFile][id].count, pathToFile, id ,args)
        }

        if(stack[pathToFile][id].self.isAssert) {
          console.assert(false, pathToFile, stack)
        }

        stack[pathToFile][id].init = true

      } else {
        if(stack[pathToFile][id].self.isConsole) {
          print(stack[pathToFile][id].count, pathToFile, id ,args)
        }
      }
    } else {
      stack[pathToFile][id].count = stack[pathToFile][id].count + 1
      if(stack[pathToFile][id].count >= stack[pathToFile][id].maxCount) {
        if(stack[pathToFile][id].self.isConsole) {
          print(stack[pathToFile][id].count, pathToFile, id ,args)
        }

        if(stack[pathToFile][id].self.isAssert) {
          console.assert(false, pathToFile, stack)
        }
        stack[pathToFile][id].init = true
      } else {

        if(stack[pathToFile][id].self.isConsole) {
          print(stack[pathToFile][id].count, pathToFile, id ,args)
        }
      }
    }
    return true
  }
}
window['@newkind'] = {}
window['@newkind'].debug = assert
export {pkg}
export default assert