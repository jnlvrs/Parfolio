function Connect() {
  return (
    <div id="Connect" className="connect-container bg3">
      <div className="formSection canvas bxs">
        <div className="info bg4">
          <h2>Send me a Comment!</h2>
          <p>
            Don’t hesitate to use the form to let me know your thoughts and
            comments
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="sendForm bg2"
          name="signupform"
        >
          <h2>Lets Connect!</h2>
          <div className="form-input">
            <div>
              <label for="name" />
              <input
                type="text"
                className="inputFields hl1 bg3"
                id="name"
                name="name"
                placeholder="Name"
                required
              />
            </div>
            <div>
              <label for="email" />
              <input
                type="email"
                className="inputFields hl1 bg3"
                id="email"
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div>
              <label for="message" />
              <textarea
                type="text"
                className="inputFields hl1 bg3"
                id="message"
                name="message"
                placeholder="Message"
                required
              />
            </div>
            <div id="center-btn">
              <input
                type="submit"
                className="send-btn bg3"
                id="send-btn"
                name="send"
                alt="send"
                value="Send"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Connect;
