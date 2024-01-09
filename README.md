# Javascript Reference Manager
A JavaScript class with static methods

## Usage / Example

```javascript
import RefManager from "./RefManager.js";

class Class1 {
    constructor() {
        RefManager.SetRef("Class1", this);
    }

    Run(str) {
        console.log("Class1", str);
    }
}

class Class2 {
    Run() {
        RefManager.GetRef("Class1").Run("Hello From Class2");
    }
}
```