
import { ethers } from "ethers";

const Buy = ({ state }) => {
  const buyCoffee = async (event) => {
    event.preventDefault();
    const { contract } = state;
    const name = document.querySelector("#name").value;
    const message = document.querySelector("#message").value;
    console.log(name, message, contract);
    const amount = { value: ethers.utils.parseEther("0.001") };
    const transaction = await contract.buyCoffee(name, message, amount);
    await transaction.wait();
    console.log("Transaction is done");
  };

  return (
    <>
      <div className="container-md" style={{ width: "90%", maxWidth: "400px", margin: "0 auto", marginTop: "25px" }}>
        <form onSubmit={buyCoffee}>
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: "bold", color: "white" }}>NAME</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ fontWeight: "bold", color: "white" }}>MESSAGE</label>
            <input
              type="text"
              className="form-control"
              id="message"
              placeholder="Enter Your Message"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={!state.contract}
          >
            BUY
          </button>
        </form>
      </div>
    </>
  );
};

export default Buy;
