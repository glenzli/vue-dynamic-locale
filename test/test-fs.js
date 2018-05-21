const _storage = new Map()

export default {
  existsSync (path) {
    return _storage.has(path)
  },

  readFile (path, encoding, callback) {
    if (this.existsSync(path)) {
      callback(null, _storage.get(path))
    }
  },

  readFileSync (path, encoding) {
    if (this.existsSync(path)) {
      return _storage.get(path)
    } else {
      return null
    }
  },

  writeFile (path, data, options, callback) {
    _storage.set(path, data)
  },

  writeFileSync (path, data, options) {
    _storage.set(path, data)
  },

  readdirSync (path) {
    let subpaths = []
    _storage.forEach((value, key) => {
      if (key.startsWith(path)) {
        subpaths.push(key.substr(path.length + 1))
      }
    })
    return subpaths
  }
}