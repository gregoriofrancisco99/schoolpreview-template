import arrowRight from './../assets/icons/arrow-right.svg';
import './../assets/style/banner.scss';

export function Home() {
  return (
    <div id="banner">
      <article id="welcome-announce">
        <h2>Bem-vindo ao nosso centro</h2>
        <p><strong>Profissionalidade na educação</strong></p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio ab assumenda nihil eaque reiciendis voluptas quasi aut.
        </p>
        <button id="see-curses-btn">Ver Cursos <span><img src={arrowRight} alt="" /></span></button>
      </article>
    </div>
  );
}