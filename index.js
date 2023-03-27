import fs from 'fs'
import parser from '@babel/parser'
import traverse from '@babel/traverse'

function createAsset () {
  // 1. 获取文件内容
  // 2. 获取依赖关系
  const source = fs.readFileSync('./main.js', {
    encoding: 'utf-8'
  })
  // console.log(source)
  const ast = parser.parse(source, {
    sourceType: 'module'
  })
  traverse.default(ast, {
    ImportDeclaration ({ node }) {
      console.log(node.source.value)
    }
  })
}

createAsset()
