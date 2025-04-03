export default function Layout({ children }){
  return(
    <>
      <main className="flex flex-col py-8 px-8 lg:px-16">
        {children}
      </main>
    </>
  );
};