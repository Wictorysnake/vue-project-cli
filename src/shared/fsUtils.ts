import fse from 'fs-extra'
import { fileURLToPath } from 'url'
import { CLI_PACKAGE_JSON } from './constant.js'

const { readJSONSync } = fse

export function getDirname(url: string) {
    return fileURLToPath(new URL('.', url))
}

export function getCliVersion() {
    return readJSONSync(CLI_PACKAGE_JSON).version
}