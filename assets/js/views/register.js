import { setupFormValidation } from '../utils/validation.js';

export default function renderRegister() {
    return `
        <section id="cadastro">
            <header>
                <h2>Junte-se a Nós</h2>
                <p>Preencha o formulário abaixo para se cadastrar como voluntário ou apoiador.</p>
            </header>

            <div class="alert alert-info">
                <strong>Nota:</strong> Seus dados estão seguros conosco e serão utilizados apenas para fins de cadastro.
            </div>

            <figure style="text-align: center; margin-bottom: 30px;">
                <img src="assets/img/voluntarios.svg" alt="Mãos unidas simbolizando união" width="400" height="200" style="margin: 0 auto;">
            </figure>

            <form id="form-cadastro" novalidate>
                <fieldset>
                    <legend>Dados Pessoais</legend>
                    
                    <div class="form-group">
                        <label for="nome" class="form-label">Nome Completo:</label>
                        <input type="text" id="nome" name="nome" class="form-control" required minlength="3" placeholder="Seu nome completo">
                        <span class="error-message" id="error-nome"></span>
                    </div>

                    <div class="form-group">
                        <label for="email" class="form-label">E-mail:</label>
                        <input type="email" id="email" name="email" class="form-control" required placeholder="seu@email.com">
                        <span class="error-message" id="error-email"></span>
                    </div>

                    <div class="form-group">
                        <label for="cpf" class="form-label">CPF:</label>
                        <input type="text" id="cpf" name="cpf" class="form-control" required placeholder="000.000.000-00">
                        <span class="error-message" id="error-cpf"></span>
                    </div>

                    <div class="form-group">
                        <label for="telefone" class="form-label">Telefone:</label>
                        <input type="tel" id="telefone" name="telefone" class="form-control" required placeholder="(00) 00000-0000">
                        <span class="error-message" id="error-telefone"></span>
                    </div>

                    <div class="form-group">
                        <label for="nascimento" class="form-label">Data de Nascimento:</label>
                        <input type="date" id="nascimento" name="nascimento" class="form-control" required>
                        <span class="error-message" id="error-nascimento"></span>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <div class="form-group">
                        <label for="cep" class="form-label">CEP:</label>
                        <input type="text" id="cep" name="cep" class="form-control" required placeholder="00000-000">
                        <span class="error-message" id="error-cep"></span>
                    </div>

                    <div class="form-group">
                        <label for="endereco" class="form-label">Endereço Completo:</label>
                        <input type="text" id="endereco" name="endereco" class="form-control" required placeholder="Rua, número, complemento">
                        <span class="error-message" id="error-endereco"></span>
                    </div>
                </fieldset>

                <button type="submit" class="btn btn-primary">Enviar Cadastro</button>
            </form>
        </section>
    `;
}

export function initRegister() {
    setupFormValidation('form-cadastro');
}