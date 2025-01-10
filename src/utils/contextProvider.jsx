import React, { createContext, useState } from 'react'

const LinkContext = createContext({
    twitter: null, 
    linkedIn: null,
    whatsapp: null,
})

export const LinkProvider = ({children}) => {

    const [twitter, setTwitter] = useState("https://x.com/Israelshedo913")
    const [linkedIn, setLinkedIn] = useState("https://www.linkedin.com/in/israel-shedrack-b12197285/")
    const [whatsapp, setWhatsapp] = useState("https://wa.me/09166701945")

    return <LinkContext.Provider value={{twitter, setTwitter, linkedIn, setLinkedIn, whatsapp, setWhatsapp}}>
        {children}
    </LinkContext.Provider>

}

export default LinkContext