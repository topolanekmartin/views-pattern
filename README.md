# Views pattern

This project serves as demonstration of views (also known as components/hooks/views) pattern using React and Typescript. For this pattern
there exist following component folder structure.

Main goal of this pattern is divide UI and logic of each individual component. The main benefit
of this pattern is a reusable UI or logic.

## Definitions
### Views
First of all, let's define component view. The component view can be seen as a component layout. 
The layout is made up of common, styled or shared components.

### Components
A shared component can be thought of as a subcomponent of a component. We create a shared 
component when there is a repeating element across multiple views of the same component. 
This avoids duplication of code (DRY principle). 

Styled component is created only for a given view. It can extend an HTML element,
a common or a shared component.

### Hooks
In this pattern every view has a custom hook. The hook contains specific logic related only 
for concrete view.

## Folder structure
```
ComponentName
├───components
├───hooks
│   │   useComponentName.ts
│   │   useComponentNameOtherView.ts
├───views
│   ├───Default
│   │   ├───styles
│   │   |   |   Default.style.ts
│   │   |   |   index.ts
│   │   |   Default.tsx
│   │   |   index.ts
│   ├───OtherView
│   │   ├───styles
│   │   |   |   OtherView.style.ts
│   │   |   |   index.ts
│   │   |   OtherView.tsx
│   │   |   index.ts
│   ComponentName.ts
│   OtherView.ts
│   index.ts
```

As you can see, there exists 3 base folders `components`, `hooks` and `views`. In addition, you may have also 
noticed that folder and file names are kept as short as possible for better readability.
