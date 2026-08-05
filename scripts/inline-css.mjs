#!/usr/bin/env node
import { readFileSync, writeFileSync, readdirSync, unlinkSync } from 'node:fs'
import { join, resolve } from 'node:path'

const DIST_DIR = resolve(process.cwd(), 'dist')
const HTML_PATH = join(DIST_DIR, 'index.html')
const ASSETS_DIR = join(DIST_DIR, 'assets')

function findCssFile() {
  const entries = readdirSync(ASSETS_DIR)
  const cssFile = entries.find((f) => f.startsWith('index-') && f.endsWith('.css'))
  if (!cssFile) throw new Error('No se encontró archivo CSS en dist/assets/')
  return join(ASSETS_DIR, cssFile)
}

function extractFontUrls(css) {
  const regex = /url\(["']?(\/assets\/[^"')]+\.woff2)["']?\)/g
  const urls = new Set()
  let match
  while ((match = regex.exec(css)) !== null) {
    urls.add(match[1])
  }
  return [...urls]
}

function buildPreloadTags(fontUrls) {
  return fontUrls
    .map(
      (url) =>
        `<link rel="preload" as="font" type="font/woff2" href="${url}" crossorigin>`
    )
    .join('\n    ')
}

function inlineCss() {
  const cssPath = findCssFile()
  const css = readFileSync(cssPath, 'utf8')
  const fontUrls = extractFontUrls(css)

  let html = readFileSync(HTML_PATH, 'utf8')

  const linkRegex =
    /<link\s+rel="stylesheet"[^>]*href="\/assets\/index-[^"]+\.css"[^>]*>\s*/i
  const styleBlock = `<style data-inline="true">\n${css}\n</style>`

  if (linkRegex.test(html)) {
    html = html.replace(linkRegex, styleBlock)
  } else {
    html = html.replace(/<\/head>/i, `  ${styleBlock}\n  </head>`)
  }

  if (fontUrls.length > 0) {
    const preloads = `    ${buildPreloadTags(fontUrls)}`
    html = html.replace(/<\/head>/i, `\n    ${preloads}\n  </head>`)
  }

  writeFileSync(HTML_PATH, html)
  unlinkSync(cssPath)

  console.log(
    `[inline-css] CSS inlineado (${(css.length / 1024).toFixed(1)} KiB), ${fontUrls.length} fuentes preloaded, archivo CSS eliminado.`
  )
}

inlineCss()
