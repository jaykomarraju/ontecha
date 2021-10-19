import React from 'react'

export const FooterButton = () => {
    return (
        <div>
            <button className="button-green" type="submit">CREATE NEW UPLOAD CYCLE</button>
            <button className="button-orange" type="submit">VIEW CURRENT UPLOAD CYCLES</button>
            <button className="button-purple" type="submit">VIEW BATCH DAYS</button>
        </div>
    )
}

export default FooterButton