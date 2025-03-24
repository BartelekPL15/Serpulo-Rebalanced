//Speed is x * 7.5 to get whatever is displayed in the core database
//to pick which weapons are, replace the numer in `get(x)`, order of weapons can be checked in the core database
// ^ pair of weapons are counted as one and affect both, and it starts from 0
 //compensating for hit rate 
let lightningBul = new BulletType(0.0001, 0);
lightningBul.lifetime = Fx.lightning.lifetime;
lightningBul.hitEffect = Fx.hitLancer;
lightningBul.despawnEffect = Fx.none;
lightningBul.status = StatusEffects.shocked;
lightningBul.statusDuration = 10;
lightningBul.hittable = false;
lightningBul.lightColor = Color.white;
lightningBul.collidesGround = false;
lightningBul.collidesAir = true;

UnitTypes.dagger.targetAir = false;
UnitTypes.dagger.weapons.get(0).bullet.collidesAir = false;

//mace changes
//moving wall, its made to block incoming damage to help other more powerfull units with less health
//to deal damage, itself its also able to do it but limited range makes it easy to counter

UnitTypes.mace.health = 650;
UnitTypes.mace.armor = 9;
UnitTypes.mace.weapons.get(0).bullet.damage = 45;
UnitTypes.mace.targetAir = false;
UnitTypes.mace.weapons.get(0).bullet.collidesAir = false;

//fortress changes
//long range artylery unit, higher damage for slower fire rate, made it do more direct damage

UnitTypes.fortress.health = 675;
UnitTypes.fortress.armor = 3;
UnitTypes.fortress.range = (34*8);
UnitTypes.fortress.weapons.get(0).bullet.damage = 50;
UnitTypes.fortress.weapons.get(0).bullet.splashDamage = 70;

//scepter changes
//another long range unit, deals damage in bursts and has small turrets to defend itself
//not much to do here, just nerf health cuz t4s are gonna be cheaper

UnitTypes.scepter.health = 2000;
UnitTypes.scepter.speed = (3.22 / 7.5);
UnitTypes.scepter.range = (38*8);
UnitTypes.scepter.weapons.get(0).bullet.collidesAir = false;
UnitTypes.scepter.weapons.get(0).shoot.shots = 3;
UnitTypes.scepter.weapons.get(0).reload = (60 * 3);//fires salvo every 3 seconds
UnitTypes.scepter.weapons.get(0).bullet.damage = 125;
UnitTypes.scepter.weapons.get(0).bullet.lightningDamage = 5;
UnitTypes.scepter.weapons.get(0).bullet.lifetime = (38 * 8) / 8;
UnitTypes.scepter.weapons.get(0).shootCone = 8; //incrased the shoot cone to reduce ai dumbness
UnitTypes.scepter.weapons.get(1).bullet.collidesGround = false;
UnitTypes.scepter.weapons.get(1).shootSound = Sounds.shootSnap;
UnitTypes.scepter.weapons.get(1).bullet.damage = 25;
UnitTypes.scepter.weapons.get(1).bullet.speed = 5;
UnitTypes.scepter.weapons.get(1).bullet.lifetime = (25 * 8) / 5;
UnitTypes.scepter.weapons.get(1).bullet.homingPower = 0.1; //a bit higher so it can hit horizons better with the weave
UnitTypes.scepter.weapons.get(2).bullet.collidesGround = false;
UnitTypes.scepter.weapons.get(2).shootSound = Sounds.shootSnap;
UnitTypes.scepter.weapons.get(2).bullet.damage = 25;
UnitTypes.scepter.weapons.get(2).bullet.speed = 5;
UnitTypes.scepter.weapons.get(2).bullet.lifetime = (25 * 8) / 5;
UnitTypes.scepter.weapons.get(2).bullet.homingPower = 0.1; //a bit higher so it can hit horizons better with the weave

//reign changes
//reign will have AA weapon, high damage but slow reload

let reignAAweapon = new Weapon("missiles-mount");
reignAAweapon.bullet = new BasicBulletType(7, 175);
reignAAweapon.shootSound = Sounds.dullExplosion;
reignAAweapon.mirror = true;
reignAAweapon.rotate = true;
reignAAweapon.top = true;
reignAAweapon.x = 18;
reignAAweapon.y = -8;
reignAAweapon.shootY = 2;
reignAAweapon.reload = 480;
reignAAweapon.rotateSpeed = 3;
reignAAweapon.bullet.width = 10;
reignAAweapon.bullet.height = 13;
reignAAweapon.bullet.weaveMag = 3.5;
reignAAweapon.bullet.weaveScale = 4;
reignAAweapon.bullet.trailWidth = 3;
reignAAweapon.bullet.trailLength = 4;
reignAAweapon.bullet.homingPower = 0.1;
reignAAweapon.bullet.lifetime = (32 * 8) / 7;
reignAAweapon.bullet.collidesGround = false;

//just like in YetAnotherSerpuloRebalance t5s are way much more powerfull, it looks like googly didn't spend that much time on this but i will
//reign will be just like mace - in front of attack shielding other units - but with masive firepower, howeve its shorter range then fortress or scepter

UnitTypes.reign.health = 75000;
UnitTypes.reign.armor = 32;
UnitTypes.reign.speed = (2.25 / 7.5);
UnitTypes.reign.weapons.add(reignAAweapon);
UnitTypes.reign.weapons.get(0).bullet.collidesAir = false;
UnitTypes.reign.weapons.get(0).bullet.splashDamageRadius = 16;
UnitTypes.reign.weapons.get(0).bullet.lifetime = (18 * 8) / 13;
UnitTypes.reign.weapons.get(0).bullet.damage = 145;
UnitTypes.reign.range = (18 * 8);

//nova tree is for support, defending and other strategys you can't do with dagger tree
//its least powerfull in damage but provides support, during attack or defending
//nova changes
//im gonna copy ability for nova from YetAnotherSerpuloRebalance beacouse why not

