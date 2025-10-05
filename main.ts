// ========================================
// ✨ CONVITE ALICE 4 ANOS - SISTEMA INTERATIVO ✨
// ========================================

// import * as THREE from 'three'; // 3D completamente desabilitado

// ========================================
// CONFIGURAÇÃO DO EMAILJS
// ========================================
// 1. Crie uma conta em: https://www.emailjs.com/
// 2. Adicione um serviço de email (Gmail, Outlook, etc)
// 3. Crie um template de email
// 4. Substitua os valores abaixo com suas credenciais:

const EMAILJS_CONFIG = {
  serviceId: 'service_90xdwfc',        // ✅ Este já está correto
  templateId: 'template_38v4b9w',  // ⬅️ COLE AQUI!
  publicKey: 'sGnWCCSumuEsaM9Bd',      // ✅ Este já está correto
  emailDestino: 'fcunha326@gmail.com'  // ✅ Este já está correto
};

// ========================================
// INTERFACES
// ========================================
interface ConfirmationData {
  nome: string;
  presenca: string;
  adultos: number;
  criancas: number;
  observacao?: string;
}

interface GuestData {
  id: number;
  nome: string;
  presenca: string;
  adultos: number;
  criancas: number;
  observacao?: string;
}

interface StatsData {
  totalConfirmados: number;
  totalPessoas: number;
  totalRecusados: number;
}

// ========================================
// SISTEMA 3D REMOVIDO COMPLETAMENTE
// ========================================
// Todo o código 3D foi removido para usar apenas peixes PNG

// ========================================
// PARTÍCULAS FLUTUANTES
// ========================================
class ParticleSystem {
  private container: HTMLElement;
  private particles: HTMLElement[] = [];

  constructor(containerId: string) {
    this.container = document.getElementById(containerId)!;
    console.log('🌊 Container de partículas encontrado:', this.container);
    this.createParticles();
  }

  private createParticles(): void {
    // Criar apenas bolhas por enquanto
    // As imagens PNG dos animais marinhos serão adicionadas depois
    this.createBubbles();
    
    // Preparar para imagens PNG dos animais marinhos
    this.createMarineAnimals();
  }

