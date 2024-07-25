import React from "react"

type SocialLinkProps = {
  logoPath: string,
  logoAlt: string,
  link: string,
  displayText: string
}

const SocialLink: React.FC<SocialLinkProps> = ({ logoPath, logoAlt, link, displayText }) => {
  const openLink = () => {
    window.open(link, "_blank")
  }

  return (
    <div className={"social-link-container"} onClick={openLink}>
      <img src={logoPath} alt={logoAlt} />
      <div>
        <span>{"=>"}</span>
        <span>{displayText}</span>
      </div>
    </div>
  )
}

export default SocialLink
