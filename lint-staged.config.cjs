const fs = require('fs')

module.exports = {
  '*.{ts,tsx}': (files) => {
    // srcフォルダがある場合はその親ディレクトリを取得
    const cwd = process.cwd()
    const pattern = new RegExp(cwd + '/(.*)/src/.*')
    const srcParentDirs = new Set()
    files.forEach((f) => {
      const match = f.match(pattern)
      if (match) srcParentDirs.add(cwd + '/' + match[1])
    })

    // srcフォルダと同一のディレクトリ配下にtsconfig.jsonが存在する場合は、tscによるチェック対象とする
    const tscCheckDirs = []
    srcParentDirs.forEach((d) => {
      if (fs.existsSync(d + '/tsconfig.json')) {
        tscCheckDirs.push(d)
      }
    })

    return [
      `yarn fix:format ${files.join(' ')}`,
      `yarn fix:lint ${files.join(' ')}`,
      ...tscCheckDirs.map((d) => `yarn tsc -p ${d} --noEmit`)
    ]
  },
}
