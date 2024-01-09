// const tailwindColors = require("tailwindcss/colors")
// const tailwindPlugin = require("tailwindcss/plugin")
const tailwindPlugin = require("./lib/createPlugin")

const postcssJs = require("postcss-js")
const pc = require("picocolors")
const postcssPrefix = require("./lib/addPrefix")

const daisyuiInfo = require("../package.json")
const utilities = require("../dist/utilities")
const base = require("../dist/base")
const unstyled = require("../dist/unstyled")
const styled = require("../dist/styled")
const utilitiesUnstyled = require("../dist/utilities-unstyled")
const utilitiesStyled = require("../dist/utilities-styled")
const themes = require("./theming/themes")
const colorFunctions = require("./theming/functions")
const utilityClasses = require("./lib/utility-classes")
let colorObject = require("./theming/index")

const mainFunction = ({ addBase, addComponents, config }) => {
  let logs = false
  if (config("sensoroui.logs") != false) {
    logs = true
  }
  if (logs) {
    console.log()
    console.log(`✨ ${pc.magenta("SENSOROUI")} ${pc.dim(daisyuiInfo.version)}`)
  }

  // inject @base style
  if (config("sensoroui.base") != false) {
    addBase(base)
  }

  // inject components
  let file = styled
  if (config("sensoroui.styled") == false) {
    file = unstyled
  }

  // add prefix to class names if specified
  const prefix = config("sensoroui.prefix")
  let postcssJsProcess
  if (prefix) {
    try {
      postcssJsProcess = postcssJs.sync(postcssPrefix({ prefix, ignore: [] }))
    } catch (error) {
      logs && console.error(`Error occurred and prevent applying the "prefix" option:`, error)
    }
  }
  const shouldApplyPrefix = prefix && postcssJsProcess
  if (shouldApplyPrefix) {
    file = postcssJsProcess(file)
  }

  addComponents(file)

  const themeInjector = colorFunctions.injectThemes(addBase, config, themes)
  themeInjector

  // inject @utilities style needed by components
  if (config("sensoroui.utils") != false) {
    addComponents(utilities, { variants: ["responsive"] })

    let toAdd = utilitiesUnstyled // shadow clone here to avoid mutate the original
    if (shouldApplyPrefix) {
      toAdd = postcssJsProcess(toAdd)
    }
    addComponents(toAdd, { variants: ["responsive"] })

    toAdd = utilitiesStyled
    if (shouldApplyPrefix) {
      toAdd = postcssJsProcess(toAdd)
    }
    addComponents(toAdd, { variants: ["responsive"] })
  }

  if (logs) {
    if (config("sensoroui.styled") == false) {
      console.log(
        `├─ ${pc.yellow("ℹ︎")} ${pc.blue("styled")} ${pc.reset("config is")} ${pc.blue(
          "false"
        )} ${pc.dim("\tcomponents won't have design decisions")}`
      )
    }
    if (config("sensoroui.utils") == false) {
      console.log(
        `├─ ${pc.yellow("ℹ︎")} ${pc.blue("utils")} ${pc.reset("config is")} ${pc.blue(
          "false"
        )} ${pc.dim("\tdaisyUI utility classes are disabled")}`
      )
    }
    if (config("sensoroui.prefix") && config("sensoroui.prefix") !== "") {
      console.log(
        `├─ ${pc.green("✔︎")} ${pc.blue("prefix")} is enabled${pc.dim(
          "\t\tdaisyUI classnames must use"
        )} ${pc.blue(config("sensoroui.prefix"))} ${pc.dim("prefix")}`
      )
    }
    if (themeInjector.themeOrder.length > 0) {
      console.log(
        `├─ ${pc.green("✔︎")} ${themeInjector.themeOrder.length} ${
          themeInjector.themeOrder.length > 1 ? "themes" : "theme"
        } added${pc.dim("\t\thttps://daisyui.com/docs/themes")}`
      )
    }
    if (themeInjector.themeOrder.length === 0) {
      console.log(
        `├─ ${pc.yellow("ℹ︎")} All themes are disabled in config${pc.dim(
          "\t\thttps://daisyui.com/docs/themes"
        )}`
      )
    }
    let messages = [
      `${pc.green("❤︎")} ${pc.reset("Support daisyUI project:")}\t${pc.dim(
        daisyuiInfo.funding.url
      )}`,
      `${pc.green("★")} ${pc.reset("Star daisyUI on GitHub")}\t${pc.dim(
        "https://github.com/saadeghi/daisyui"
      )}`,
    ]
    console.log(`╰─ ${messages[Math.floor(Math.random() * messages.length)]}`)
    console.log()
  }
}

module.exports = tailwindPlugin(mainFunction, {
  theme: {
    extend: {
      colors: {
        ...colorObject,
        // adding all Tailwind `neutral` shades here so they don't get overridden by daisyUI `neutral` color
        "neutral-50": "#fafafa",
        "neutral-100": "#f5f5f5",
        "neutral-200": "#e5e5e5",
        "neutral-300": "#d4d4d4",
        "neutral-400": "#a3a3a3",
        "neutral-500": "#737373",
        "neutral-600": "#525252",
        "neutral-700": "#404040",
        "neutral-800": "#262626",
        "neutral-900": "#171717",
        "neutral-950": "#0a0a0a",
      },
      ...utilityClasses,
    },
  },
})
