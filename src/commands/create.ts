import { welcome } from '../shared/utils.js'
import logger from '../shared/logger.js'

type CodingStyle = 'tsx' | 'vue'

export interface CreateCommandOptions {
  name?: string
  locale?: boolean
  sfc?: boolean
  tsx?: boolean
}

export async function create(options: CreateCommandOptions) {
    welcome()

    logger.title('\n📦📦 Create a project ! \n')
}