let novaHeal = new RepairBeamWeapon("");
novaHeal.top = false;
novaHeal.mirror = true;
novaHeal.rotate = true;
novaHeal.pulseRadius = 3;
novaHeal.pulseStroke = 1;
novaHeal.x = 3;
novaHeal.y = -4;
novaHeal.rotate = false;
novaHeal.beamWidth = 0.3;
novaHeal.layerOffset = -0.01;
novaHeal.repairSpeed = 0.2;
novaHeal.bullet = new BulletType();
novaHeal.bullet.maxRange = 80;
novaHeal.shootCone = 30;

//new  idea for nova (bart 19.03.2025) - make it much longer range, have it do more damage but at slower rate so its damage per second is lower
//*insert sniper TF2 joke here*

UnitTypes.nova.weapons.add(novaHeal);
UnitTypes.nova.abilities.remove(0);
UnitTypes.nova.range = (28 * 8);
UnitTypes.nova.weapons.get(0).bullet.lifetime = (28 * 8) / 5.2;
UnitTypes.nova.weapons.get(0).bullet.damage = 52;
UnitTypes.nova.weapons.get(0).reload = (60 * 4);//2 bullets every 4 seconds

//pulsar changes, finally
//googly, i don't care what you say but pulsar needs a buff. i have no clue how in a world can you make already
//unused, already worst t2 unit, buff other units and say its 'balanced'. its not even good at what it only used to be at
//anyways pulsar here WILL be balanced, im giving it a longer range. at range it wont do much, but at close its damage will be higher

UnitTypes.pulsar.health = 300;
UnitTypes.pulsar.armor = 0;
UnitTypes.pulsar.range = (12 * 8);
UnitTypes.pulsar.weapons.get(0).bullet.damage = 40;//40 damage so it can 1 shoot conveyors
UnitTypes.pulsar.weapons.get(0).bullet.lightningLength = 17;
UnitTypes.pulsar.weapons.get(0).bullet.lightningLengthRand = 2;
UnitTypes.pulsar.weapons.get(0).shoot.shots = 2;
UnitTypes.pulsar.weapons.get(0).reload = 60;
UnitTypes.pulsar.weapons.get(0).inaccuracy = 6;

//quasar changes
//provides the team with shield, terible at fights, but great at defensive holds

UnitTypes.quasar.weapons.get(0).bullet.collidesAir = false;
UnitTypes.quasar.range = (12 * 8);//-4 range for faster reload so it can counter crawlers better
UnitTypes.quasar.targetAir = false;
UnitTypes.quasar.weapons.get(0).reload = 30;
UnitTypes.quasar.weapons.get(0).bullet.length = (12.5 * 8);
UnitTypes.quasar.abilities.get(0).radius = 80;
UnitTypes.quasar.abilities.get(0).max = 300;
UnitTypes.quasar.abilities.get(0).regen = (36 / 60); 

//vela changes
//honestly its good as it is

UnitTypes.vela.health = 3000;

//corvus changes
//longest range, destroys most things in its path but countered by air. not like it has 10000 health in yasr

UnitTypes.corvus.health = 6500;
UnitTypes.corvus.armor = 30;// armor very high so you need something more then just horizons
UnitTypes.corvus.targetAir = false;
UnitTypes.corvus.weapons.get(0).bullet.collidesAir = false;
UnitTypes.corvus.weapons.get(0).bullet.damage = 2000;
UnitTypes.corvus.weapons.get(0).bullet.length = (67.5 * 8);

UnitTypes.corvus.range = (65 * 8);//no, its not gonna be 69 range, you want make me say 6... oh, damn it.
//crawler tree is not good against buildins but very effective wining unit fights (ground of course)
//crawler changes

UnitTypes.crawler.health = 220;
UnitTypes.crawler.armor = 3;
UnitTypes.crawler.targetAir = false;
UnitTypes.crawler.weapons.get(0).bullet.collidesAir = false;
UnitTypes.crawler.weapons.get(0).bullet.splashDamage = 280;
UnitTypes.crawler.weapons.get(0).bullet.splashDamageRadius = 28;
UnitTypes.crawler.weapons.get(0).bullet.status = StatusEffects.slow;
UnitTypes.crawler.weapons.get(0).bullet.statusDuration = 300;
UnitTypes.crawler.range = (1);

//atrax changes
//higher damage but less damage to buildings
//faster then pulsar beacouse it cannot do well against buildings and countered by air

UnitTypes.atrax.health = 700;
UnitTypes.atrax.armor = 1;
UnitTypes.atrax.speed = (7.25 / 7.5);
UnitTypes.atrax.weapons.get(0).bullet.buildingDamageMultiplier = 0.34;
UnitTypes.atrax.weapons.get(0).bullet.damage = 28;
UnitTypes.atrax.weapons.get(0).bullet.knockback = 1;

//spiroct changes
//i can't spell spiroct

let spiroctHeal = new RegenAbility();
spiroctHeal.amount = (20 / 60);

UnitTypes.spiroct.health = 1750;
UnitTypes.spiroct.speed = (6.5 / 7.5);
UnitTypes.spiroct.targetAir = false;
UnitTypes.spiroct.weapons.get(0).bullet.collidesAir = false;
UnitTypes.spiroct.weapons.get(0).bullet.buildingDamageMultiplier = 0.25;
UnitTypes.spiroct.weapons.get(0).bullet.damage = 95;
UnitTypes.spiroct.weapons.get(0).reload = 20;
UnitTypes.spiroct.weapons.get(0).bullet.knockback = 0;
UnitTypes.spiroct.weapons.get(0).bullet.sapStrength = 0.5;
UnitTypes.spiroct.weapons.get(0).bullet.length = (12 * 7.5);
UnitTypes.spiroct.weapons.get(1).bullet.collidesAir = false;
UnitTypes.spiroct.weapons.get(1).bullet.buildingDamageMultiplier = 0.1;
UnitTypes.spiroct.weapons.get(1).bullet.knockback = -1.25;
UnitTypes.spiroct.weapons.get(1).bullet.damage = 30;
UnitTypes.spiroct.weapons.get(1).reload = 10;
UnitTypes.spiroct.weapons.get(1).bullet.sapStrength = 0.75;
UnitTypes.spiroct.weapons.get(1).bullet.length = (10 * 7.5);
UnitTypes.spiroct.range = (12 * 8);
UnitTypes.spiroct.abilities.add(spiroctHeal);

