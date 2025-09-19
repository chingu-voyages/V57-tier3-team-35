import "./App.css";

function App() {
  return (
    <div>
      <div className="p-4">
        {/* Headings */}
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        {/* Paragraph */}
        <p>This is a sample paragraph to test body font and spacing.</p>

        {/* Link */}
        <a href="#">This is a link</a>

        {/* Form */}
        <form className="mt-4 space-y-2">
          <div className="flex flex-col w-1/2">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Enter your name" />
          </div>

          <div className="flex flex-col w-1/2">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Enter your message"
              className="resize-none"
            />
          </div>
        </form>

        {/* Buttons */}
        <div className="mt-4">
          <button className="button">Primary Button</button>
        </div>
      </div>
    </div>
  );
}

export default App;
