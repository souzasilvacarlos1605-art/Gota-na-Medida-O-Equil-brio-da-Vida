let umidade = 20; // Umidade inicial do solo
let tamanhoPlanta = 10; // Tamanho inicial da planta

function setup() {
  createCanvas(400, 400);
}

function draw() {
  // 🌤️ Desenha o Céu (Muda de cor se estiver chovendo)
  if (mouseIsPressed) {
    background(100, 130, 170); // Céu nublado de chuva
  } else {
    background(135, 206, 235); // Céu azul limpo
  }
  
  // 🟫 Desenha a Terra/Solo
  fill(139, 69, 19);
  noStroke();
  rect(0, 300, 400, 100);
  
  // 🔄 Lógica da Umidade (Simulação)
  if (mouseIsPressed) {
    umidade += 0.4; // Aumenta a umidade quando chove
    if (umidade > 100) umidade = 100;
    
    // Desenha gotinhas de chuva caindo perto do mouse
    fill(0, 0, 255);
    ellipse(mouseX + random(-30, 30), mouseY + random(0, 50), 4, 8);
  } else {
    umidade -= 0.1; // O solo vai secando com o tempo
    if (umidade < 0) umidade = 0;
  }
  
  // 🌱 Lógica de Crescimento da Planta
  // A planta SÓ cresce se a umidade estiver na faixa ideal (entre 30% e 70%)
  if (umidade >= 30 && umidade <= 70) {
    tamanhoPlanta += 0.2;
    if (tamanhoPlanta > 150) tamanhoPlanta = 150; // Limite de crescimento
  }
  
  // 🌿 Desenha o Caule da Planta
  stroke(34, 139, 34);
  strokeWeight(6);
  line(200, 300, 200, 300 - tamanhoPlanta);
  
  // 🌸 Desenha a Flor (Aparece quando a planta cresce bastante)
  if (tamanhoPlanta > 60) {
    noStroke();
    fill(255, 69, 0); // Pétalas vermelhas
    ellipse(200, 300 - tamanhoPlanta, 25, 25);
    fill(255, 215, 0); // Miolo amarelo
    ellipse(200, 300 - tamanhoPlanta, 12, 12);
  }
  
  // 📊 Painel de Informações (Texto na tela)
  noStroke();
  fill(0);
  textSize(16);
  text("💧 Umidade do Solo: " + nf(umidade, 1, 1) + "%", 20, 35);
  
  textSize(12);
  text("👉 CLIQUE E SEGURE O MOUSE PARA IRRIGAR", 20, 60);
  
  // 🚨 Alertas de Sustentabilidade
  textSize(14);
  if (umidade < 30) {
    fill(180, 50, 50);
    text("Status: Solo muito seco! A planta não cresce. 🛑", 20, 90);
  } else if (umidade >= 30 && umidade <= 70) {
    fill(0, 100, 0);
    text("Status: Umidade Ideal! Planta evoluindo. 🌱", 20, 90);
  } else {
    fill(0, 0, 200);
    text("Status: Solo Encharcado! Desperdiçando água! ⚠️", 20, 90);
  }
}