# Jacobs Icons

Jacobs Icons is a lightweight private npm library which allows you to use icons from the Jacobs icon stack.

## Installation

### Prerequisites

None

### How to install

```zsh
npm install @jacobsdigitalfactory/jacobs-icons@latest
```

For Yarn please use

```zsh
yarn add @jacobsdigitalfactory/jacobs-icons@latest
```

You must also set up similar permission for your deployment pipeline.

## Usage

If you're running a React based application you can use the Icons as components below is how you can do this.

```typescript
import { JbsArrowAmber } from "jacobs-icons";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={JbsArrowAmber}
          className="your-class"
          alt="Arrow Amber Icon"
        />
      </header>
    </div>
  );
};

export default App;
```

Alternatively, you can import the stylesheet into your javascript based project and determine the size of the font using the `font-size` css attribute.

(below example is using React)

```typescript
import "jacobs-icons/style.css";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <i className="jbs jbs-miletones" style={{ fontSize: "100px" }} />
      </header>
    </div>
  );
};

export default App;
```

## Contributing

Pull requests are welcome to add new icons to the library. Icons must be approved icons from the Digital Factory UX team.
