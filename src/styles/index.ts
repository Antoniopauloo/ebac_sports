import { createGlobalStyle } from 'styled-components'

export const cores = {
  corTexto: '#121714',
  corFundo: '#eee',
  corPrincipal: '#0c2461',
  corSecundaria: '#4a69bd',
  success: '#2ecc71',
  warning: '#f1c40f',
  error: '#e74c3c'
}

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    color: ${cores.corTexto}
  }

  body {
    background-color: ${cores.corFundo};
    padding-bottom: 80px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: 1024px) {
      max-width: 80%;
    }
  }

  .Toastify__toast {
    border-radius: 8px;
    padding: 16px;
    backdrop-filter: blur(4px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-weight: 500;
  }

  .Toastify__toast--success {
    background: ${cores.success}22;
    border: 1px solid ${cores.success};
    color: ${cores.success};

    .Toastify__toast-icon {
      color: ${cores.success};
    }
  }

  .Toastify__toast--warning {
    background: ${cores.warning}22;
    border: 1px solid ${cores.warning};
    color: ${cores.warning};

    .Toastify__toast-icon {
      color: ${cores.warning};
    }
  }

  .Toastify__toast--error {
    background: ${cores.error}22;
    border: 1px solid ${cores.error};
    color: ${cores.error};

    .Toastify__toast-icon {
      color: ${cores.error};
    }
  }

  .Toastify__progress-bar {
    height: 2px;
    opacity: 0.7;
  }

  .Toastify__close-button {
    opacity: 0.7;
    transition: opacity 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`
