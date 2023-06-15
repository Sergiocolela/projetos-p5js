// Variaveis da Bolinha 
let xBolinha = 300;
let yBolinha = 200;
let diametro = 18;
let raio = diametro / 2;

// Variaveis da Barra 

let velocidadexBolinha = 6;
let velocidadeyBolinha = 6;

// Variaveis da Raquete 

let xRaquete = 5;
let yRaquete = 150;
let larguradaraquete = 10; // width 
let alturadaraquete = 90; // height 
let colidiu = false;


// Raquete do oponente 
let xRaqueteOponente = 585;
let yRaqueteOponente = 150;
let velocidadeYOponente;


//placar do jogo

let meusPontos = 0
let pontosPontosDoOponente =0

// sons do Jogo 
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound ("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  verificaColisãoborda();
  mostraraquete(xRaquete, yRaquete);
  movimentarRquete();
  verificaColisaoRaquete(xRaquete,yRaquete );
  mostraraquete(xRaqueteOponente,yRaqueteOponente);
  movimentaRaqueteOponente();
  verificaColisaoRaquete(xRaqueteOponente,yRaqueteOponente);
  icluiPlacar();  
  marcaPonto();
  bolinhaNaoFicaPresa();
} 
function mostraBolinha(){ 
  circle(xBolinha, yBolinha, diametro);
}
function movimentaBolinha(){
  xBolinha += velocidadexBolinha;
  yBolinha += velocidadeyBolinha;
  
}

function verificaColisãoborda(){
      if (xBolinha + raio > width ||
     xBolinha - raio< 0){
     velocidadexBolinha *= -1;
  }
    if (yBolinha + raio > height ||
       yBolinha - raio < 0){
      velocidadeyBolinha *= -1
    }  
}

function mostraraquete(x, y ){
 rect(x,y,larguradaraquete,alturadaraquete); 
}  
function movimentarRquete(){
if (keyIsDown(UP_ARROW)){
  yRaquete -=10;
}
if (keyIsDown(DOWN_ARROW)){
  yRaquete +=10;
}
}
function verificaColisaoRaquete(x,y) {
    colidiu = collideRectCircle(x,y, larguradaraquete, alturadaraquete, xBolinha, yBolinha, raio);
    if (colidiu) {
        velocidadexBolinha *= -1;
      raquetada.play()
    }
}
function movimentaRaqueteOponente() {
  velocidadeYOponente = yBolinha - yRaqueteOponente - larguradaraquete / 2 - 30;
    yRaqueteOponente += velocidadeYOponente
}

function icluiPlacar(x,y){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255,140,0));
  rect(150,10,40,20);
  fill (255);
  text (meusPontos, 170,26);
  fill(color(255,140,0));
  rect(450,10,40,20);
  fill (255);
  text (pontosPontosDoOponente, 470, 26);
  
}

function   marcaPonto(){
  if (xBolinha>590){
    meusPontos +=1;
    ponto.play()
  }
    if (xBolinha<10){
    pontosPontosDoOponente +=1;
      ponto.play()
  }
}

function bolinhaNaoFicaPresa(){
    if (xBolinha - raio < 0){
    xBolinha = 23
    }
}
