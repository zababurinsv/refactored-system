import modules from './modules/radio/index.mjs'

const template = (self) => {
  return new Promise(async (resolve, reject) => {
    self.style.width = '100%'
    self.attachShadow({mode: 'open'})
    self.shadowRoot.appendChild(self.querySelector('div'))
    resolve(self)
  })
}

const index =  class extends HTMLElement {
  constructor () {
    super()
    template(this)
      .then(async component => {
        new (await modules())(component)
      })
      .catch(error => {
        console.warn('error', error)
      })
  }
}

try { customElements.define('lacerta-radio', index ) }
catch (e) { console.error('error',e) }


export default index
