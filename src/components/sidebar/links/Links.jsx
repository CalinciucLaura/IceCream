import React from "react"

const Links = (props) => {
    const items = [
        "Homepage",
        "About",
        "Menu",
        "Services",
        "Contact"
    ]
    return (
        <div className="links">
            {items.map(item => (
                <a href={`#${item}`} key={item}>{item}</a>
            ))}
        </div>
    )
};

export default Links;