  private createBubbles(): void {
    // Bolhas subindo do fundo do mar
    for (let i = 0; i < 30; i++) {
      const bubble = document.createElement('div');
      bubble.textContent = '🫧';
      bubble.style.position = 'fixed';
      bubble.style.fontSize = `${Math.random() * 18 + 12}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.bottom = `-${Math.random() * 30}%`;
      bubble.style.opacity = `${Math.random() * 0.4 + 0.4}`;
      bubble.style.pointerEvents = 'none';
      bubble.style.zIndex = '0';
      bubble.style.willChange = 'transform, opacity';
      bubble.style.filter = 'drop-shadow(0 0 8px rgba(168, 237, 234, 0.5)) brightness(1.2)';
      
      const duration = Math.random() * 10 + 8;
      const delay = Math.random() * 6;
      
      bubble.style.animation = `magicBubbles ${duration}s ease-out ${delay}s infinite`;

      this.particles.push(bubble);
      this.container.appendChild(bubble);
    }
  }

  private preloadImages(): void {
    // Pré-carregar todas as imagens dos animais para transição suave
    const imagePaths = [
      '/src/peixe1.png',
      '/src/peixe2.png', 
      '/src/peixe3.png'
    ];
    
    imagePaths.forEach(path => {
      const img = new Image();
      img.src = path;
    });
  }

  private createMarineAnimals(): void {
    console.log('🐠 Iniciando criação dos peixes PNG...');
    
    // Pré-carregar imagens primeiro
    this.preloadImages();
    
    // Configurações específicas para cada animal marinho
    const marineConfigs = [
      // Peixes com animações variadas
      { 
        src: '/src/peixe1.png', 
        type: 'fish',
        animations: ['fishSwimLeftCorrect'], // Animação corrigida para este peixe
        size: { min: 60, max: 120 },
        count: 3,
        fallback: '🐠'
      },
      { 
        src: '/src/peixe2.png', 
        type: 'fish',
        animations: ['fishSwimLeft', 'fishSwimSlow', 'fishSwimWave'], // Múltiplas animações
        size: { min: 60, max: 120 },
        count: 3,
        fallback: '🐠'
      },
      { 
        src: '/src/peixe3.png', 
        type: 'fish',
        animations: ['fishSwimLeft', 'fishSwimSlow', 'fishSwimWave'], // Múltiplas animações
        size: { min: 60, max: 120 },
        count: 3,
        fallback: '🐡'
      },
      // Outros animais desabilitados temporariamente
      // { 
      //   src: '/src/polvo.png', 
      //   type: 'octopus',
      //   animations: ['octopusRealMovement'],
      //   size: { min: 80, max: 140 },
      //   count: 2,
      //   fallback: '🐙'
      // },
      // { 
      //   src: '/src/tartaruga1.png', 
      //   type: 'turtle',
      //   animations: ['turtleRealMovement'],
      //   size: { min: 90, max: 150 },
      //   count: 2,
      //   fallback: '🐢'
      // },
      // { 
      //   src: '/src/tartaruga2.png', 
      //   type: 'turtle',
      //   animations: ['turtleRealMovement'],
      //   size: { min: 90, max: 150 },
      //   count: 2,
      //   fallback: '🐢'
      // },
      // { 
      //   src: '/src/cavalomarinho1.png', 
      //   type: 'seahorse',
      //   animations: ['seahorseRealMovement'],
      //   size: { min: 70, max: 130 },
      //   count: 2,
      //   fallback: '🦄'
      // },
      // { 
      //   src: '/src/cavalomarinho2.png', 
      //   type: 'seahorse',
      //   animations: ['seahorseRealMovement'],
      //   size: { min: 70, max: 130 },
      //   count: 2,
      //   fallback: '🦄'
      // }
    ];
    
    // Criar todos os animais marinhos
    marineConfigs.forEach(config => {
      for (let i = 0; i < config.count; i++) {
        const animalElement = document.createElement('img');
        animalElement.src = config.src;
        animalElement.alt = ''; // Remover alt text para evitar mostrar "fish"
        animalElement.className = `marine-animal marine-${config.type}`;
        
        // Adicionar loading eager para carregar mais rápido
        animalElement.loading = 'eager';
       
        animalElement.style.position = 'fixed';
        animalElement.style.width = `${Math.random() * (config.size.max - config.size.min) + config.size.min}px`;
        animalElement.style.height = 'auto';
        animalElement.style.left = `${Math.random() * 100}%`;
        animalElement.style.top = `${Math.random() * 70 + 15}%`;
        animalElement.style.opacity = `${Math.random() * 0.3 + 0.6}`;
        animalElement.style.pointerEvents = 'none';
        animalElement.style.zIndex = '9999'; // Z-index muito alto para garantir visibilidade
        animalElement.style.willChange = 'transform';
        
        // Filtros específicos por tipo
        switch(config.type) {
          case 'fish':
            animalElement.style.filter = 'drop-shadow(0 4px 12px rgba(3, 142, 241, 0.4)) brightness(1.1) saturate(1.2)';
            break;
          case 'octopus':
            animalElement.style.filter = 'drop-shadow(0 4px 12px rgba(255,105,180,0.4)) brightness(1.1) hue-rotate(-10deg)';
            break;
          case 'turtle':
            animalElement.style.filter = 'drop-shadow(0 4px 12px rgba(50,205,50,0.4)) brightness(1.1) saturate(1.1)';
            break;
          case 'seahorse':
            animalElement.style.filter = 'drop-shadow(0 4px 12px rgba(255,215,0,0.5)) brightness(1.15) hue-rotate(10deg)';
            break;
        }
        
        // Animação específica para cada animal com durações realistas
        const randomAnimation = config.animations[Math.floor(Math.random() * config.animations.length)];
        
        // Durações e delays aleatórios para cada peixe
        let duration, delay;
        
        if (config.type === 'fish') {
          // Criar variação maior entre os peixes - velocidades mais lentas
          const speedType = Math.random();
          
          // Garantir que alguns peixes comecem imediatamente para transição suave
          const immediateStart = Math.random() < 0.4; // 40% chance de começar imediatamente
          
          if (speedType < 0.33) {
            // Peixe rápido (mas mais lento que antes)
            duration = Math.random() * 3 + 6; // 6-9 segundos
            delay = immediateStart ? 0 : Math.random() * 1.5; // 0 ou 0-1.5 segundos
          } else if (speedType < 0.66) {
            // Peixe médio
            duration = Math.random() * 4 + 9; // 9-13 segundos
            delay = immediateStart ? 0 : Math.random() * 2; // 0 ou 0-2 segundos
          } else {
            // Peixe lento
            duration = Math.random() * 6 + 12; // 12-18 segundos
            delay = immediateStart ? 0 : Math.random() * 2.5; // 0 ou 0-2.5 segundos
          }
        } else {
          // Para outros animais (quando reativarmos)
          duration = Math.random() * 5 + 8; // 8-13 segundos
          delay = Math.random() < 0.4 ? 0 : Math.random() * 2; // 40% chance de começar imediatamente
        }
        
        // Aplicar animação imediatamente para transição suave
        animalElement.style.animation = `${randomAnimation} ${duration}s ease-in-out ${delay}s infinite`;
        animalElement.style.animationFillMode = 'both'; // Manter estado inicial e final
        animalElement.style.willChange = 'transform'; // Otimização GPU
        
        // Debug: forçar visibilidade
        animalElement.style.display = 'block';
        animalElement.style.visibility = 'visible';
        
        // Adicionar evento de erro para fallback
        animalElement.onerror = () => {
          console.log(`Erro ao carregar imagem: ${animalElement.src}`);
          // Se a imagem não carregar, usar emoji como fallback
          const fallback = document.createElement('div');
          fallback.textContent = config.fallback;
          fallback.style.cssText = animalElement.style.cssText;
          fallback.style.fontSize = `${parseInt(animalElement.style.width) * 0.6}px`;
          fallback.style.filter = 'drop-shadow(0 3px 8px rgba(0,0,0,0.3)) brightness(1.1) saturate(1.2)';
          
          // Corrigir o bug: substituir o elemento correto
          animalElement.parentNode?.replaceChild(fallback, animalElement);
          
          // Atualizar a lista de partículas
          const index = this.particles.indexOf(animalElement);
          if (index > -1) {
            this.particles[index] = fallback;
          }
        };
        
        this.particles.push(animalElement);
        this.container.appendChild(animalElement);
        
        // Debug log
        console.log(`🐠 Peixe PNG criado: ${config.src}`);
      }
    });
    
    console.log(`🐠 Total de peixes PNG criados: ${this.particles.length}`);
  }
}

// ========================================
// CONTAGEM REGRESSIVA
// ========================================
class CountdownTimer {
  private targetDate: Date;
  private daysEl: HTMLElement;
  private hoursEl: HTMLElement;
  private minutesEl: HTMLElement;
  private secondsEl: HTMLElement;

  constructor(targetDateString: string) {
    this.targetDate = new Date(targetDateString);
    this.daysEl = document.getElementById('days')!;
    this.hoursEl = document.getElementById('hours')!;
    this.minutesEl = document.getElementById('minutes')!;
    this.secondsEl = document.getElementById('seconds')!;

    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  private updateCountdown(): void {
    const now = new Date().getTime();
    const distance = this.targetDate.getTime() - now;

    if (distance < 0) {
      this.daysEl.textContent = '00';
      this.hoursEl.textContent = '00';
      this.minutesEl.textContent = '00';
      this.secondsEl.textContent = '00';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    this.daysEl.textContent = String(days).padStart(2, '0');
    this.hoursEl.textContent = String(hours).padStart(2, '0');
    this.minutesEl.textContent = String(minutes).padStart(2, '0');
    this.secondsEl.textContent = String(seconds).padStart(2, '0');
  }
}

// ========================================
// EMAILJS SERVICE
// ========================================
declare const emailjs: any;

class EmailService {
  private static initialized = false;

  static initialize(): void {
    if (this.initialized) return;
    
    // Carregar script do EmailJS
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = () => {
      emailjs.init(EMAILJS_CONFIG.publicKey);
      console.log('📧 EmailJS inicializado com sucesso!');
    };
    document.head.appendChild(script);
    this.initialized = true;
  }

  static async enviarEmail(data: ConfirmationData): Promise<void> {
    // Calcular número total de pessoas
    const totalPessoas = data.adultos + data.criancas;

    // Preparar dados para o template do email
    const emailParams = {
      to_email: EMAILJS_CONFIG.emailDestino,
      from_name: 'Convite Alice 4 Anos',
      nome_convidado: data.nome,
      presenca: data.presenca,
      num_adultos: data.adultos,
      num_criancas: data.criancas,
      total_pessoas: totalPessoas,
      observacao: data.observacao || 'Nenhuma observação',
      data_confirmacao: new Date().toLocaleString('pt-BR'),
      // Mensagem formatada bonita
      mensagem: `
🎉 NOVA CONFIRMAÇÃO RECEBIDA! 🎉

👤 Nome do Convidado: ${data.nome}
💌 Vai comparecer? ${data.presenca}
👨‍👩‍👧‍👦 Adultos: ${data.adultos}
👶 Crianças: ${data.criancas}
👥 Total de pessoas: ${totalPessoas}
📝 Observações: ${data.observacao || 'Nenhuma'}
📅 Data da confirmação: ${new Date().toLocaleString('pt-BR')}

      `
    };

    try {
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        emailParams
      );
      console.log('✅ Email enviado com sucesso!');
    } catch (error) {
      console.error('❌ Erro ao enviar email:', error);
      throw error;
    }
  }
}

// ========================================
// LOCAL STORAGE SERVICE
// ========================================
class StorageService {
  private static readonly STORAGE_KEY = 'alice_confirmacoes';

  static salvarConfirmacao(data: ConfirmationData): GuestData {
    const confirmacoes = this.obterConfirmacoes();
    
    const novaConfirmacao: GuestData = {
      id: Date.now(),
      nome: data.nome,
      presenca: data.presenca,
      adultos: data.adultos,
      criancas: data.criancas,
      observacao: data.observacao,
    };

    confirmacoes.push(novaConfirmacao);
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(confirmacoes));
    
    return novaConfirmacao;
  }

  static obterConfirmacoes(): GuestData[] {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  }

  static limparConfirmacoes(): void {
    localStorage.removeItem(this.STORAGE_KEY);
  }
}

// ========================================
// GERENCIADOR DE FORMULÁRIO
// ========================================
class FormManager {
  private form: HTMLFormElement;
  private adultosInput: HTMLInputElement;
  private criancasInput: HTMLInputElement;
  private totalPessoasSpan: HTMLElement;

  constructor() {
    this.form = document.getElementById('confirmForm') as HTMLFormElement;
    this.adultosInput = document.getElementById('adultos') as HTMLInputElement;
    this.criancasInput = document.getElementById('criancas') as HTMLInputElement;
    this.totalPessoasSpan = document.getElementById('total-pessoas') as HTMLElement;

    this.setupEventListeners();
    this.setupCounters();
  }

  private setupEventListeners(): void {
    // Submissão do formulário
    this.form.addEventListener('submit', async (e) => {
      e.preventDefault();
      e.stopPropagation(); // Prevenir propagação
      await this.handleSubmit();
      return false; // Prevenir comportamento padrão adicional
    });
  }

  private setupCounters(): void {
    // Botões de adultos
    const adultosPlus = document.getElementById('adultos-plus') as HTMLButtonElement;
    const adultosMinus = document.getElementById('adultos-minus') as HTMLButtonElement;
    
    // Botões de crianças
    const criancasPlus = document.getElementById('criancas-plus') as HTMLButtonElement;
    const criancasMinus = document.getElementById('criancas-minus') as HTMLButtonElement;

    // Event listeners para adultos
    adultosPlus.addEventListener('click', () => {
      const currentValue = parseInt(this.adultosInput.value);
      if (currentValue < 20) {
        this.adultosInput.value = (currentValue + 1).toString();
        this.updateTotal();
        this.updateButtonStates();
      }
    });

    adultosMinus.addEventListener('click', () => {
      const currentValue = parseInt(this.adultosInput.value);
      if (currentValue > 1) {
        this.adultosInput.value = (currentValue - 1).toString();
        this.updateTotal();
        this.updateButtonStates();
      }
    });

    // Event listeners para crianças
    criancasPlus.addEventListener('click', () => {
      const currentValue = parseInt(this.criancasInput.value);
      if (currentValue < 20) {
        this.criancasInput.value = (currentValue + 1).toString();
        this.updateTotal();
        this.updateButtonStates();
      }
    });

    criancasMinus.addEventListener('click', () => {
      const currentValue = parseInt(this.criancasInput.value);
      if (currentValue > 0) {
        this.criancasInput.value = (currentValue - 1).toString();
        this.updateTotal();
        this.updateButtonStates();
      }
    });

    // Inicializar estado dos botões
    this.updateButtonStates();
  }

  private updateTotal(): void {
    const adultos = parseInt(this.adultosInput.value);
    const criancas = parseInt(this.criancasInput.value);
    const total = adultos + criancas;
    this.totalPessoasSpan.textContent = total.toString();
  }

  private updateButtonStates(): void {
    const adultos = parseInt(this.adultosInput.value);
    const criancas = parseInt(this.criancasInput.value);

    // Botões de adultos
    const adultosPlus = document.getElementById('adultos-plus') as HTMLButtonElement;
    const adultosMinus = document.getElementById('adultos-minus') as HTMLButtonElement;
    
    // Botões de crianças
    const criancasPlus = document.getElementById('criancas-plus') as HTMLButtonElement;
    const criancasMinus = document.getElementById('criancas-minus') as HTMLButtonElement;

    // Desabilitar botões conforme limites
    adultosMinus.disabled = adultos <= 1;
    adultosPlus.disabled = adultos >= 20;
    criancasMinus.disabled = criancas <= 0;
    criancasPlus.disabled = criancas >= 20;
  }

  private async handleSubmit(): Promise<void> {
    const formData = new FormData(this.form);
    const data: ConfirmationData = {
      nome: formData.get('nome') as string,
      presenca: formData.get('presenca') as string,
      adultos: parseInt(formData.get('adultos') as string),
      criancas: parseInt(formData.get('criancas') as string),
      observacao: formData.get('observacao') as string,
    };

    // Validação
    if (!data.nome || data.nome.trim().length < 3) {
      alert('Por favor, digite seu nome completo! 😊');
      return;
    }

    // Prevenir scroll para o topo
    const submitBtn = this.form.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitBtn.innerHTML;
    const btnPosition = submitBtn.getBoundingClientRect().top + window.pageYOffset;

    try {
      // Animar botão
      submitBtn.disabled = true;

      // Adicionar classe de animação
      submitBtn.classList.add('btn-animating');
      
      // Manter o foco no botão (prevenir scroll)
      submitBtn.focus();
      window.scrollTo({ top: btnPosition - window.innerHeight / 2, behavior: 'smooth' });

      // Aguardar animação de flip começar
      await this.delay(300);
      submitBtn.innerHTML = '<span>Enviando... 📧</span>';

      // 1. Salvar no localStorage
      StorageService.salvarConfirmacao(data);

      // 2. Tentar enviar email (não bloqueia se falhar)
      try {
        await EmailService.enviarEmail(data);
        console.log('✅ Email enviado com sucesso!');
      } catch (emailError) {
        console.warn('⚠️ Email não pôde ser enviado, mas dados foram salvos localmente:', emailError);
        // Continua mesmo se o email falhar
      }

      // Animação de sucesso
      submitBtn.classList.remove('btn-animating');
      submitBtn.classList.add('btn-success');
      submitBtn.innerHTML = '<span>✅ ENVIADO!</span>';

      // Aguardar mostrar "ENVIADO"
      await this.delay(1500);

      // Sucesso!
      this.showSuccessMessage(data.presenca === 'Sim');
      this.form.reset();

      // Restaurar botão
      await this.delay(1000);
      submitBtn.classList.remove('btn-success');
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    } catch (error) {
      console.error('❌ Erro detalhado ao confirmar presença:', error);
      
      // Log detalhado para debug
      console.log('📧 Configuração EmailJS:', {
        serviceId: EMAILJS_CONFIG.serviceId,
        templateId: EMAILJS_CONFIG.templateId,
        publicKey: EMAILJS_CONFIG.publicKey,
        emailDestino: EMAILJS_CONFIG.emailDestino
      });
      
      // Determinar tipo de erro
      let errorDetails = '';
      if (error instanceof Error) {
        errorDetails = error.message;
        console.log('💬 Mensagem do erro:', errorDetails);
      }
      
      // Mostrar mensagem de erro mais amigável
      const errorMessage = document.createElement('div');
      errorMessage.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(135deg, #ff6b9d 0%, #f5576c 100%);
        color: white;
        padding: 30px 50px;
        border-radius: 25px;
        box-shadow: 0 20px 60px rgba(255, 107, 157, 0.5);
        z-index: 9999;
        font-size: 18px;
        text-align: center;
        max-width: 500px;
      `;
      errorMessage.innerHTML = `
        <div style="font-size: 40px; margin-bottom: 15px;">😢</div>
        <div style="font-weight: 700; margin-bottom: 10px;">Ops! Algo deu errado</div>
        <div style="font-size: 14px;">
          Não foi possível enviar sua confirmação.<br>
          Por favor, verifique sua conexão e tente novamente.<br><br>
          <strong>Ou entre em contato diretamente!</strong><br><br>
          <small style="opacity: 0.8;">Erro: ${errorDetails || 'Verifique o console (F12)'}</small>
        </div>
      `;
      document.body.appendChild(errorMessage);
      
      setTimeout(() => {
        errorMessage.style.transition = 'opacity 0.5s';
        errorMessage.style.opacity = '0';
        setTimeout(() => errorMessage.remove(), 500);
      }, 7000);
      
      const submitBtn = this.form.querySelector('button[type="submit"]') as HTMLButtonElement;
      submitBtn.classList.remove('btn-animating', 'btn-success');
      submitBtn.innerHTML = originalText;
      submitBtn.disabled = false;
    }
  }