//arkyid changes
//bruh, why does arkyid in yasr got so nerfed artylery cannon

let arkyidHeal = new RegenAbility();
arkyidHeal.amount = (45 / 60);

let arkyidSapperTwo = new SapBulletType();
arkyidSapperTwo.sapStrength = 0.5;
arkyidSapperTwo.length = 80;
arkyidSapperTwo.damage = 75;
arkyidSapperTwo.shootEffect = Fx.shootSmall;
arkyidSapperTwo.hitColor = Color.valueOf("bf92f9");
arkyidSapperTwo.color = Color.valueOf("bf92f9");
arkyidSapperTwo.despawnEffect = Fx.none;
arkyidSapperTwo.width = 0.55;
arkyidSapperTwo.lifetime = 30;
arkyidSapperTwo.knockback = -1.5;
arkyidSapperTwo.buildingDamageMultiplier = 0.25;
arkyidSapperTwo.collidesAir = false;

let arkyidSapperThree = new SapBulletType();
arkyidSapperThree.sapStrength = 0.4;
arkyidSapperThree.length = 96;
arkyidSapperThree.damage = 125;
arkyidSapperThree.shootEffect = Fx.shootSmall;
arkyidSapperThree.hitColor = Color.valueOf("bf92f9");
arkyidSapperThree.color = Color.valueOf("bf92f9");
arkyidSapperThree.despawnEffect = Fx.none;
arkyidSapperThree.width = 0.55;
arkyidSapperThree.lifetime = 30;
arkyidSapperThree.knockback = -1.5;
arkyidSapperThree.buildingDamageMultiplier = 0.25;

UnitTypes.arkyid.health = 6000;
UnitTypes.arkyid.speed = (5.5 / 7.5);
UnitTypes.arkyid.weapons.get(0).bullet.collidesAir = false;
UnitTypes.arkyid.weapons.get(0).reload = 6;
UnitTypes.arkyid.weapons.get(0).bullet.buildingDamageMultiplier = 0.25;
UnitTypes.arkyid.weapons.get(1).bullet = arkyidSapperTwo;
UnitTypes.arkyid.weapons.get(1).reload = 30;
UnitTypes.arkyid.weapons.get(2).bullet = arkyidSapperThree;
UnitTypes.arkyid.weapons.get(2).reload = 40;
UnitTypes.arkyid.weapons.get(3).bullet.splashDamageRadius = 40;
UnitTypes.arkyid.weapons.get(3).bullet.splashDamage = 55;
UnitTypes.arkyid.weapons.get(3).bullet.buildingDamageMultiplier = 0.1;
UnitTypes.arkyid.abilities.add(arkyidHeal);

//toxo changes
//idk it can be op

UnitTypes.toxopid.armor = 18;
UnitTypes.toxopid.speed = (4 / 7.5);
UnitTypes.toxopid.targetAir = false;
UnitTypes.toxopid.weapons.get(0).bullet.damage = 350;
UnitTypes.toxopid.weapons.get(0).bullet.collidesAir = false;

//flare changes
//remake flare to AA unit

let flaremissile = new Weapon();
flaremissile.bullet = new BasicBulletType(10, 70);
flaremissile.shootSound = Sounds.dullExplosion;
flaremissile.mirror = false;
flaremissile.rotate = false;
flaremissile.top = false;
flaremissile.x = 0;
flaremissile.y = -5;
flaremissile.shootY = 2;
flaremissile.reload = 360;
flaremissile.rotateSpeed = 3;
flaremissile.bullet.width = 10;
flaremissile.bullet.height = 13;
flaremissile.bullet.weaveMag = 3.5;
flaremissile.bullet.weaveScale = 4;
flaremissile.bullet.trailWidth = 3;
flaremissile.bullet.trailLength = 4;
flaremissile.bullet.homingPower = 0.1;
flaremissile.bullet.lifetime = (14 * 8) / 8;
flaremissile.bullet.collidesGround = false;

//flare is now a AA unit, counters horizons pretty well however it has long reload

UnitTypes.flare.weapons.add(flaremissile);
UnitTypes.flare.rotateSpeed = 30;

//horizon changes
//basicly same as yasr
UnitTypes.horizon.health = 95;
UnitTypes.horizon.speed = (20 / 7.5);
UnitTypes.horizon.weapons.get(0).shoot.shots = 8;
UnitTypes.horizon.weapons.get(0).shoot.shotDelay = 2;
UnitTypes.horizon.weapons.get(0).reload = (60 * 5);
UnitTypes.horizon.weapons.get(0).velocityRnd = 3.5;

/*
units from here are not done (this includes all naval, mono tree, zenith, antumbra and eclipse)
*/

//zenith has now 2 extra weapons to help it defend from single units

let zenithFront = new Weapon();
zenithFront.bullet = new BasicBulletType(3.5, 6);
zenithFront.shootSound = Sounds.pew;
zenithFront.mirror = true;
zenithFront.rotate = false;
zenithFront.top = false;
zenithFront.x = 4;
zenithFront.y = 7;
zenithFront.shootY = 2;
zenithFront.reload = 30;
zenithFront.bullet.width = 8;
zenithFront.bullet.height = 9;
zenithFront.bullet.lifetime = (16 * 8) / 3.5;
zenithFront.bullet.collidesAir = false;

let zenithBack = new Weapon();
zenithBack.bullet = new BasicBulletType(4.5, 25);
zenithBack.shootSound = Sounds.pew;
zenithBack.mirror = true;
zenithBack.rotate = false;
zenithBack.top = false;
zenithBack.x = 5;
zenithBack.y = -8;
zenithBack.shootY = 2;
zenithBack.reload = 120;
zenithBack.bullet.width = 10;
zenithBack.bullet.height = 11;
zenithBack.bullet.lifetime = (22 * 8) / 4.5;
zenithBack.bullet.collidesAir = false;

