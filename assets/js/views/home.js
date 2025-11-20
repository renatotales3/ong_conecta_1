export default function renderHome() {
    return `
        <section id="sobre" class="hero-section">
            <header>
                <h1>Sobre a Organização</h1>
            </header>
            <div>
                <p>A ONG Conecta é uma organização dedicada a fortalecer o terceiro setor brasileiro, fornecendo tecnologia e recursos para que outras organizações possam ampliar seu impacto social.</p>
                <figure>
                    <img src="assets/img/hero-institucional.svg" alt="Equipe da ONG trabalhando em conjunto" width="800" height="400" style="margin: 0 auto;">
                    <figcaption>Nossa equipe em ação transformando realidades.</figcaption>
                </figure>
            </div>
        </section>

        <section id="institucional">
            <header>
                <h2>Nossa Identidade</h2>
            </header>
            <div class="valores-grid">
                <article>
                    <h3>Missão</h3>
                    <p>Democratizar o acesso à tecnologia para organizações sociais, potencializando sua capacidade de transformação.</p>
                </article>
                <article>
                    <h3>Visão</h3>
                    <p>Ser referência nacional em inovação tecnológica para o terceiro setor até 2030.</p>
                </article>
                <article>
                    <h3>Valores</h3>
                    <ul>
                        <li>Transparência</li>
                        <li>Colaboração</li>
                        <li>Inovação Social</li>
                        <li>Empatia</li>
                    </ul>
                </article>
            </div>
        </section>

        <section id="historico">
            <header>
                <h2>Histórico e Conquistas</h2>
            </header>
            <div>
                <p>Fundada em 2015, a ONG Conecta nasceu da necessidade de digitalizar o terceiro setor. Desde então, já impactamos mais de 500 organizações em todo o Brasil.</p>
                <ul>
                    <li><strong>2015:</strong> Fundação da organização.</li>
                    <li><strong>2018:</strong> Prêmio de Inovação Social.</li>
                    <li><strong>2022:</strong> Marca de 1 milhão de beneficiários indiretos.</li>
                </ul>
            </div>
        </section>

        <section id="equipe">
            <header>
                <h2>Equipe e Estrutura</h2>
            </header>
            <div>
                <p>Contamos com um conselho administrativo experiente e uma equipe multidisciplinar de desenvolvedores, assistentes sociais e gestores de projetos.</p>
            </div>
        </section>

        <section id="contato">
            <header>
                <h2>Fale Conosco</h2>
            </header>
            <address>
                <p><strong>Endereço:</strong> Av. Paulista, 1000 - São Paulo, SP</p>
                <p><strong>Email:</strong> contato@ongconecta.org.br</p>
                <p><strong>Telefone:</strong> (11) 99999-9999</p>
            </address>
        </section>
    `;
}