import NavBar from "./NavBar"

const Footer = () => {
    const formSubmit = () => (
        console.log('form is submitted')
    )
    return (
        <footer>
            <NavBar>
                <form onClick={formSubmit}>
                    <p> Subscribe e</p>
                    <div>
                        <label htmlFor="name"> Enter your name</label>
                        <input type="text" name="name" id="name"/>
                    </div>
                    <button type="submit" onClick={formSubmit}>Submit</button>
                </form>
            </NavBar>
        </footer>
    )
}

export default Footer