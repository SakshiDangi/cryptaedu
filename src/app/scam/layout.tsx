
export default function Layout({ children }: {
    children: React.ReactNode
  }) {
    return (
      <>
        {/* <Header /> */}
        <div className="flex flex-col flex-1 w-full h-screen gap-6 m-auto max-w-96">
          {children}
        </div>
      </>
    )
  }