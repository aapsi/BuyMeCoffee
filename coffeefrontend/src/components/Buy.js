const Buy = ({ state }) => {

    const buyCoffee = async(event) => {
        // this will stop the page from reloading once their is a chance in name or message
        event.preventDefault();
        const { contract } = state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value

    }

    return (
        <>
        <form onSubmit={buyCoffee}>

            <label>Name</label>
            <input type="text" id="name" placeholder="Enter your Name"></input>

            <label>Message</label>
            <input type="text" id="message" placeholder="Enter your Message"></input>

            <button type="submit">Buy</button>

        </form>
        
        </>
    );
}

export default Buy;