//zenith

UnitTypes.zenith.health = 400;
UnitTypes.zenith.speed = (15.75 / 7.5);
UnitTypes.zenith.range = (30 * 8);
UnitTypes.zenith.weapons.get(0).bullet.collidesGround = false;
UnitTypes.zenith.weapons.get(0).bullet.keepVelocity = true;
UnitTypes.zenith.weapons.get(0).bullet.speed = 5;
UnitTypes.zenith.weapons.get(0).bullet.damage = 45;
UnitTypes.zenith.weapons.get(0).bullet.splashDamage = 25;
UnitTypes.zenith.weapons.get(0).bullet.splashDamageRadius = 20;
UnitTypes.zenith.weapons.get(0).bullet.homingPower = 0.2;
UnitTypes.zenith.weapons.get(0).bullet.lifetime = (30 * 8) / 5;
UnitTypes.zenith.weapons.add(zenithFront);
UnitTypes.zenith.weapons.add(zenithBack);

//antumbra but without payload capacity

UnitTypes.antumbra.health = 4450;
UnitTypes.antumbra.armor = 15;
UnitTypes.antumbra.speed = (4 / 7.5);
UnitTypes.antumbra.itemCapacity = 60;
UnitTypes.antumbra.weapons.get(0).bullet.damage = 20;
UnitTypes.antumbra.weapons.get(0).bullet.lifetime = (25 * 8) / 5;
UnitTypes.antumbra.weapons.get(1).bullet.damage = 20;
UnitTypes.antumbra.weapons.get(1).bullet.lifetime = (25 * 8) / 5;
UnitTypes.antumbra.weapons.get(2).bullet.collidesAir = false;
UnitTypes.antumbra.weapons.get(2).bullet.damage = 220;
UnitTypes.antumbra.weapons.get(2).reload = 24;
UnitTypes.antumbra.weapons.get(2).bullet.lifetime = (28 * 8) / 8;
UnitTypes.antumbra.range = (28 * 8);

//eclipse changes

UnitTypes.eclipse.health = 45000;
UnitTypes.eclipse.armor = 17;
UnitTypes.eclipse.speed = (3.25 / 7.5);
UnitTypes.eclipse.weapons.get(0).bullet.damage = 95;
UnitTypes.eclipse.weapons.get(0).reload = 15;
UnitTypes.eclipse.weapons.get(1).bullet.collidesGround = false;
UnitTypes.eclipse.weapons.get(1).bullet.damage = 140;
UnitTypes.eclipse.weapons.get(1).bullet.splashDamage = 95;
UnitTypes.eclipse.weapons.get(1).bullet.splashDamageRadius = 12;
UnitTypes.eclipse.weapons.get(1).reload = 30;
UnitTypes.eclipse.weapons.get(1).bullet.lifetime = (30 * 8) / 5;
UnitTypes.eclipse.weapons.get(2).bullet.collidesGround = false;
UnitTypes.eclipse.weapons.get(2).bullet.damage = 10;
UnitTypes.eclipse.weapons.get(2).bullet.splashDamage = 65;
UnitTypes.eclipse.weapons.get(2).bullet.splashDamageRadius = 28;
UnitTypes.eclipse.weapons.get(2).reload = 8;
UnitTypes.eclipse.weapons.get(2).bullet.lifetime = (30 * 8) / 5;
UnitTypes.eclipse.weapons.get(2).inaccuracy = 5;
UnitTypes.eclipse.range = (30 * 8);

//mono

let monoHeal = new RegenAbility();
monoHeal.percentAmount = 1 / (300 * 60) * 100;

UnitTypes.mono.abilities.add(monoHeal);
UnitTypes.mono.health = 220;
UnitTypes.mono.armor = 2;

//poly

UnitTypes.poly.health = 320;
UnitTypes.poly.armor = 12;
UnitTypes.poly.speed = (22.5 / 7.5);
UnitTypes.poly.itemCapacity = 60;
UnitTypes.poly.weapons.get(0).bullet.collidesAir = false;
UnitTypes.poly.weapons.get(0).bullet.healPercent = 7.5;
UnitTypes.poly.weapons.get(0).bullet.damage = 9;
UnitTypes.poly.abilities.get(0).amount = 24;

//mega

UnitTypes.mega.health = 600;
UnitTypes.mega.armor = 10;

//quad

UnitTypes.quad.health = 850;
UnitTypes.quad.armor = 10;
UnitTypes.quad.weapons.get(0).bullet.splashDamage = 1250;
UnitTypes.quad.weapons.get(0).bullet.splashDamageRadius = 64;
UnitTypes.quad.weapons.get(0).reload = 300;
UnitTypes.quad.itemCapacity = 0;//to avoid loading up quad with blast compound or something else
UnitTypes.quad.speed = (20 / 7.5);

//oct

UnitTypes.oct.health = 12000;
UnitTypes.oct.armor = 45;//screw scatters in particular
UnitTypes.oct.abilities.get(0).max = 40000;
UnitTypes.oct.abilities.get(0).regen = (500 / 60);

//neval units are gonna be intresting
//there's no changes to most neval units in yasr and if there its not very much

//risso
//(22.03.2025)current idea to rebalance risso: make it fast hit and run unit - better at attacking targets
UnitTypes.risso.health = 180;//less health to balance out faster speed
UnitTypes.risso.armor = 5;//so it does't die too fast from splash damage
UnitTypes.risso.speed = (11.5 / 7.5);
UnitTypes.risso.rotateSpeed = 8;//more rotate speed so it can dodge better
UnitTypes.risso.weapons.get(0).bullet.damage = 13;
UnitTypes.risso.weapons.get(0).bullet.keepVelocity = false;
UnitTypes.risso.weapons.get(1).shoot.shots = 5;
UnitTypes.risso.weapons.get(1).shoot.shotDelay = 5;
UnitTypes.risso.weapons.get(1).reload = (60 * 2.5)//fires salvo of missles every 2.5seconds
UnitTypes.risso.weapons.get(1).bullet.damage = 23;
UnitTypes.risso.weapons.get(1).bullet.splashDamage = 20;
UnitTypes.risso.weapons.get(1).bullet.splashDamageRadius = 20;
UnitTypes.risso.weapons.get(1).bullet.keepVelocity = false;
UnitTypes.risso.weapons.get(1).bullet.collidesAir = false;

