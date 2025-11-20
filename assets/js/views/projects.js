export default function renderProjects() {
    return `
        <section id="projetos-sociais">
            <header>
                <h2>Nossos Projetos</h2>
                <p>Conheça as iniciativas que estão mudando realidades.</p>
            </header>

            <div class="projetos-grid">
                <article class="card">
                    <img src="assets/img/projeto-educacao.svg" alt="Jovens aprendendo programação" class="card-img">
                    <div class="card-body">
                        <h3 class="card-title">Inclusão Digital</h3>
                        <span class="badge badge-success">Educação</span>
                        <p class="card-text">Oferecemos cursos gratuitos de programação e design para jovens de comunidades carentes.</p>
                        
                        <div class="indicadores">
                            <h4>Impacto:</h4>
                            <ul>
                                <li>+200 Jovens formados</li>
                                <li>85% de Empregabilidade</li>
                            </ul>
                        </div>
                        <a href="#" class="btn btn-primary">Saiba mais</a>
                    </div>
                </article>

                <article class="card">
                    <img src="assets/img/projeto-alimentacao.svg" alt="Horta comunitária" class="card-img">
                    <div class="card-body">
                        <h3 class="card-title">Horta Urbana</h3>
                        <span class="badge badge-warning">Sustentabilidade</span>
                        <p class="card-text">Transformamos terrenos baldios em hortas produtivas, garantindo segurança alimentar.</p>
                        
                        <div class="indicadores">
                            <h4>Impacto:</h4>
                            <ul>
                                <li>+1 Tonelada de alimentos</li>
                                <li>50 Famílias beneficiadas</li>
                            </ul>
                        </div>
                        <a href="#" class="btn btn-primary">Saiba mais</a>
                    </div>
                </article>
            </div>
        </section>

        <section id="voluntariado">
            <header>
                <h2>Seja um Voluntário</h2>
            </header>
            <div class="grid-container">
                <div class="col-6">
                    <p>O voluntariado é a alma da nossa organização. Você pode doar seu tempo e talento de diversas formas:</p>
                    <ul>
                        <li><strong>Mentoria:</strong> Acompanhe o desenvolvimento de um jovem estudante.</li>
                        <li><strong>Mão na Massa:</strong> Ajude na manutenção das hortas e espaços físicos.</li>
                        <li><strong>Administrativo:</strong> Apoie nossas operações diárias.</li>
                    </ul>
                    <p>Quer fazer parte? <a href="cadastro.html" class="btn btn-secondary nav-spa">Cadastre-se agora</a>.</p>
                </div>
            </div>
        </section>
    `;
}