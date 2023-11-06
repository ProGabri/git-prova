import Logo from "../components/procopio/Logo";

const PageProcopio = () => {
  return (
    <>
      <h1>Gabriele Procopio</h1>
      <Logo />
      <p>
        ho fatto un git checkout su procpio-init e poi ho fatto un git rebase
        master
      </p>
      <p>
        la mia branch dedicata è indietro di qualche commit rispetto a master,
        come faccio a portarla avanti? Cioè, come faccio a portare le modifiche
        fatte su master sulla mia branch dedicata?
      </p>
      <p>devo fare un git merge</p>
      <h1>Antipasto</h1>
      <p>tagliere di affettati</p>
      <h1>Primo</h1>
      <p>Pasta alla amatriciana</p>
      <h1>Secondo</h1>
      <p>Cotoletta alla milanese</p>
      <h1>Dolce</h1>
      <p>Tiramisu</p>
      <p>
        Ci ritoviamo con molti commit, come si può fare per unirli in un unico
        commit?
      </p>
      <p>usiamo git squash</p>
      <p>The Weeknd</p>
    </>
  );
};
export default PageProcopio;
