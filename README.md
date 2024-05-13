# @mukhindev/react-flex

Flexbox with frequently used props + Space

## Install

⚠️ Dependencies: Your project need work with CSS modules.

```
npm install @mukhindev/react-flex
```

## CSS Modules

Package components use the CSS modules without pre-processing, so you can process them to suit your build. Vite and Next.js support CSS modules.

## Example

```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ [Add]  [Remove]  ←┄┄┄┄ Space ┄┄┄┄→  Total: 42 ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛

```

```JavaScript
import { Flex, Space } from "@mukhindev/react-flex"

export default function MyComponent() {
  return (
    <div>
      <Flex className="toolbar" direction="row" gap={16}>
        <Button>Add</Button>
        <Button>Remove</Button>
        <Space />
        <div>Total: 42</div>
      </Flex>
    </div>
  )
}
```