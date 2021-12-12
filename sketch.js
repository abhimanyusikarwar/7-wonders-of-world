var gameState=0;
var tajMahal;
var pyramid;
var wall;
var coll;
var sta;
var peta;
var chi;
var mahal;
var piy;
var china;
var colle;
var christ;
var petra;
var chichen;

function preload(){
tajMahal=loadImage("image (35).png");
pyramid=loadImage("image (37).png");
wall=loadImage("image (39).png");
coll=loadImage("image (40).png");
sta=loadImage("image (41).png");
peta=loadImage("image (42).png");
chi=loadImage("image (43).png");


}

function setup(){
createCanvas(1536,753);
mahal=createSprite(700,300,50,50);
mahal.addImage(tajMahal);
mahal.visible=false;

piy=createSprite(700,300,50,50);
piy.addImage(pyramid);
piy.visible=false;

china=createSprite(700,300,50,50);
china.addImage(wall);
china.visible=false;

colle=createSprite(700,300,50,50);
colle.addImage(coll);
colle.visible=false;

christ=createSprite(700,300,50,50);
christ.addImage(sta);
christ.scale=0.5;
christ.visible=false;

petra=createSprite(700,300,50,50);
petra.addImage(peta);
petra.visible=false;

chichen=createSprite(700,300,50,50);
chichen.addImage(chi);
chichen.visible=false;
}

function draw(){
    background("skyblue");
    if(gameState===0){
        var taj=createButton("Tajmahal");
        taj.position(50,100);
        drawSprites();
        if(taj.mousePressed(function(){
            gameState=1;
        }));
        var giza=createButton("Pyramid of giza");
    giza.position(50,150);
    if(giza.mousePressed(function(){
        gameState=2;
    }));
    var cwall=createButton("The Great Wall Of China");
    cwall.position(50,200);
    if(cwall.mousePressed(function(){
    gameState=3;
    }));
    
    var colles=createButton("Colossuem");
    colles.position(50,250);
    if(colles.mousePressed(function(){
     gameState=4;
    }));

    var redeemer=createButton("Christ the Redeemer");
    redeemer.position(50,300);
    if(redeemer.mousePressed(function(){
     gameState=5;
    }));

    var pe=createButton("Petra");
    pe.position(50,350);
    if(pe.mousePressed(function(){
      gameState=6;
    }));

    var itza=createButton("El Castillo");
    itza.position(50,400);
    if(itza.mousePressed(function(){
       gameState=7;
    }));

    drawSprites();
    textSize(50);
    fill("yellow");
    text("Hello I am Abhimanyu Singh Rajput",375,50);
    textSize(24);
    fill("blue");
    text("By clicking on these buttons you can gain some information about 7 wonders of the world.",200,150);
    }

if(gameState===1){
    mahal.visible=true;
    piy.visible=false;
    china.visible=false;
    colle.visible=false;
    christ.visible=false;
    petra.visible=false;
    chichen.visible=false;
    drawSprites();
    textSize(25);
    fill("black");
    text("The Taj Mahal, is an ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra. ",50,500);
    text(" It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal;",10,525);
    text(" it also houses the tomb of Shah Jahan himself.",10,550);
    
}

if(gameState===2){
    mahal.visible=false;
    piy.visible=true;
    china.visible=false;
    colle.visible=false;
    christ.visible=false;
    petra.visible=false;
    chichen.visible=false;
    drawSprites();
    textSize(25);
    fill("black");
    text("The Great Pyramid of Giza is the oldest and ",50,500);
    text("largest of the pyramids in the Giza pyramid complex bordering present-day Giza in Greater Cairo, Egypt   ",10,525);
    text("It is the oldest of the Seven Wonders of the Ancient World, and the only one to remain largely intact. ",10,550);
    
}

if(gameState===3){
    mahal.visible=false;
    piy.visible=false;
    china.visible=true;
    colle.visible=false;
    christ.visible=false;
    petra.visible=false;
    chichen.visible=false;
drawSprites();
textSize(25);
    fill("black");
    text("The Great Wall of China is a series of fortifications that were built across the",50,650);
    text(" historical northern borders of ancient Chinese states and Imperial China as protection against ",10,675);
    text(" various nomadic groups from the Eurasian Steppe. ",10,725);
    
}

if(gameState===4){
    mahal.visible=false;
    piy.visible=false;
    china.visible=false;
    colle.visible=true;
    christ.visible=false;
    petra.visible=false;
    chichen.visible=false;
    drawSprites();
    textSize(24);
    fill("black");
    text("The Colosseum is an oval amphitheatre in the centre of the city of Rome,",10,500);
    text(" Italy, just east of the Roman Forum. It is the largest ancient amphitheatre ever built,",10,525);
    text("and is still the largest standing amphitheatre in the world today,",10,550);
    text("despite its age.",10,575);
}

if(gameState===5){
    mahal.visible=false;
    piy.visible=false;
    china.visible=false;
    colle.visible=false;
    christ.visible=true;
    petra.visible=false;
    chichen.visible=false;
    drawSprites();
    textSize(24);
    fill("red");
    text("Christ the Redeemer is an Art Deco statue of Jesus Christ in Rio de Janeiro,",10,600);
    text(" Brazil, created by French sculptor Paul Landowski and built by Brazilian engineer Heitor da Silva Costa,",10,625);
    text("in collaboration with French engineer Albert Caquot.",10,650);
    text("Romanian sculptor Gheorghe Leonida fashioned the face.",10,675);
}

if(gameState===6){
    mahal.visible=false;
    piy.visible=false;
    china.visible=false;
    colle.visible=false;
    christ.visible=false;
    petra.visible=true;
    chichen.visible=false;
    drawSprites();
    textSize(24);
    fill("red");
    text("Petra is a famous archaeological site in Jordan's southwestern desert. Dating to around 300 B.C., it was the capital of the Nabatean Kingdom",10,600);
    text(" Accessed via a narrow canyon called Al Siq, it contains tombs and temples carved into pink sandstone cliffs,",10,625);
    text("earning its nickname, the Rose City. Perhaps its most famous structure is 45m-high Al Khazneh,",10,650);
    text("a temple with an ornate, Greek-style facade, and known as The Treasury.",10,675);
}

if(gameState===7){
    mahal.visible=false;
    piy.visible=false;
    china.visible=false;
    colle.visible=false;
    christ.visible=false;
    petra.visible=false;
    chichen.visible=true;
    drawSprites();
    textSize(24);
    fill("red");
    text("La Pirámide, known as the Temple of Kukulcán,",10,600);
    text("is a Mesoamerican step-pyramid that dominates the center of the Chichen Itza ",10,625);
    text("archaeological site in the Mexican state of Yucatán.",10,650);
    text("The pyramid building is more formally designated by archaeologists as Chichen Itza Structure 5B18.",10,675);
}
}
