export async function Repos() {
  const response = await fetch("http://api.github.com/users/samuelwsz/repos", {
    next: {
      revalidate: 30, //atualiza a chamada a cada 30 segundos
    },
  })
  const repos = await response.json()

  return (
    <>
      <div>
        <p>pagina Repos</p>
        <pre>{JSON.stringify(repos, null, 2)}</pre>
      </div>
    </>
  )
}
