# Jacobs Icons

Jacobs Icons is a lightweight private npm library which allows you to use icons from the Jacobs icon stack.

## Installation

### Prerequisites

You must have an `.npmrc` file in the repository you wish to use Jacobs Icons. You can use the `.npmrc.example` file in this repo to get started or use the code below:

```
registry=https://pkgs.dev.azure.com/JacobsDigital/DesignSystem/_packaging/Jacobs-Icons/npm/registry/
                        
always-auth=true
legacy-peer-deps=true

; begin auth token
//pkgs.dev.azure.com/JacobsDigital/DesignSystem/_packaging/Jacobs-Icons/npm/registry/:username=YOURUSERNAME
//pkgs.dev.azure.com/JacobsDigital/DesignSystem/_packaging/Jacobs-Icons/npm/registry/:_password=YOURBASE64HASH
//pkgs.dev.azure.com/JacobsDigital/DesignSystem/_packaging/Jacobs-Icons/npm/registry/:email=YOUREMAIL
//pkgs.dev.azure.com/JacobsDigital/DesignSystem/_packaging/Jacobs-Icons/npm/:username=YOURUSERNAME
//pkgs.dev.azure.com/JacobsDigital/DesignSystem/_packaging/Jacobs-Icons/npm/:_password=YOURBASE64HASH
//pkgs.dev.azure.com/JacobsDigital/DesignSystem/_packaging/Jacobs-Icons/npm/:email=YOUREMAIL
; end auth token
```
Once done you can run the below to install this library into your project.

```zsh
npm install jacobs-icons
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
        <img src={JbsArrowAmber} className="your-class" alt="Arrow Amber Icon" />
      </header>
    </div>
  );
}

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
        <i
          className="jbs jbs-miletones"
          style={{ fontSize: "100px" }}
        />
      </header>
    </div>
  );
}

export default App;
```

## Contributing

Pull requests are welcome to add new icons to the library. Icons must be approved icons from the Digital Factory UX team.
