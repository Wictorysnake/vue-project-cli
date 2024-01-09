import * as banners from './banners.js'

export function welcome() {
    console.log()
    console.log(
        process.stdout.isTTY && process.stdout.getColorDepth() > 8
          ? banners.gradientBanner
          : banners.defaultBanner
      )
      console.log()
}