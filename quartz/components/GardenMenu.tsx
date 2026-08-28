import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { pathToRoot } from "../util/path"
import { classNames } from "../util/lang"

interface MenuItem {
  name: string
  icon: string
  href: string
  badge?: string
  external?: boolean
}

interface MenuSection {
  title: string
  items: MenuItem[]
}

const defaultSections: MenuSection[] = [
  {
    title: "The Garden",
    items: [
      { name: "Welcome / Start Here", icon: "🏡", href: "/" },
      { name: "Evergreen Notes", icon: "🌳", href: "/04---plants", badge: "Core" },
      { name: "Essays & Harvest", icon: "🌾", href: "/05---harvest", badge: "Articles" },
    ],
  },
]

export const GardenMenu: QuartzComponentConstructor = () => {
  const Component: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
    const root = pathToRoot(fileData.slug!)

    return (
      <div class={classNames(displayClass, "garden-menu")}>
        {defaultSections.map((section) => (
          <div class="menu-section" key={section.title}>
            <div class="menu-section-title">{section.title}</div>
            <ul class="menu-list">
              {section.items.map((item) => {
                let targetUrl = item.href
                if (!item.external) {
                  if (item.href === "/") {
                    targetUrl = root === "." ? "./" : `${root}/`
                  } else if (item.href.startsWith("/#")) {
                    targetUrl = `${root === "." ? "./" : `${root}/`}${item.href.substring(1)}`
                  } else if (item.href.startsWith("/")) {
                    targetUrl = `${root === "." ? "." : root}${item.href}`
                  }
                }

                return (
                  <li class="menu-item" key={item.name}>
                    <a
                      href={targetUrl}
                      class="menu-link"
                      target={item.external ? "_blank" : undefined}
                      rel={item.external ? "noopener noreferrer" : undefined}
                    >
                      <span class="menu-icon">{item.icon}</span>
                      <span class="menu-label">{item.name}</span>
                      {item.badge && <span class="menu-badge">{item.badge}</span>}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        ))}
      </div>
    )
  }

  Component.afterDOMLoaded = `
  function setupMobileGardenMenu() {
    const isMobile = window.matchMedia("(max-width: 800px)").matches
    const desktopMenu = document.querySelector(".sidebar.left .garden-menu")
    const explorerContent = document.querySelector(".explorer .explorer-content")
    
    if (isMobile && desktopMenu && explorerContent) {
      let mobileMenu = explorerContent.querySelector(".garden-menu-mobile")
      if (!mobileMenu) {
        mobileMenu = desktopMenu.cloneNode(true)
        mobileMenu.classList.remove("desktop-only")
        mobileMenu.classList.add("garden-menu-mobile")
        explorerContent.prepend(mobileMenu)
      }
    }
  }

  document.addEventListener("nav", setupMobileGardenMenu)
  document.addEventListener("render", setupMobileGardenMenu)
  `

  return Component
}

export default GardenMenu
