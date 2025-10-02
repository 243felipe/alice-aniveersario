// ========================================
// ✨ CONVITE ALICE 4 ANOS - SISTEMA INTERATIVO ✨
// ========================================

import * as THREE from 'three';

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
  pessoas: string;
  qtdExtra?: string;
  observacao?: string;
}

interface GuestData {
  id: number;
  nome: string;
  presenca: string;
  pessoas: string;
  qtdExtra?: number;
  observacao?: string;
}

interface StatsData {
  totalConfirmados: number;
  totalPessoas: number;
  totalRecusados: number;
}

// ========================================
// SCENE 3D - FUNDO DO MAR MÁGICO
// ========================================
class UnderwaterScene3D {
  private scene: THREE.Scene;
  private camera: THREE.PerspectiveCamera;
  private renderer: THREE.WebGLRenderer;
  private bubbles: THREE.Mesh[] = [];
  private seaCreatures: THREE.Group[] = [];

  constructor(canvas: HTMLCanvasElement) {
    // Setup básico
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.camera.position.z = 5;

    // Criar bolhas flutuantes
    this.createBubbles();

    // Criar criaturas marinhas (tartarugas e cavalos marinhos)
    this.createSeaCreatures();

    // Iluminação oceânica
    const ambientLight = new THREE.AmbientLight(0x66ccff, 0.6);
    this.scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0xa8edea, 1.5);
    pointLight1.position.set(5, 5, 5);
    this.scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x66b3ff, 1.2);
    pointLight2.position.set(-5, -5, 3);
    this.scene.add(pointLight2);

    // Responsive
    window.addEventListener('resize', () => this.onWindowResize());

    // Animar
    this.animate();
  }

  private createBubbles(): void {
    const bubbleGeometry = new THREE.SphereGeometry(1, 16, 16);
    
    for (let i = 0; i < 80; i++) {
      const size = Math.random() * 0.15 + 0.05;
      const bubbleMaterial = new THREE.MeshStandardMaterial({
        color: 0xa8edea,
        metalness: 0.1,
        roughness: 0.1,
        transparent: true,
        opacity: 0.4,
        emissive: 0x66ccff,
        emissiveIntensity: 0.2,
      });

      const bubble = new THREE.Mesh(bubbleGeometry, bubbleMaterial);
      bubble.scale.set(size, size, size);
      bubble.position.x = (Math.random() - 0.5) * 15;
      bubble.position.y = (Math.random() - 0.5) * 15 - 8;
      bubble.position.z = (Math.random() - 0.5) * 10;
      
      // Velocidade de subida variável
      (bubble as any).riseSpeed = Math.random() * 0.02 + 0.01;
      (bubble as any).wobbleSpeed = Math.random() * 0.5 + 0.3;
      (bubble as any).wobbleAmount = Math.random() * 0.5 + 0.2;

      this.bubbles.push(bubble);
      this.scene.add(bubble);
    }
  }

  private createSeaCreatures(): void {
    // Criar polvo rosa (como na imagem)
    const octopus = this.createOctopus();
    octopus.position.set(-6, 2, -3);
    (octopus as any).swimPath = 0;
    (octopus as any).swimSpeed = 0.3;
    this.seaCreatures.push(octopus);
    this.scene.add(octopus);

    // Criar tartaruga verde (como na imagem)
    const turtle = this.createTurtle();
    turtle.position.set(6, -2, -4);
    turtle.scale.set(1.5, 1.5, 1.5);
    (turtle as any).swimPath = Math.PI;
    (turtle as any).swimSpeed = 0.25;
    this.seaCreatures.push(turtle);
    this.scene.add(turtle);

    // Criar peixe azul/amarelo (tipo Nemo da imagem)
    const blueFish = this.createBlueFish();
    blueFish.position.set(0, 3, -2);
    blueFish.scale.set(1.2, 1.2, 1.2);
    (blueFish as any).swimPath = Math.PI / 2;
    (blueFish as any).swimSpeed = 0.4;
    this.seaCreatures.push(blueFish);
    this.scene.add(blueFish);

    // Criar peixe laranja/amarelo (como na imagem)
    const orangeFish = this.createOrangeFish();
    orangeFish.position.set(4, -3, -3);
    orangeFish.scale.set(1.3, 1.3, 1.3);
    (orangeFish as any).swimPath = Math.PI * 1.5;
    (orangeFish as any).swimSpeed = 0.35;
    this.seaCreatures.push(orangeFish);
    this.scene.add(orangeFish);

    // Adicionar mais alguns extras para preencher a cena
    for (let i = 0; i < 2; i++) {
      const smallFish = this.createSmallFish();
      smallFish.position.x = (Math.random() - 0.5) * 10;
      smallFish.position.y = (Math.random() - 0.5) * 8;
      smallFish.position.z = (Math.random() - 0.5) * 6;
      (smallFish as any).swimPath = Math.random() * Math.PI * 2;
      (smallFish as any).swimSpeed = Math.random() * 0.3 + 0.3;
      this.seaCreatures.push(smallFish);
      this.scene.add(smallFish);
    }
  }

  private createTurtle(): THREE.Group {
    const group = new THREE.Group();

    // Corpo (elipse)
    const bodyGeometry = new THREE.SphereGeometry(0.4, 16, 16);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x96e6a1,
      metalness: 0.3,
      roughness: 0.7,
      emissive: 0x96e6a1,
      emissiveIntensity: 0.1,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.scale.set(1, 0.6, 1.2);
    group.add(body);

    // Cabeça
    const headGeometry = new THREE.SphereGeometry(0.2, 12, 12);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0xd4fc79,
      metalness: 0.2,
      roughness: 0.8,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(0.5, 0, 0);
    head.scale.set(1, 0.8, 1);
    group.add(head);

    // Nadadeiras (4)
    const finGeometry = new THREE.ConeGeometry(0.1, 0.3, 8);
    const finMaterial = new THREE.MeshStandardMaterial({
      color: 0x89d4f7,
      metalness: 0.3,
      roughness: 0.7,
    });

    for (let i = 0; i < 4; i++) {
      const fin = new THREE.Mesh(finGeometry, finMaterial);
      fin.rotation.z = Math.PI / 2;
      const angle = (i / 4) * Math.PI * 2;
      fin.position.x = Math.cos(angle) * 0.35;
      fin.position.y = Math.sin(angle) * 0.2;
      fin.position.z = Math.cos(angle) * 0.15;
      group.add(fin);
    }

    return group;
  }

  private createSeahorse(): THREE.Group {
    const group = new THREE.Group();

    // Corpo curvo
    const bodyGeometry = new THREE.CylinderGeometry(0.08, 0.15, 0.8, 12);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0xfbc2eb,
      metalness: 0.4,
      roughness: 0.6,
      emissive: 0xfbc2eb,
      emissiveIntensity: 0.15,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.rotation.z = Math.PI / 6;
    group.add(body);

    // Cabeça
    const headGeometry = new THREE.SphereGeometry(0.15, 12, 12);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0xa6c1ee,
      metalness: 0.3,
      roughness: 0.7,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.position.set(0.15, 0.5, 0);
    head.scale.set(0.8, 1, 0.8);
    group.add(head);

    // Focinho
    const snoutGeometry = new THREE.ConeGeometry(0.05, 0.2, 8);
    const snoutMaterial = new THREE.MeshStandardMaterial({
      color: 0x89d4f7,
      metalness: 0.3,
      roughness: 0.7,
    });
    const snout = new THREE.Mesh(snoutGeometry, snoutMaterial);
    snout.position.set(0.25, 0.55, 0);
    snout.rotation.z = -Math.PI / 2;
    group.add(snout);

    return group;
  }

  private createOctopus(): THREE.Group {
    const group = new THREE.Group();

    // Cabeça rosa grande e fofinha
    const headGeometry = new THREE.SphereGeometry(0.5, 20, 20);
    const headMaterial = new THREE.MeshStandardMaterial({
      color: 0xff9aa2,
      metalness: 0.2,
      roughness: 0.8,
      emissive: 0xff9aa2,
      emissiveIntensity: 0.2,
    });
    const head = new THREE.Mesh(headGeometry, headMaterial);
    head.scale.set(1, 0.9, 1);
    group.add(head);

    // Olhos
    for (let i = -1; i <= 1; i += 2) {
      const eyeGeometry = new THREE.SphereGeometry(0.08, 12, 12);
      const eyeMaterial = new THREE.MeshStandardMaterial({
        color: 0x000000,
        metalness: 0.9,
        roughness: 0.1,
      });
      const eye = new THREE.Mesh(eyeGeometry, eyeMaterial);
      eye.position.set(i * 0.2, 0.15, 0.45);
      group.add(eye);
    }

    // Tentáculos (8)
    for (let i = 0; i < 8; i++) {
      const tentacleGeometry = new THREE.CylinderGeometry(0.08, 0.05, 0.6, 8);
      const tentacleMaterial = new THREE.MeshStandardMaterial({
        color: 0xffc0cb,
        metalness: 0.2,
        roughness: 0.8,
      });
      const tentacle = new THREE.Mesh(tentacleGeometry, tentacleMaterial);
      
      const angle = (i / 8) * Math.PI * 2;
      tentacle.position.x = Math.cos(angle) * 0.35;
      tentacle.position.y = -0.5;
      tentacle.position.z = Math.sin(angle) * 0.35;
      tentacle.rotation.x = Math.PI / 6;
      tentacle.rotation.z = angle;
      
      group.add(tentacle);
    }

    return group;
  }

  private createBlueFish(): THREE.Group {
    const group = new THREE.Group();

    // Corpo azul/ciano
    const bodyGeometry = new THREE.SphereGeometry(0.3, 16, 16);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x4dd0e1,
      metalness: 0.5,
      roughness: 0.5,
      emissive: 0x4dd0e1,
      emissiveIntensity: 0.2,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.scale.set(1.3, 1, 1);
    group.add(body);

    // Listras amarelas (tipo Nemo)
    for (let i = 0; i < 2; i++) {
      const stripeGeometry = new THREE.TorusGeometry(0.35, 0.08, 8, 20);
      const stripeMaterial = new THREE.MeshStandardMaterial({
        color: 0xffd54f,
        metalness: 0.4,
        roughness: 0.6,
      });
      const stripe = new THREE.Mesh(stripeGeometry, stripeMaterial);
      stripe.position.x = -0.2 + i * 0.3;
      stripe.rotation.y = Math.PI / 2;
      group.add(stripe);
    }

    // Olho
    const eyeGeometry = new THREE.SphereGeometry(0.08, 12, 12);
    const eyeMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      metalness: 0.9,
      roughness: 0.1,
    });
    const eye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    eye.position.set(0.3, 0.1, 0.2);
    group.add(eye);

    // Nadadeiras
    const finGeometry = new THREE.ConeGeometry(0.15, 0.3, 8);
    const finMaterial = new THREE.MeshStandardMaterial({
      color: 0x81d4fa,
      metalness: 0.3,
      roughness: 0.7,
      transparent: true,
      opacity: 0.8,
    });

    // Nadadeira dorsal
    const topFin = new THREE.Mesh(finGeometry, finMaterial);
    topFin.position.set(0, 0.35, 0);
    topFin.rotation.x = Math.PI;
    group.add(topFin);

    // Cauda
    const tailGeometry = new THREE.ConeGeometry(0.2, 0.4, 8);
    const tail = new THREE.Mesh(tailGeometry, finMaterial);
    tail.position.set(-0.5, 0, 0);
    tail.rotation.z = Math.PI / 2;
    group.add(tail);

    return group;
  }

  private createOrangeFish(): THREE.Group {
    const group = new THREE.Group();

    // Corpo laranja/amarelo gordinho
    const bodyGeometry = new THREE.SphereGeometry(0.35, 16, 16);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: 0xffb347,
      metalness: 0.4,
      roughness: 0.6,
      emissive: 0xffb347,
      emissiveIntensity: 0.3,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.scale.set(1.2, 1.1, 1);
    group.add(body);

    // Barriga amarela clara
    const bellyGeometry = new THREE.SphereGeometry(0.25, 16, 16);
    const bellyMaterial = new THREE.MeshStandardMaterial({
      color: 0xffeaa7,
      metalness: 0.3,
      roughness: 0.7,
    });
    const belly = new THREE.Mesh(bellyGeometry, bellyMaterial);
    belly.position.set(0.15, -0.1, 0);
    belly.scale.set(0.8, 1, 0.9);
    group.add(belly);

    // Olhos grandes e fofinhos
    for (let i = -1; i <= 1; i += 2) {
      const eyeWhiteGeometry = new THREE.SphereGeometry(0.1, 12, 12);
      const eyeWhiteMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.1,
        roughness: 0.9,
      });
      const eyeWhite = new THREE.Mesh(eyeWhiteGeometry, eyeWhiteMaterial);
      eyeWhite.position.set(0.25, 0.15, i * 0.15);
      group.add(eyeWhite);

      const pupilGeometry = new THREE.SphereGeometry(0.05, 12, 12);
      const pupilMaterial = new THREE.MeshStandardMaterial({
        color: 0x000000,
        metalness: 0.9,
        roughness: 0.1,
      });
      const pupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
      pupil.position.set(0.3, 0.15, i * 0.15);
      group.add(pupil);
    }

    // Nadadeiras pequenas
    const finGeometry = new THREE.ConeGeometry(0.12, 0.25, 8);
    const finMaterial = new THREE.MeshStandardMaterial({
      color: 0xffd93d,
      metalness: 0.3,
      roughness: 0.7,
      transparent: true,
      opacity: 0.8,
    });

    // Nadadeiras laterais
    for (let i = -1; i <= 1; i += 2) {
      const sideFin = new THREE.Mesh(finGeometry, finMaterial);
      sideFin.position.set(0, -0.15, i * 0.35);
      sideFin.rotation.z = i * Math.PI / 4;
      sideFin.rotation.x = Math.PI / 2;
      group.add(sideFin);
    }

    // Cauda
    const tailGeometry = new THREE.ConeGeometry(0.25, 0.35, 8);
    const tail = new THREE.Mesh(tailGeometry, finMaterial);
    tail.position.set(-0.5, 0, 0);
    tail.rotation.z = Math.PI / 2;
    group.add(tail);

    return group;
  }

  private createSmallFish(): THREE.Group {
    const group = new THREE.Group();

    // Corpo pequeno e simples
    const colors = [0x9c27b0, 0xe91e63, 0x00bcd4, 0x4caf50, 0xff9800];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const bodyGeometry = new THREE.SphereGeometry(0.15, 12, 12);
    const bodyMaterial = new THREE.MeshStandardMaterial({
      color: randomColor,
      metalness: 0.5,
      roughness: 0.5,
      emissive: randomColor,
      emissiveIntensity: 0.2,
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.scale.set(1.5, 1, 1);
    group.add(body);

    // Olho
    const eyeGeometry = new THREE.SphereGeometry(0.04, 8, 8);
    const eyeMaterial = new THREE.MeshStandardMaterial({
      color: 0x000000,
      metalness: 0.9,
      roughness: 0.1,
    });
    const eye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    eye.position.set(0.15, 0.05, 0.1);
    group.add(eye);

    // Cauda simples
    const tailGeometry = new THREE.ConeGeometry(0.12, 0.2, 8);
    const tailMaterial = new THREE.MeshStandardMaterial({
      color: randomColor,
      metalness: 0.4,
      roughness: 0.6,
    });
    const tail = new THREE.Mesh(tailGeometry, tailMaterial);
    tail.position.set(-0.2, 0, 0);
    tail.rotation.z = Math.PI / 2;
    group.add(tail);

    return group;
  }

  private animate = (): void => {
    requestAnimationFrame(this.animate);

    const time = Date.now() * 0.001;

    // Animar bolhas subindo
    this.bubbles.forEach((bubble, i) => {
      // Subir
      bubble.position.y += (bubble as any).riseSpeed;
      
      // Movimento oscilatório (wobble)
      bubble.position.x += Math.sin(time * (bubble as any).wobbleSpeed + i) * 0.005 * (bubble as any).wobbleAmount;
      
      // Reset quando chega ao topo
      if (bubble.position.y > 10) {
        bubble.position.y = -10;
        bubble.position.x = (Math.random() - 0.5) * 15;
      }
    });

    // Animar criaturas marinhas nadando
    this.seaCreatures.forEach((creature, i) => {
      // Todas as criaturas nadam em círculos/ondas
      (creature as any).swimPath += (creature as any).swimSpeed * 0.01;
      
      // Movimento horizontal (nadar em círculos)
      creature.position.x = Math.sin((creature as any).swimPath) * 5;
      
      // Movimento vertical suave (subir e descer)
      creature.position.y += Math.sin(time * 0.5 + i) * 0.01;
      
      // Rotação para seguir direção do nado
      creature.rotation.y = Math.sin((creature as any).swimPath) * 0.3;
      
      // Balanço suave
      creature.rotation.z = Math.sin(time * 0.3 + i) * 0.1;
      
      // Movimento adicional dos tentáculos do polvo (primeiro item)
      if (i === 0) {
        creature.rotation.x = Math.sin(time * 0.4) * 0.15;
      }
    });

    this.renderer.render(this.scene, this.camera);
  };

  private onWindowResize(): void {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }
}

// ========================================
// PARTÍCULAS FLUTUANTES
// ========================================
class ParticleSystem {
  private container: HTMLElement;
  private particles: HTMLElement[] = [];

  constructor(containerId: string) {
    this.container = document.getElementById(containerId)!;
    this.createParticles();
  }

  private createParticles(): void {
    const fishEmojis = ['🐠', '🐡', '🐙', '🐢', '🦀'];
    const swimAnimations = [
      'swimRealLeft',
      'swimRealRight',
      'swimWave',
      'swimDeep'
    ];

    // Criar peixes nadando
    for (let i = 0; i < 20; i++) {
      const fish = document.createElement('div');
      fish.textContent = fishEmojis[Math.floor(Math.random() * fishEmojis.length)];
      fish.style.position = 'fixed';
      fish.style.fontSize = `${Math.random() * 30 + 25}px`;
      fish.style.left = `${Math.random() * 100}%`;
      fish.style.top = `${Math.random() * 70 + 15}%`; // Entre 15% e 85%
      fish.style.opacity = `${Math.random() * 0.3 + 0.5}`;
      fish.style.pointerEvents = 'none';
      fish.style.zIndex = '1';
      fish.style.filter = 'drop-shadow(0 2px 4px rgba(0,0,0,0.2))';
      fish.style.willChange = 'transform';
      
      // Escolher animação aleatória de nado
      const randomAnimation = swimAnimations[Math.floor(Math.random() * swimAnimations.length)];
      const duration = Math.random() * 8 + 12; // 12-20 segundos (mais rápido)
      const delay = Math.random() * 3; // Delay menor (0-3s)
      
      fish.style.animation = `${randomAnimation} ${duration}s ease-in-out ${delay}s infinite`;

      this.particles.push(fish);
      this.container.appendChild(fish);
    }

    // Criar bolhas subindo
    this.createBubbles();
  }

  private createBubbles(): void {
    for (let i = 0; i < 30; i++) {
      const bubble = document.createElement('div');
      bubble.textContent = '🫧';
      bubble.style.position = 'fixed';
      bubble.style.fontSize = `${Math.random() * 15 + 10}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.bottom = `-${Math.random() * 20}%`; // Começar abaixo da tela
      bubble.style.opacity = `${Math.random() * 0.4 + 0.3}`;
      bubble.style.pointerEvents = 'none';
      bubble.style.zIndex = '0';
      bubble.style.willChange = 'transform, opacity';
      
      // Alternar entre animação simples e com oscilação
      const bubbleAnimation = Math.random() > 0.5 ? 'bubbleRise' : 'bubbleRiseWobble';
      const duration = Math.random() * 6 + 5; // 5-11 segundos (mais rápido)
      const delay = Math.random() * 2; // Delay menor (0-2s)
      
      bubble.style.animation = `${bubbleAnimation} ${duration}s ease-out ${delay}s infinite`;

      this.particles.push(bubble);
      this.container.appendChild(bubble);
    }

    // Criar algumas conchas e estrelas no fundo (estáticas ou flutuando levemente)
    for (let i = 0; i < 6; i++) {
      const decoration = document.createElement('div');
      decoration.textContent = Math.random() > 0.5 ? '🐚' : '⭐';
      decoration.style.position = 'fixed';
      decoration.style.fontSize = `${Math.random() * 25 + 20}px`;
      decoration.style.left = `${Math.random() * 100}%`;
      decoration.style.bottom = `${Math.random() * 10}%`;
      decoration.style.opacity = `${Math.random() * 0.3 + 0.2}`;
      decoration.style.pointerEvents = 'none';
      decoration.style.zIndex = '0';
      decoration.style.willChange = 'transform';
      decoration.style.animation = `swimFloat ${Math.random() * 4 + 3}s ease-in-out ${Math.random() * 2}s infinite`;

      this.particles.push(decoration);
      this.container.appendChild(decoration);
    }
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
    // Calcular número de pessoas
    let numPessoas = 1;
    if (data.pessoas === 'custom' && data.qtdExtra) {
      numPessoas = parseInt(data.qtdExtra);
    } else if (data.pessoas) {
      numPessoas = parseInt(data.pessoas);
    }

    // Preparar dados para o template do email
    const emailParams = {
      to_email: EMAILJS_CONFIG.emailDestino,
      from_name: 'Convite Alice 4 Anos',
      nome_convidado: data.nome,
      presenca: data.presenca,
      num_pessoas: numPessoas,
      observacao: data.observacao || 'Nenhuma observação',
      data_confirmacao: new Date().toLocaleString('pt-BR'),
      // Mensagem formatada bonita
      mensagem: `
🎉 NOVA CONFIRMAÇÃO RECEBIDA! 🎉

👤 Nome: ${data.nome}
💌 Presença: ${data.presenca}
👥 Quantidade de pessoas: ${numPessoas}
📝 Observação: ${data.observacao || 'Nenhuma'}
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
      pessoas: data.pessoas,
      qtdExtra: data.qtdExtra ? parseInt(data.qtdExtra) : undefined,
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
  private pessoasDropdown: HTMLSelectElement;
  private qtdExtra: HTMLInputElement;

  constructor() {
    this.form = document.getElementById('confirmForm') as HTMLFormElement;
    this.pessoasDropdown = document.getElementById('pessoasDropdown') as HTMLSelectElement;
    this.qtdExtra = document.getElementById('qtdExtra') as HTMLInputElement;

    this.setupEventListeners();
  }

  private setupEventListeners(): void {
    // Mostrar/esconder campo extra de pessoas
    this.pessoasDropdown.addEventListener('change', () => {
      if (this.pessoasDropdown.value === 'custom') {
        this.qtdExtra.classList.add('show');
        this.qtdExtra.style.display = 'block';
      } else {
        this.qtdExtra.classList.remove('show');
        this.qtdExtra.style.display = 'none';
      }
    });

    // Submissão do formulário
    this.form.addEventListener('submit', async (e) => {
  e.preventDefault();
      e.stopPropagation(); // Prevenir propagação
      await this.handleSubmit();
      return false; // Prevenir comportamento padrão adicional
    });
  }

  private async handleSubmit(): Promise<void> {
    const formData = new FormData(this.form);
    const data: ConfirmationData = {
      nome: formData.get('nome') as string,
      presenca: formData.get('presenca') as string,
      pessoas: formData.get('pessoas') as string,
      observacao: formData.get('observacao') as string,
    };

    if (data.pessoas === 'custom') {
      data.qtdExtra = formData.get('qtdExtra') as string;
    }

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

  // Inicializar Scene 3D - DESABILITADO
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
});