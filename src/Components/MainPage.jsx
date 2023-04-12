


// const api = `https://api.shrtco.de/v2/shorten?url=${linkInput.value}`







import React from "react"
import OutPutBox from "./OutPutBox"

export default function MainPage() {

    const [output, setoutput] = React.useState([])
    const [userInput, setUserInput] = React.useState('')

    const linkInput = document.querySelector('.linkInput')
    const pal = document.querySelector('.pal')

    /*****************/
    /* Controlled Input */
    function changeuserInput(e) {
        setUserInput(e.target.value)
    }

    /***************** */
    /* fetching api and updating state */
    function shortenLink() {
        if (!userInput) {
           console.log('asd')
        } else {
            pal.style.display = 'none'
            linkInput.style.border = '2px solid gray'

            /*************/
            const fetching = async () => {
                const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${userInput}`)
                const data = await res.json()
            
                if (data.ok) {
                  
                    setoutput(prev => ([...prev,{
                        userInput: userInput,
                        shortLink: data.result.short_link
                    }]))

                }else{
                    pal.style.display = 'block'
                    linkInput.style.border = '2px solid red'
                }
            }

            fetching()

        }

    }

    /******************/
    /* Mapping Links */
    const mappedArray = output.map((x, i) => <OutPutBox
        key={i}
        userInput={x.userInput}
        shortLink={x.shortLink}
    />)

    return (
        <>
            <main>

                <div className="introDiv">
                    <div>

                        <h1 className="title">More than just shorter links</h1>
                        <p className="sub-title">
                            Build your brand’s recognition and get detailed insights
                            on how your links are performing.
                        </p>
                        <button className="btn">Get Started</button>
                    </div>

                    <picture>
                        <img src=".\images\illustration-working.svg" alt="" />
                    </picture>
                </div>



                <div className="linkDiv">
                    <input
                        placeholder="Shorten a link here..."
                        type="text"
                        className="linkInput"
                        value={userInput}
                        onChange={changeuserInput}
                    />
                    <span className="pal">Please add a link</span>
                    <button className="btn shortenLink" onClick={shortenLink}>Shorten it!</button>
                </div>


                <div className="xyzz">
                    {mappedArray}
                </div>


                <div className="flexwrap">
                    <h2>Advanced Statistics</h2>
                    <p> Track how your links are performing across the web with our
                        advanced statistics dashboard</p>
                </div>

                <div className="stats" id="Features">

                    <div className="stat brandRecognition">
                        <img src=".\src\assets\images\icon-brand-recognition.svg" alt="Brand Recognition" />
                        <h3>  Brand Recognition</h3>
                        <p>Boost your brand recognition with each click. Generic links don’t
                            mean a thing. Branded links help instil confidence in your content.</p>
                    </div>

                    <div className="stat detailedRecords">
                        <img src=".\src\assets\images\icon-detailed-records.svg" alt="Detailed Records" />
                        <h3>Detailed Records</h3>
                        <p>Gain insights into who is clicking your links. Knowing when and where
                            people engage with your content helps inform better decisions.</p>
                    </div>

                    <div className="stat customizable">
                        <img src=".\src\assets\images\icon-fully-customizable.svg" alt="Fully Customizable" />
                        <h3>Fully Customizable</h3>
                        <p>Improve brand awareness and content discoverability through customizable
                            links, supercharging audience engagement.</p>
                    </div>

                </div>

                <div className="boostDiv">
                    <h3>Boost your links today</h3>
                    <button className="btn">Get Started</button>
                </div>


            </main>
        </>
    )

}
