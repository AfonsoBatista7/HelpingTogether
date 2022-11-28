import React from 'react'

function IconInfo({children, info, style, right}) {
  return (
    <div style={{...style, ...{display:"flex",  position: "relative"}}}>
        {right ? 
            <>
                <div style={{
                    fontWeight: 500,
                    fontSize: 25,
                    color: 'white',
                    textAlign: 'center'
                }}>{info}</div>
                <div>
                    {children}
                </div>
            </>
    :
        <>
            <div>
                {children}
            </div>
            <div style={{
                fontWeight: 500,
                fontSize: 25,
                color: 'white',
                textAlign: 'center'
            }}>{info}</div>
        </>
    }
    </div>
  )
}

export default IconInfo
