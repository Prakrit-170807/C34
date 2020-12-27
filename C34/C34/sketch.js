const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint

var ground, ground2
var shooter,string
var box,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31



function setup (){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(700,600,500,10)
    shooter = new Shooter(100,350,80,80)

    string = new String(shooter.body,{x:200,y:100})

    box = new Building(500,400,40,30)
    box2 = new Building(540,400,40,30)
    box3 = new Building(580,400,40,30)
    box4 = new Building(620,400,40,30)
    box5 = new Building(660,400,40,30)
    box6 = new Building(500,320,40,30)
    box7 = new Building(540,320,40,30)
    box8 = new Building(580,320,40,30)
    box9 = new Building(620,320,40,30)
    box10 = new Building(660,320,40,30)
    box11 = new Building(500,240,40,30)
    box12 = new Building(540,240,40,30)
    box13 = new Building(580,240,40,30)
    box14 = new Building(620,240,40,30)
    box15 = new Building(660,240,40,30)
    box16 = new Building(500,200,40,30)
    box17 = new Building(540,200,40,30)
    box18 = new Building(580,200,40,30)
    box19 = new Building(620,200,40,30)
    box20 = new Building(660,200,40,30)
    box21 = new Building(500,160,40,30)
    box22 = new Building(540,160,40,30)
    box23 = new Building(580,160,40,30)
    box24 = new Building(620,160,40,30)
    box25 = new Building(660,160,40,30)
    box26 = new Building(500,160,40,30)
    box27 = new Building(540,120,40,30)
    box28 = new Building(580,120,40,30)
    box29 = new Building(620,120,40,30)
    box30 = new Building(660,120,40,30)
    
    
}

function draw(){
    background(50);
    Engine.update(engine);

    ground.display()
    

    string.display()

    shooter.display()
    
    box.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()
    box17.display()
    box18.display()
    box19.display()
    box20.display()
    box21.display()
    box22.display()
    box23.display()
    box24.display()
    box25.display()
    box26.display()
    box27.display()
    box28.display()
    box29.display()
    box30.display()


    
}

function mouseDragged(){
    Matter.Body.setPosition(shooter.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    string.fly()
}

function keyPressed(){
    if(keyCode == UP_ARROW){
        Matter.Body.setPosition(shooter.body,{x:100,y:350})
        string.attach(shooter.body)
    }
}

// async function Time_bg(){
//     var APIanswer= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
//     var APIanswerjson = await APIanswer.json()
//     var Datetime = APIanswerjson.datetime
//     console.log(Datetime)
//     var hour = Datetime.slice(11,13)
//     console.log(hour)
//     if(hour>=06&&hour<=17){
//        Image_load='Morning.png' 
//     }
//     else{
//         Image_load='Evening.png' 
//     }
//     background_image=loadImage(Image_load)
// }
