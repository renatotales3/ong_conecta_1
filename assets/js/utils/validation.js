export const masks = {
    cpf(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d)/, '$1.$2')
            .replace(/(\d{3})(\d{1,2})/, '$1-$2')
            .replace(/(-\d{2})\d+?$/, '$1');
    },
    phone(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{2})(\d)/, '($1) $2')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{4})\d+?$/, '$1');
    },
    cep(value) {
        return value
            .replace(/\D/g, '')
            .replace(/(\d{5})(\d)/, '$1-$2')
            .replace(/(-\d{3})\d+?$/, '$1');
    }
};

export const validators = {
    required(value) {
        return value.trim() !== '';
    },
    email(value) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(value);
    },
    cpf(value) {
        const cleanCPF = value.replace(/\D/g, '');
        if (cleanCPF.length !== 11) return false;
        if (/^(\d)\1{10}$/.test(cleanCPF)) return false;
        
        let sum = 0;
        let remainder;
        
        for (let i = 1; i <= 9; i++) 
            sum = sum + parseInt(cleanCPF.substring(i-1, i)) * (11 - i);
        remainder = (sum * 10) % 11;
        
        if ((remainder === 10) || (remainder === 11)) remainder = 0;
        if (remainder !== parseInt(cleanCPF.substring(9, 10))) return false;
        
        sum = 0;
        for (let i = 1; i <= 10; i++) 
            sum = sum + parseInt(cleanCPF.substring(i-1, i)) * (12 - i);
        remainder = (sum * 10) % 11;
        
        if ((remainder === 10) || (remainder === 11)) remainder = 0;
        if (remainder !== parseInt(cleanCPF.substring(10, 11))) return false;
        
        return true;
    },
    minLength(value, min) {
        return value.length >= min;
    }
};

export function setupFormValidation(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    const inputs = form.querySelectorAll('input');

    inputs.forEach(input => {
        // Apply masks
        if (masks[input.id]) {
            input.addEventListener('input', (e) => {
                e.target.value = masks[input.id](e.target.value);
            });
        }

        // Validate on blur
        input.addEventListener('blur', () => validateField(input));
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        inputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });

        if (isValid) {
            alert('Formulário enviado com sucesso! (Simulação)');
            form.reset();
        } else {
            alert('Por favor, corrija os erros no formulário.');
        }
    });
}

function validateField(input) {
    const errorSpan = document.getElementById(`error-${input.id}`);
    let isValid = true;
    let errorMessage = '';

    if (input.hasAttribute('required') && !validators.required(input.value)) {
        isValid = false;
        errorMessage = 'Este campo é obrigatório.';
    } else if (input.type === 'email' && !validators.email(input.value)) {
        isValid = false;
        errorMessage = 'Digite um e-mail válido.';
    } else if (input.id === 'cpf' && !validators.cpf(input.value)) {
        isValid = false;
        errorMessage = 'CPF inválido.';
    } else if (input.getAttribute('minlength') && !validators.minLength(input.value, parseInt(input.getAttribute('minlength')))) {
        isValid = false;
        errorMessage = `Mínimo de ${input.getAttribute('minlength')} caracteres.`;
    }

    if (errorSpan) {
        errorSpan.textContent = errorMessage;
        errorSpan.style.color = 'var(--color-error, red)';
        errorSpan.style.fontSize = '0.875rem';
        errorSpan.style.display = errorMessage ? 'block' : 'none';
    }

    input.style.borderColor = isValid ? 'var(--color-success, green)' : 'var(--color-error, red)';
    
    return isValid;
}