//minke
//(22.03.2025)current idea to rebalance minke: beacouse minke has artillery-mount weapons
//and AA i'll make it better agains building and air, but worse agains ground

let minkeFrag = new BasicBulletType(3, 15);
minkeFrag.width = 5;
minkeFrag.height = 12;
minkeFrag.shrinkY = 1;
minkeFrag.lifetime = 20;
minkeFrag.collidesGround = false;

UnitTypes.minke.health = 300;//less health so it makes easier target
UnitTypes.minke.armor = 8;//so it does't die too fast from splash damage
UnitTypes.minke.speed = (4.85 / 7.5);
UnitTypes.minke.range = (32.5 * 8);//more than hail unless it has silicon ammo
UnitTypes.minke.rotateSpeed = 2;
UnitTypes.minke.weapons.get(0).bullet.damage = 15;
UnitTypes.minke.weapons.get(0).bullet.splashDamage = 40;
UnitTypes.minke.weapons.get(0).bullet.fragBullets = 3;
UnitTypes.minke.weapons.get(0).bullet.fragBullet = minkeFrag;
UnitTypes.minke.weapons.get(1).inaccuracy = 0;
UnitTypes.minke.weapons.get(1).bullet.splashDamage = 90;
UnitTypes.minke.weapons.get(1).reload = 45;
UnitTypes.minke.weapons.get(1).bullet.knockback = 0;
UnitTypes.minke.weapons.get(1).bullet.lifetime = (32.5 * 8) / 3;

//neval support will be a defensive type of neval units, most of them having close range

//retusa

UnitTypes.retusa.health = 320;
UnitTypes.retusa.speed = (7.5 / 7.5);
UnitTypes.retusa.weapons.get(1).shoot.shots = 7;
UnitTypes.retusa.weapons.get(1).shoot.shotDelay = 3;
UnitTypes.retusa.weapons.get(1).reload = (60 * 3);
UnitTypes.retusa.weapons.get(1).bullet.damage = 40;
UnitTypes.retusa.weapons.get(1).bullet.splashDamage = 15;
UnitTypes.retusa.weapons.get(1).bullet.splashDamageRadius = 48;
UnitTypes.retusa.weapons.get(1).bullet.healPercent = 3;
UnitTypes.retusa.weapons.get(1).bullet.weaveMag = 3;
UnitTypes.retusa.weapons.get(1).bullet.weaveScale = 1;
UnitTypes.retusa.weapons.get(1).bullet.speed = 3.5;
UnitTypes.retusa.weapons.get(1).bullet.lifetime = (10 * 8) / 3.5;

//oxynoe

UnitTypes.oxynoe.health = 670;
UnitTypes.oxynoe.armor = 10;
UnitTypes.oxynoe.speed = (9 / 7.5);
UnitTypes.oxynoe.weapons.get(0).bullet.damage = 37;
UnitTypes.oxynoe.weapons.get(1).reload = 6;
UnitTypes.oxynoe.weapons.get(1).targetInterval = 2;
UnitTypes.oxynoe.weapons.get(1).targetSwitchInterval = 5;

//BLOCKS

//conveyors

Blocks.conveyor.health = 40;
Blocks.titaniumConveyor.health = 40;
Blocks.armoredConveyor.health = 250;
Blocks.armoredConveyor.armor = 8;

//walls

//for walls i'll increse armor just like erekir walls have
Blocks.titaniumWall.armor = 4;
Blocks.titaniumWallLarge.armor = 5;
Blocks.thoriumWall.armor = 8;
Blocks.thoriumWallLarge.armor = 10;
Blocks.surgeWall.armor = 14;
Blocks.surgeWallLarge.armor = 15;
Blocks.phaseWall.armor = 11;
Blocks.phaseWallLarge.armor = 13;

//turrets

//duo

Blocks.duo.health = 160;
Blocks.duo.targetAir = false;
Blocks.duo.range = 140;

//explenation: copper duo is just normal vanilla duo. graphite duo is supposed to be early mace rush counter
//silicon duo is early anti-neval turret

Blocks.duo.ammoTypes.get(Items.copper).collidesAir = false;
Blocks.duo.ammoTypes.get(Items.graphite).collidesAir = false;
Blocks.duo.ammoTypes.get(Items.silicon).collidesAir = false;
Blocks.duo.ammoTypes.get(Items.graphite).damage = 40;
Blocks.duo.ammoTypes.get(Items.graphite).reloadMultiplier = 0.5;
Blocks.duo.ammoTypes.get(Items.graphite).rangeChange = -60;
Blocks.duo.ammoTypes.get(Items.graphite).ammoMultiplier = 1;
Blocks.duo.ammoTypes.get(Items.graphite).knockback = 10;
Blocks.duo.ammoTypes.get(Items.silicon).damage = 10;
Blocks.duo.ammoTypes.get(Items.silicon).reloadMultiplier = 3;
Blocks.duo.ammoTypes.get(Items.silicon).ammoMultiplier = 8;
Blocks.duo.ammoTypes.get(Items.silicon).rangeChange = 40;
Blocks.duo.limitRange();

//scatter

//now gives slow effect on hit so it can be more usefull not only as early defence
//mateglass is currently too good and will recive nervs to its frags later

