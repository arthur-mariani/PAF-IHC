const params = new URLSearchParams(window.location.search);
const response = params.get('resposta') || 'sim';

const choiceForm = document.querySelector('[data-choice-form]');
const continueButton = document.querySelector('[data-continue-button]');

if (choiceForm && continueButton) {
  choiceForm.addEventListener('change', () => {
    continueButton.disabled = !choiceForm.querySelector('input[name="resposta"]:checked');
  });
}

const statusVariants = {
  sim: {
    intro: 'Com base na informação fornecida, esta é a situação apresentada pelo protótipo.',
    items: [
      ['success', '✓', 'Enviado pelo empregador', 'O envio foi informado.'],
      ['success', '✓', 'Processado', 'O crédito passou pelo processamento.'],
      ['problem', '×', 'Ainda não disponível no cartão', 'O valor ainda não aparece para utilização.'],
      ['warning', '!', 'Precisa de confirmação ou atualização', 'Uma ação adicional pode ser necessária.']
    ]
  },
  nao: {
    intro: 'O envio ainda não foi confirmado pelo empregador. O primeiro passo é verificar essa informação.',
    items: [
      ['warning', '!', 'Envio não confirmado', 'Ainda não há confirmação de que o benefício foi enviado.'],
      ['neutral', '—', 'Processamento não verificado', 'Essa etapa depende da confirmação do envio.'],
      ['problem', '×', 'Crédito indisponível', 'O valor ainda não pode ser utilizado no cartão.']
    ]
  },
  'nao-confirmei': {
    intro: 'Ainda não sabemos se o benefício foi enviado. Confirme essa informação antes de seguir.',
    items: [
      ['warning', '?', 'Envio precisa ser verificado', 'Consulte o setor responsável pelo benefício.'],
      ['neutral', '—', 'Situação do processamento desconhecida', 'O processamento só pode ser avaliado após a confirmação.'],
      ['problem', '×', 'Crédito indisponível', 'O valor ainda não aparece para utilização.']
    ]
  }
};

const guidanceVariants = {
  sim: {
    title: 'Confirme ou atualize o crédito',
    text: 'O crédito foi enviado, mas ainda precisa ser confirmado ou atualizado para ficar disponível no cartão.',
    steps: ['Leve seu cartão e um documento de identificação.', 'Procure um local de atendimento indicado no próximo passo.', 'Solicite a conferência e a atualização do benefício.']
  },
  nao: {
    title: 'Confirme o envio com o empregador',
    text: 'Como o envio ainda não foi confirmado, procure primeiro o setor responsável pelo Vale-Transporte no seu trabalho.',
    steps: ['Entre em contato com o setor responsável pelo benefício.', 'Pergunte se o pedido foi enviado e solicite a data do envio.', 'Se o envio for confirmado e o crédito continuar indisponível, procure atendimento.']
  },
  'nao-confirmei': {
    title: 'Verifique se o benefício foi enviado',
    text: 'Antes de procurar atendimento, confirme com o empregador se o crédito já foi solicitado e enviado.',
    steps: ['Consulte o setor responsável pelo benefício.', 'Guarde a data ou o comprovante do envio, se disponível.', 'Se o envio estiver confirmado, retorne ao fluxo para verificar o próximo passo.']
  }
};

function renderStatus() {
  const list = document.querySelector('[data-status-list]');
  const intro = document.querySelector('[data-status-intro]');
  const orientationLink = document.querySelector('[data-orientation-link]');
  const variant = statusVariants[response] || statusVariants.sim;

  if (!list || !intro || !orientationLink) return;

  intro.textContent = variant.intro;
  list.innerHTML = variant.items.map(([state, icon, title, detail]) => `
    <div class="status-item is-${state}">
      <span aria-hidden="true">${icon}</span>
      <div><strong>${title}</strong><small>${detail}</small></div>
    </div>
  `).join('');
  orientationLink.href = `../orientacao/?resposta=${encodeURIComponent(response)}`;
}

function renderGuidance() {
  const title = document.querySelector('[data-guidance-title]');
  const text = document.querySelector('[data-guidance-text]');
  const steps = document.querySelector('[data-guidance-steps]');
  const statusBackLink = document.querySelector('[data-status-back-link]');
  const variant = guidanceVariants[response] || guidanceVariants.sim;

  if (!title || !text || !steps || !statusBackLink) return;

  title.textContent = variant.title;
  text.textContent = variant.text;
  steps.innerHTML = variant.steps.map((step, index) => `<li><span>${index + 1}</span><p>${step}</p></li>`).join('');
  statusBackLink.href = `../situacao/?resposta=${encodeURIComponent(response)}`;
}

const flowPage = document.body.dataset.flowPage;
if (flowPage === 'situacao') renderStatus();
if (flowPage === 'orientacao') renderGuidance();

const locationForm = document.querySelector('[data-location-form]');
const locationResults = document.querySelector('[data-location-results]');

if (locationForm && locationResults) {
  locationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const address = new FormData(locationForm).get('endereco').trim();
    if (!address) return;

    locationResults.innerHTML = `
      <p class="results-summary">Resultados demonstrativos para <strong>${escapeHtml(address)}</strong></p>
      <article class="location-card">
        <span class="location-card__number">1</span>
        <div><h2>Unidade de atendimento — Centro</h2><p>Endereço demonstrativo, Brasília–DF</p><small>Segunda a sexta, das 8h às 17h</small></div>
      </article>
      <article class="location-card">
        <span class="location-card__number">2</span>
        <div><h2>Posto de atendimento — Terminal</h2><p>Endereço demonstrativo, Brasília–DF</p><small>Segunda a sexta, das 7h às 19h</small></div>
      </article>
      <p class="data-disclaimer">Endereços e horários fictícios para avaliação do protótipo.</p>
    `;
  });
}

function escapeHtml(value) {
  const element = document.createElement('div');
  element.textContent = value;
  return element.innerHTML;
}
