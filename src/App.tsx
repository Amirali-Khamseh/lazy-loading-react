import React, { Suspense } from "react"
 const LazyComponent = React.lazy(()=>import('./componenets/LazyComponent'))
function App() {
return <main>
  <Suspense fallback={<div> Loading the lazy Componenet ....</div>}>
  <LazyComponent/>
  </Suspense>
</main>
}

export default App;