Blocks.scatter.health = 920;
Blocks.scatter.armor = 3;
Blocks.scatter.ammoTypes.get(Items.lead).damage = 10;
Blocks.scatter.ammoTypes.get(Items.lead).splashDamage = 25;
Blocks.scatter.ammoTypes.get(Items.lead).splashDamageRadius = 20;
Blocks.scatter.ammoTypes.get(Items.lead).status = StatusEffects.slow;
Blocks.scatter.ammoTypes.get(Items.lead).statusDuration = 240;
Blocks.scatter.ammoTypes.get(Items.scrap).damage = 3;
Blocks.scatter.ammoTypes.get(Items.scrap).splashDamage = 35;
Blocks.scatter.ammoTypes.get(Items.scrap).splashDamageRadius = 36;
Blocks.scatter.ammoTypes.get(Items.scrap).status = StatusEffects.slow;
Blocks.scatter.ammoTypes.get(Items.scrap).statusDuration = 60;
Blocks.scatter.ammoTypes.get(Items.metaglass).damage = 45;
Blocks.scatter.ammoTypes.get(Items.metaglass).splashDamage = 25;
Blocks.scatter.ammoTypes.get(Items.metaglass).splashDamageRadius = 16;
Blocks.scatter.ammoTypes.get(Items.metaglass).fragBullet.damage = 35;
Blocks.scatter.ammoTypes.get(Items.metaglass).fragBullets = 2;
Blocks.scatter.ammoTypes.get(Items.metaglass).rangeChange = 40;
Blocks.scatter.inaccuracy = 8;
Blocks.scatter.limitRange();
Blocks.scatter.requirements = ItemStack.with(Items.copper, 85,Items.lead, 30,Items.graphite, 5);

//scorch

//just a basic health buff

Blocks.scorch.health = 450;
Blocks.scorch.armor = 5;

//hail

//now makes each ammo type stand out
//with graphite its very great at picking off larger targets
//silicon has great fire rate and homing (which most of the time help dealing with neval units)
//pyratite is just strong crowd control - does great damage at large area with extra burning effect on hit

Blocks.hail.health = 200;
Blocks.hail.reload = 120;
Blocks.hail.ammoTypes.get(Items.graphite).splashDamage = 125;
Blocks.hail.ammoTypes.get(Items.graphite).ammoMultiplier = 1;
Blocks.hail.ammoTypes.get(Items.graphite).splashDamageRadius = 8;
Blocks.hail.ammoTypes.get(Items.silicon).splashDamage = 40;
Blocks.hail.ammoTypes.get(Items.silicon).reloadMultiplier = 3;
Blocks.hail.ammoTypes.get(Items.silicon).ammoMultiplier = 4;
Blocks.hail.ammoTypes.get(Items.silicon).rangeChange = 41;
Blocks.hail.ammoTypes.get(Items.pyratite).splashDamage = 60;
Blocks.hail.ammoTypes.get(Items.pyratite).reloadMultiplier = 1.2;
Blocks.hail.ammoTypes.get(Items.pyratite).ammoMultiplier = 5;
Blocks.hail.ammoTypes.get(Items.pyratite).splashDamageRadius = 40;

//salvo

//i am copping a bit from yasr

//copper is just cheap
//graphite - its all damage. no fire rate, no range, and not even ammo multiplier. all of that for damage
//thorium is just copper with more damage, but i made it have less ammo multiplier so its harder to supply
//silicon is ... you might already know cosidering changes i've already made
//and so pyratite.
//has a lot less health so its easier to destroy (probaly with air units)

Blocks.salvo.health = 360;
Blocks.salvo.targetAir = false;
Blocks.salvo.ammoTypes.get(Items.copper).collidesAir = false;
Blocks.salvo.ammoTypes.get(Items.graphite).collidesAir = false;
Blocks.salvo.ammoTypes.get(Items.silicon).collidesAir = false;
Blocks.salvo.ammoTypes.get(Items.thorium).collidesAir = false;
Blocks.salvo.ammoTypes.get(Items.pyratite).collidesAir = false;
Blocks.salvo.ammoTypes.get(Items.copper).ammoMultiplier = 6;
Blocks.salvo.ammoTypes.get(Items.graphite).ammoMultiplier = 1;
Blocks.salvo.ammoTypes.get(Items.graphite).damage = 80;
Blocks.salvo.ammoTypes.get(Items.graphite).reloadMultiplier = 0.3;
Blocks.salvo.ammoTypes.get(Items.graphite).rangeChange = -56;
Blocks.salvo.ammoTypes.get(Items.graphite).knockback = 2.5;
Blocks.salvo.ammoTypes.get(Items.silicon).ammoMultiplier = 4;
Blocks.salvo.ammoTypes.get(Items.silicon).damage = 14;
Blocks.salvo.ammoTypes.get(Items.silicon).reloadMultiplier = 2;
Blocks.salvo.ammoTypes.get(Items.thorium).ammoMultiplier = 2;
Blocks.salvo.ammoTypes.get(Items.thorium).damage = 40;
Blocks.salvo.ammoTypes.get(Items.pyratite).ammoMultiplier = 4;
Blocks.salvo.ammoTypes.get(Items.pyratite).damage = 20;
Blocks.salvo.ammoTypes.get(Items.pyratite).splashDamage = 40;
Blocks.salvo.ammoTypes.get(Items.pyratite).reloadMultiplier = 0.8;
Blocks.salvo.limitRange();
Blocks.salvo.inaccuracy = 1.5;
Blocks.salvo.reload = 240;
Blocks.salvo.shoot.shots = 25;
Blocks.salvo.ammoPerShot = 6;
Blocks.salvo.shoot.shotDelay = 1.2;
Blocks.salvo.consumeAmmoOnce = true;
Blocks.salvo.requirements = ItemStack.with(Items.copper, 450, Items.graphite, 360, Items.titanium, 225);

//ripple

//haha ctrl + c , ctrl + v goes brrrr
//again less health is its easier to destroy using something like horizons or just flares

