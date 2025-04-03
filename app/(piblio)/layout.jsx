export default function Layout({ children }){
  return(
    <>
      <main className="flex flex-col p-8">
        {children}
      </main>
    </>
  );
};