import Logo from "../components/procopio/Logo";
import ProcopioButton from "../components/procopio/ProcopioButton";

const PageProcopio = () => {
  return (
    <>
      <h1>Gabriele Procopio</h1>
      <Logo />
      <p>siummmmmmmmmmmmmmmmmmmmmmmmmmm</p>
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
      <p>Christian Bale</p>
      <p>Cristiano Ronaldo</p>
      <p>
        Esiste un modo per unire tutti questi commit in un unico commit quando
        si esegue il merge su master Si può fare anche con una pull request?
      </p>
      <p>git merge --squash </p>
      <p>
        ho eseguito un commit ma mi sono accorto che ho sbagliato a scrivere il
        messaggio, come posso correggerlo?.
      </p>
      <p>git commit --amend -m "an updated commit message"</p>
      <ProcopioButton />
      <p>
        in 2 commit diverse la modifica di creazione del file Button.tsx e la
        modifica di aggiunta del componente Button al componente page
      </p>
      <p>si può usare se abbiamo solo una commit git reset HEAD~</p>
      <p>
        Esiste un modo per riavvolgere il tempo in una branch? Scrivilo in un
        tag di testo
      </p>
      <p>git reset --soft o git reset --hard</p>
      <p>Angular è il framework più bello del mondo</p>
    </>
  );
};
export default PageProcopio;
