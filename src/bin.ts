#!/usr/bin/env node
import { Command } from 'commander'
import { getCliVersion } from './shared/fsUtils.js'

const program = new Command()

const cliVersion = getCliVersion()

program.version(`wictory-cli ${cliVersion}`).usage('<command> [options]')

program.command('create').description('Create a new vue3 project').option('-n, --name <projectName>', 'Project name').option('-s, --sfc', 'Generate files in sfc format')
.option('-t, --tsx', 'Generate files in tsx format')
.option('-l, --locale', 'Generator internationalized files').action(async (options) => {
    const { create } = await import('./commands/create.js')
    return create(options)
})

program.on('command:*', async ([cmd]) => {
    const { default: logger } = await import('./shared/logger.js')

    program.outputHelp()
    logger.error(`\nUnknown command: ${cmd}.\n`)
    process.exitCode = 1
})

program.parse()