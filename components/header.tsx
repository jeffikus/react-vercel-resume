import { ThemeToggle } from './theme-toggle'

export function Header() {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold font-poppins">Jeffrey Pearce</h1>
          <p className="text-lg font-poppins">Charlotte, NC and Remote US</p>
        </div>
        <ThemeToggle />
      </div>
    </header>
  )
}

