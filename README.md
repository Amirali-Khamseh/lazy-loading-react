This is a README for a blog : https://blog.amir-khamseh.com/lazy-loading-react

## Code Splitting and Lazy Loading 🦥

Code splitting and lazy loading are both optimization techniques in React that help improve performance by reducing the initial bundle size and loading components only when needed.

### 1. What is Code Splitting?

Code splitting is the process of breaking down a large JavaScript bundle into smaller chunks that can be loaded on demand. This reduces the initial load time of your application.

**Why Use Code Splitting?**

- Faster initial page load (smaller main bundle).
- Better performance, especially for large apps.
- Only load code when the user needs it.

### 2. What is Lazy Loading?

Lazy loading is a technique where you delay the loading of a component (or module) until it is actually needed (e.g., when it renders for the first time).

**How React Implements Lazy Loading**

React provides:

- `React.lazy()` → Dynamically imports a component.
- `<Suspense>` → Shows a fallback UI while the lazy component loads.

Here 👉([GitHub repo](https://github.com/Amirali-Khamseh/lazy-loading-react))👈 you can find an example that shows how lazy loading prevents a heavy, GPU-intensive object from being rendered exactly when it's needed and not at first when the page loads.  
There are two commits — the first one shows the loading without lazy loading, the second one shows loading the page **with** lazy loading.

And all the magic happens here:

```tsx
import React, { Suspense } from "react"

const LazyComponent = React.lazy(() => import('./components/LazyComponent'))

function App() {
  return (
    <main>
      <Suspense fallback={<div>Loading the lazy component...</div>}>
        <LazyComponent />
      </Suspense>
    </main>
  )
}

export default App;
```
You just need to import the components you wanna be lazy loaded via `lazy` and wrap it into `Suspense`, and put a `fallback` for whatever you wanna show until the component loads.

🔚
