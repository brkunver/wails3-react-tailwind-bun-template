/**
 * Root React component that renders a centered header with the text "Wails + React".
 *
 * @returns A JSX element containing a full-viewport, centered container with a styled heading.
 */
function App() {
  return (
    <div className="flex flex-col items-center bg-black justify-center min-h-screen">
      <h1 className="text-3xl font-bold underline text-white">Wails + React</h1>
    </div>
  )
}

export default App