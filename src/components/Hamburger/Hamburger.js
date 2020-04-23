import React from 'react';
import "./styles.css";


const Hamburger = ({secilenMalzemeler}) => {
    // Kapsayici icin React fragment kullaniyoruz.
    return (
        <>
            <div>
                <div className="BreadTop" style={{
                    height: "100px"
                }} />
                {
                    secilenMalzemeler.map((malzeme) => {
                        const elements = [];
                        const malzemeDivi = <div
                            key={malzeme.id}
                            style={{
                                height: "20px",
                                backgroundColor: malzeme.color,
                                width: "30%",
                                margin: "0 auto",
                                marginTop: "5px",
                                borderRadius:"20px"
                            }}
                        >
                            <p>{malzeme.name} and {malzeme.price}</p>
                            {/* {malzeme.count} */}
                        </div>;
                        for(let i=0; i< malzeme.count;i++){
                            elements.push(malzemeDivi);
                        }
                        return elements;
                    })
                }
                <div className="BreadBottom" style={{
                    height: "50px"
                }}/>
                
            </div>
            
        </>
    );
};

export default Hamburger;