Blocks.ripple.health = 810;
Blocks.ripple.ammoTypes.get(Items.graphite).splashDamage = 120;
Blocks.ripple.ammoTypes.get(Items.graphite).splashDamageRadius = 16;
Blocks.ripple.ammoTypes.get(Items.graphite).ammoMultiplier = 2;
Blocks.ripple.ammoTypes.get(Items.graphite).knockback = 3;
Blocks.ripple.ammoTypes.get(Items.silicon).splashDamage = 30;
Blocks.ripple.ammoTypes.get(Items.silicon).reloadMultiplier = 2.5;
Blocks.ripple.ammoTypes.get(Items.silicon).splashDamageRadius = 14;
Blocks.ripple.ammoTypes.get(Items.silicon).ammoMultiplier = 3;
Blocks.ripple.ammoTypes.get(Items.plastanium).splashDamage = 50;
Blocks.ripple.ammoTypes.get(Items.plastanium).splashDamageRadius = 24;
Blocks.ripple.ammoTypes.get(Items.plastanium).fragBullet.width = 5;
Blocks.ripple.ammoTypes.get(Items.plastanium).fragBullet.lifetime = 30;
Blocks.ripple.ammoTypes.get(Items.plastanium).fragBullet.damage = 50;
Blocks.ripple.ammoTypes.get(Items.plastanium).fragBullets = 2;
Blocks.ripple.ammoTypes.get(Items.plastanium).ammoMultiplier = 2;
Blocks.ripple.ammoTypes.get(Items.plastanium).knockback = 4;
Blocks.ripple.ammoTypes.get(Items.pyratite).splashDamage = 33;
Blocks.ripple.ammoTypes.get(Items.pyratite).splashDamageRadius = 28;
Blocks.ripple.ammoTypes.get(Items.pyratite).ammoMultiplier = 2;
Blocks.ripple.ammoTypes.get(Items.blastCompound).splashDamage = 45;
Blocks.ripple.ammoTypes.get(Items.blastCompound).splashDamageRadius = 36;
Blocks.ripple.ammoTypes.get(Items.blastCompound).ammoMultiplier = 1;
Blocks.ripple.ammoTypes.get(Items.blastCompound).knockback = 0;
Blocks.ripple.shoot.shots = 20;
Blocks.ripple.reload = 240;
Blocks.ripple.ammoPerShot = 6;
Blocks.ripple.minRange = 100;
Blocks.ripple.velocityRnd = -0.2;
Blocks.ripple.inaccuracy = 10;
Blocks.ripple.requirements = ItemStack.with(Items.copper, 900, Items.graphite, 850, Items.titanium, 750);

//swarmer
//simular to yasr
//this time health boost, yes

Blocks.swarmer.health = 1600;
Blocks.swarmer.armor = 3;
Blocks.swarmer.inaccuracy = 3;
Blocks.swarmer.targetGround = false;
Blocks.swarmer.ammoTypes.get(Items.pyratite).collidesGround = false;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).collidesGround = false;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).collidesGround = false;
Blocks.swarmer.ammoTypes.get(Items.pyratite).damage = 80;
Blocks.swarmer.ammoTypes.get(Items.pyratite).splashDamage = 20;
Blocks.swarmer.ammoTypes.get(Items.pyratite).splashDamageRadius = 20;
Blocks.swarmer.ammoTypes.get(Items.pyratite).speed = 7.4;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).damage = 50;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).splashDamage = 80;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).splashDamageRadius = 32;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).speed = 7.4;
Blocks.swarmer.ammoTypes.get(Items.blastCompound).reloadMultiplier = 1.2;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).damage = 110;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).splashDamage = 40;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).splashDamageRadius = 16;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).speed = 7.4;
Blocks.swarmer.ammoTypes.get(Items.surgeAlloy).rangeChange = -80;
Blocks.swarmer.range = 400;
Blocks.swarmer.limitRange();
Blocks.swarmer.requirements = ItemStack.with(Items.graphite, 210, Items.titanium, 210, Items.silicon, 180, Items.plastanium, 270);

//cyclone

//im tired of making informative comments. time to make some jokes

Blocks.cyclone.health = 800;
Blocks.cyclone.range = 240;
Blocks.cyclone.targetGround = false;
Blocks.cyclone.ammoTypes.get(Items.metaglass).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.plastanium).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.blastCompound).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).collidesGround = false;
Blocks.cyclone.ammoTypes.get(Items.metaglass).status = StatusEffects.slow;
Blocks.cyclone.ammoTypes.get(Items.metaglass).statusDuration = 60;
Blocks.cyclone.ammoTypes.get(Items.metaglass).damage = 10;
Blocks.cyclone.ammoTypes.get(Items.metaglass).splashDamage = 30;
Blocks.cyclone.ammoTypes.get(Items.metaglass).splashDamageRadius = 16;
Blocks.cyclone.ammoTypes.get(Items.metaglass).ammoMultiplier = 3;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullet.damage = 40;
Blocks.cyclone.ammoTypes.get(Items.metaglass).fragBullets = 3;
Blocks.cyclone.ammoTypes.get(Items.metaglass).rangeChange = 28;
Blocks.cyclone.ammoTypes.get(Items.plastanium).damage = 50;
Blocks.cyclone.ammoTypes.get(Items.plastanium).splashDamage = 15;
Blocks.cyclone.ammoTypes.get(Items.plastanium).splashDamageRadius = 20;
Blocks.cyclone.ammoTypes.get(Items.plastanium).ammoMultiplier = 2;
Blocks.cyclone.ammoTypes.get(Items.plastanium).fragBullet.damage = 60;
Blocks.cyclone.ammoTypes.get(Items.plastanium).fragBullets = 2;
Blocks.cyclone.ammoTypes.get(Items.blastCompound).damage = 5;
Blocks.cyclone.ammoTypes.get(Items.blastCompound).splashDamage = 95;
Blocks.cyclone.ammoTypes.get(Items.blastCompound).splashDamageRadius = 32;
Blocks.cyclone.ammoTypes.get(Items.blastCompound).ammoMultiplier = 2;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).damage = 55;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).splashDamage = 75;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).splashDamageRadius = 24;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).ammoMultiplier = 1;
Blocks.cyclone.ammoTypes.get(Items.surgeAlloy).rangeChange = -40;
Blocks.cyclone.limitRange();
Blocks.cyclone.requirements = ItemStack.with(Items.copper, 1000, Items.titanium, 500,  Items.plastanium, 240);	

