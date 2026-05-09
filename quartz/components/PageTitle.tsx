import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  
  return (
    <h2 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        {/* Injeksi Logo di atas judul */}
        <img 
          src={`${baseDir}/static/logo.avif`} 
          alt="Website Logo" 
          class="page-title-logo"
        />
        <span class="page-title-text">{title}</span>
      </a>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
}
.page-title a {
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
}
.page-title-logo {
  width: 100%;
  max-width: 120px;
  height: auto;
  display: block;
}
.page-title-text {
  font-family: "EB Garamond", "Lora", serif;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
