const isEmpty = require('./isEmpty/isEmpty.js')
const c = require('./template-colors-web/index.js')
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

var PrependZeros = function (str, len, seperator) {
  if (typeof str === 'number' || Number(str)) {
    str = str.toString();
    return (len - str.length > 0) ? new Array(len + 1 - str.length).join('0') + str : str;
  }
  else {
    var spl = str.split(seperator || ' ')
    for (var i = 0 ; i < spl.length; i++) {
      if (Number(spl[i]) && spl[i].length < len) {
        spl[i] = PrependZeros(spl[i], len)
      }
    }
    return spl.join(seperator || ' ');
  }
};

// let PrependZeros = function (str, len, seperator) {
//   if(typeof str === 'number' || Number(str)){
//     str = str.toString();
//     return (len - str.length > 0) ? new Array(len + 1 - str.length).join('0') + str: str;
//   }
//   else{
//     for(var i = 0,spl = str.split(seperator || ' '); i < spl.length; spl[i] = (Number(spl[i])&& spl[i].length < len)?PrependZeros(spl[i],len):spl[i],str = (i === spl.length -1)?spl.join(seperator || ' '):str,i++);
//     return str;
//   }
// };
let preset = (type, pathToFile,id) => {
  switch (type) {
    case -5:
      stack[`${pathToFile}`][`${id}`].maxCount = 100
      stack[`${pathToFile}`][`${id}`].self.isAssert = false
      break
    case -4:
      stack[`${pathToFile}`][`${id}`].maxCount = 100
      stack[`${pathToFile}`][`${id}`].self.isAssert = false
      break
    case -3:
      stack[`${pathToFile}`][`${id}`].maxCount = 100
      stack[`${pathToFile}`][`${id}`].self.isAssert = false
      break
    case -2:
      stack[`${pathToFile}`][`${id}`].maxCount = 100
      stack[`${pathToFile}`][`${id}`].self.isAssert = false
      break
    case -1:
      stack[`${pathToFile}`][`${id}`].maxCount = 100
      stack[`${pathToFile}`][`${id}`].self.isAssert = false
      break
    default:
      break
  }
  return true
}

const print = (type, count, pathToFile, id, args) => {
  switch (type) {
    case -5:
      console.log(c`${PrependZeros(count, 2)} ${pathToFile}.servicePathToFile ${id}.serviceId`, isEmpty(args) ? '' :args)
      break
    case -4:
      console.log(c`${PrependZeros(count, 2)} ${pathToFile}.orbitDbPathToFile ${id}.orbitDbId`, isEmpty(args) ? '' :args)
      break
    case -3:
      console.log(c`${PrependZeros(count, 2)} ${pathToFile}.blockchainPathToFile ${id}.blockchainId`, isEmpty(args) ? '':args)
      break
    case -2:
      console.log(c`${PrependZeros(count, 2)} ${pathToFile}.workerPathToFile ${id}.workerId`, isEmpty(args) ? '' :args)
      break
    case -1:
      console.log(c`${PrependZeros(count, 2)} ${pathToFile}.defaultPathToFile ${id}.defaultId`, isEmpty(args) ? '' :args)
      break
    default:
      break
  }
  return true
}

let assert = {
  assert: (maxCount,  pathToFile = "", id = "default", args) => {
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
      if(stack[pathToFile][id].maxCount === 0){
        if(stack[pathToFile][id].self.isConsole) {
          print(maxCount, stack[pathToFile][id].count, pathToFile, id, args)
        }

        if(stack[pathToFile][id].self.isAssert) {
          console.assert(false, pathToFile, stack)
        }

        stack[pathToFile][id].init = true

      } else {
        if(stack[pathToFile][id].self.isConsole) {
          print(maxCount, stack[pathToFile][id].count, pathToFile, id, args)
        }
      }
    } else {
      stack[pathToFile][id].count = stack[pathToFile][id].count + 1
      if(stack[pathToFile][id].count >= stack[pathToFile][id].maxCount) {
        if(stack[pathToFile][id].self.isConsole) {
          print(maxCount, stack[pathToFile][id].count, pathToFile, id, args)
        }

        if(stack[pathToFile][id].self.isAssert) {
          console.assert(false, pathToFile, stack)
        }
        stack[pathToFile][id].init = true
      } else {

        if(stack[pathToFile][id].self.isConsole) {
          print(maxCount, stack[pathToFile][id].count, pathToFile, id, args)
        }
      }
    }
    return true
  }
}
module.exports = assert