//fuse

//"router"

Blocks.fuse.health = 1200;
Blocks.fuse.armor = 9;
Blocks.fuse.targetAir = false;
Blocks.fuse.reload = 20;
Blocks.fuse.range = 112;
Blocks.fuse.ammoTypes.get(Items.titanium).collidesAir = false;
Blocks.fuse.ammoTypes.get(Items.thorium).collidesAir = false;
Blocks.fuse.ammoTypes.get(Items.titanium).damage = 120;
Blocks.fuse.ammoTypes.get(Items.titanium).reloadMultiplier = 1.66;
Blocks.fuse.ammoTypes.get(Items.titanium).ammoMultiplier = 5;
Blocks.fuse.ammoTypes.get(Items.titanium).status = StatusEffects.slow;
Blocks.fuse.ammoTypes.get(Items.titanium).statusDuration = 120;
Blocks.fuse.ammoTypes.get(Items.thorium).damage = 90;
Blocks.fuse.ammoTypes.get(Items.thorium).ammoMultiplier = 3;
Blocks.fuse.ammoTypes.get(Items.thorium).status = StatusEffects.unmoving;
Blocks.fuse.ammoTypes.get(Items.thorium).statusDuration = 60;

//parallax

//actualy. i don't know any good jokes, someone please send me some.

Blocks.parallax.range = 280;
Blocks.parallax.status = StatusEffects.slow;
Blocks.parallax.requirements = ItemStack.with(Items.silicon, 360, Items.titanium, 270, Items.graphite, 90);

//spectre

//googly i hope you are NOT reading this. beacouse why would you, you nerd

Blocks.spectre.armor = 3;
Blocks.spectre.reload = 10;
Blocks.spectre.shootCone = 8;
Blocks.spectre.ammoTypes.get(Items.graphite).damage = 35;
Blocks.spectre.ammoTypes.get(Items.graphite).reloadMultiplier = 2;
Blocks.spectre.ammoTypes.get(Items.graphite).splashDamage = 15;
Blocks.spectre.ammoTypes.get(Items.graphite).splashDamageRadius = 8;
Blocks.spectre.ammoTypes.get(Items.graphite).knockback = 10;
Blocks.spectre.ammoTypes.get(Items.graphite).ammoMultiplier = 5;
Blocks.spectre.ammoTypes.get(Items.thorium).damage = 110;
Blocks.spectre.ammoTypes.get(Items.thorium).splashDamage = 10;
Blocks.spectre.ammoTypes.get(Items.thorium).splashDamageRadius = 4;
Blocks.spectre.ammoTypes.get(Items.thorium).knockback = 15;
Blocks.spectre.ammoTypes.get(Items.thorium).ammoMultiplier = 2;
Blocks.spectre.ammoTypes.get(Items.pyratite).damage = 30;
Blocks.spectre.ammoTypes.get(Items.pyratite).splashDamage = 75;
Blocks.spectre.ammoTypes.get(Items.pyratite).splashDamageRadius = 20;
Blocks.spectre.ammoTypes.get(Items.pyratite).knockback = 10;
Blocks.spectre.ammoTypes.get(Items.pyratite).ammoMultiplier = 4;

//meltdown

//this is melting my brain

Blocks.meltdown.health = 2800;
Blocks.meltdown.armor = 3;
Blocks.meltdown.targetAir = false;
Blocks.meltdown.shootType.collidesAir = false;

//foreshadow

//hey, don't read this!

Blocks.foreshadow.health = 1100;
Blocks.foreshadow.reload = 540;
Blocks.foreshadow.ammoTypes.get(Items.surgeAlloy).status = StatusEffects.slow;
Blocks.foreshadow.ammoTypes.get(Items.surgeAlloy).statusDuration = 300;
Blocks.foreshadow.ammoTypes.get(Items.surgeAlloy).damage = 1750;
Blocks.foreshadow.ammoPerShot = 8;

//and this code from yasr to make t4s cheaper
Blocks.exponentialReconstructor.constructTime = 60 * 60 * (1);
Blocks.exponentialReconstructor.requirements = ItemStack.with(Items.lead, 1200, Items.titanium, 1000, Items.thorium, 650, Items.silicon, 700,  Items.plastanium, 250);

Blocks.tetrativeReconstructor.constructTime = 60 * 60 * (4 * 2);

function postLoadContent(){
	//Work around since no easier way to do this that i know off -Rushie
	let expoCons = Blocks.exponentialReconstructor.findConsumer(c => c instanceof  ConsumeItems);
	expoCons.items[0] = new ItemStack(Items.silicon, (850*2/3));
	expoCons.items[1] = new ItemStack(Items.titanium, (750*2/3));
	expoCons.items[2] = new ItemStack(Items.plastanium, (650*2/3));
	Blocks.exponentialReconstructor.capacities[10] = (650*4/3);
	Blocks.exponentialReconstructor.capacities[9] = (850*4/3);
	Blocks.exponentialReconstructor.capacities[6] = (750*4/3);
	
	let tetrCons = Blocks.tetrativeReconstructor.findConsumer(c => c instanceof  ConsumeItems);
	tetrCons.items[0] = new ItemStack(Items.silicon, (1000 * 2));
	tetrCons.items[1] = new ItemStack(Items.plastanium, (600 * 2));
	tetrCons.items[2] = new ItemStack(Items.surgeAlloy, (500 * 2));
	tetrCons.items[3] = new ItemStack(Items.phaseFabric, (350 * 2));
	Blocks.tetrativeReconstructor.capacities[12] = 2000;
	Blocks.tetrativeReconstructor.capacities[11] = 1400;
	Blocks.tetrativeReconstructor.capacities[10] = 2400;
	Blocks.tetrativeReconstructor.capacities[9] = 4000;
}

//haha forgot to make some changes load also on dedicated servers
Events.on(ClientLoadEvent, () => {
	postLoadContent();
});

Events.on(ServerLoadEvent, () => {
	postLoadContent();
});