  private delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  private showSuccessMessage(isConfirmed: boolean): void {
    // Criar confete
    this.createConfetti();

    // Criar overlay (fundo escuro)
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    
    // Criar modal
    const modal = document.createElement('div');
    modal.className = 'modal-success';
    
    // Conteúdo da modal
    const iconClass = isConfirmed ? 'success' : 'info';
    const iconSymbol = isConfirmed ? '✓' : 'ℹ';
    const title = isConfirmed ? 'Confirmação Enviada!' : 'Resposta Recebida';
    const message = isConfirmed 
      ? 'Suas informações foram enviadas com sucesso!<br>Caso tenha algum imprevisto, entre em contato (65) 9 9844-5435.<br><br>Te vemos lá na festa da Alice! 💖'
      : 'Recebemos sua resposta.<br><br>Que pena que você não poderá vir!<br>Sentiremos sua falta na festa da Alice! 😢';
    
    modal.innerHTML = `
      <button class="modal-close" id="modalCloseBtn">×</button>
      <div class="modal-icon ${iconClass}">
        <span class="icon-symbol">${iconSymbol}</span>
      </div>
      <h2 class="modal-title">${title}</h2>
      <p class="modal-message">${message}</p>
      <button class="modal-btn-ok" id="modalOkBtn">OK</button>
    `;
    
    // Adicionar ao DOM
    document.body.appendChild(overlay);
    document.body.appendChild(modal);
    
    // Animar entrada
    setTimeout(() => {
      overlay.classList.add('show');
      modal.classList.add('show');
    }, 10);
    
    // Função para fechar modal
    const closeModal = () => {
      overlay.classList.remove('show');
      modal.classList.remove('show');
      
      setTimeout(() => {
        overlay.remove();
        modal.remove();
        
        // Scroll automático para o rodapé após fechar a modal
        this.scrollToFooter();
      }, 300);
    };
    
    // Event listeners
    const closeBtn = document.getElementById('modalCloseBtn');
    const okBtn = document.getElementById('modalOkBtn');
    
    closeBtn?.addEventListener('click', closeModal);
    okBtn?.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    
    // Fechar com ESC
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
        document.removeEventListener('keydown', handleEscape);
      }
    };
    document.addEventListener('keydown', handleEscape);
  }

  private createConfetti(): void {
    const colors = ['#ff6b9d', '#c44dff', '#ffd700', '#fff'];
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.style.cssText = `
        position: fixed;
        top: -10px;
        left: ${Math.random() * 100}%;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        opacity: 0.8;
        animation: confettiFall ${Math.random() * 3 + 2}s linear;
        z-index: 9998;
      `;
      document.body.appendChild(confetti);
      
      setTimeout(() => confetti.remove(), 5000);
    }

    // Adicionar animação CSS
    if (!document.getElementById('confetti-style')) {
      const style = document.createElement('style');
      style.id = 'confetti-style';
      style.textContent = `
        @keyframes confettiFall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  private scrollToFooter(): void {
    // Encontrar o rodapé da página (seção final-message ou ocean-floor)
    const finalMessage = document.querySelector('.final-message');
    const oceanFloor = document.querySelector('.ocean-floor');
    
    // Escolher o elemento mais próximo do final da página
    let targetElement = oceanFloor || finalMessage;
    
    if (targetElement) {
      // Scroll suave para o elemento
      targetElement.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start' 
      });
    } else {
      // Fallback: scroll para o final da página
      window.scrollTo({ 
        top: document.documentElement.scrollHeight, 
        behavior: 'smooth' 
      });
    }
  }

  // Método removido - lista de confirmados não é mais exibida por privacidade
  // Os dados continuam sendo salvos no localStorage, mas não são mostrados aos visitantes
}

// ========================================
// EFEITO DE PROFUNDIDADE DO OCEANO
// ========================================
class OceanDepthEffect {
  constructor() {
    this.updateDepth();
    window.addEventListener('scroll', () => this.updateDepth());
  }

  private updateDepth(): void {
    const scrollPosition = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = Math.min(scrollPosition / maxScroll, 1);

    // Cores: de azul médio (topo) para azul muito escuro (profundo)
    const veryLightColor = { r: 52, g: 128, b: 189 }; // #3480BD (azul médio - como na imagem)
    const lightColor = { r: 41, g: 98, b: 155 };      // #29629B (azul escuro)
    const midColor = { r: 25, g: 70, b: 120 };        // #194678 (mais escuro)
    const darkColor = { r: 13, g: 50, b: 100 };       // #0D3264 (muito escuro)

    let currentColor;
    if (scrollPercent < 0.33) {
      // Transição de muito claro para claro (0 a 33%)
      const percent = scrollPercent * 3;
      currentColor = {
        r: Math.round(veryLightColor.r + (lightColor.r - veryLightColor.r) * percent),
        g: Math.round(veryLightColor.g + (lightColor.g - veryLightColor.g) * percent),
        b: Math.round(veryLightColor.b + (lightColor.b - veryLightColor.b) * percent),
      };
    } else if (scrollPercent < 0.66) {
      // Transição de claro para médio (33 a 66%)
      const percent = (scrollPercent - 0.33) * 3;
      currentColor = {
        r: Math.round(lightColor.r + (midColor.r - lightColor.r) * percent),
        g: Math.round(lightColor.g + (midColor.g - lightColor.g) * percent),
        b: Math.round(lightColor.b + (midColor.b - lightColor.b) * percent),
      };
    } else {
      // Transição de médio para escuro (66 a 100%)
      const percent = (scrollPercent - 0.66) * 3;
      currentColor = {
        r: Math.round(midColor.r + (darkColor.r - midColor.r) * percent),
        g: Math.round(midColor.g + (darkColor.g - midColor.g) * percent),
        b: Math.round(midColor.b + (darkColor.b - midColor.b) * percent),
      };
    }

    // Aplicar gradiente
    document.body.style.background = `
      radial-gradient(circle at 20% 80%, rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(${currentColor.r + 20}, ${currentColor.g + 20}, ${currentColor.b + 20}, 0.3) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(${currentColor.r}, ${currentColor.g}, ${currentColor.b}, 0.2) 0%, transparent 50%),
      linear-gradient(135deg, 
        rgb(${currentColor.r + 15}, ${currentColor.g + 15}, ${currentColor.b + 15}) 0%, 
        rgb(${currentColor.r}, ${currentColor.g}, ${currentColor.b}) 50%, 
        rgb(${currentColor.r - 15}, ${currentColor.g - 15}, ${currentColor.b - 15}) 100%)
    `;
    document.body.style.backgroundAttachment = 'fixed';
  }
}

// ========================================
// INICIALIZAÇÃO
// ========================================
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar EmailJS
  EmailService.initialize();

  // Sistema 3D completamente desabilitado - usando apenas peixes PNG
  // const canvas = document.getElementById('canvas3d') as HTMLCanvasElement;
  // new UnderwaterScene3D(canvas);

  // Inicializar Partículas
  new ParticleSystem('particles');

  // Inicializar Efeito de Profundidade do Oceano
  new OceanDepthEffect();

  // Inicializar Contagem Regressiva (Data da festa: 08/12/2025 às 16:00)
  new CountdownTimer('2025-12-08T16:00:00');

  // Inicializar Formulário
  new FormManager();

  // Animação de scroll suave
  document.querySelector('.scroll-indicator')?.addEventListener('click', () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  });

  console.log('🎉 Sistema do convite da Alice carregado com sucesso! ✨');
  console.log('📧 Sistema de emails ativado - Confirmações serão enviadas por email!');
  console.log('🌊 Efeito de profundidade oceânica ativado!');
  console.log('🐠 Sistema de peixes PNG ativado - Peixes 3D desabilitados!');
});