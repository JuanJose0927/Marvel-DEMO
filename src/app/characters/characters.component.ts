import { Component, OnInit } from '@angular/core';
import { CharacterServiceService } from '../service/character-service.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

  personajes: any[] = [];

  ngOnInit(): void {
    this.callPersonaje();
  }
  constructor(private personajeService: CharacterServiceService) { }

  callPersonaje() {
    this.personajeService.getPersonajes().subscribe((data => {
      const personajesAPI = data.data.results.map((personaje: any) => ({
        id: personaje.id,
        name: personaje.name,
        image: `${personaje.thumbnail.path}.${personaje.thumbnail.extension}`,
        description: personaje.description
      }));
      this.personajes = [...this.avengers, ...personajesAPI];
    }))
  }

  buscarPersonajes(event: any) {
    const terminoBusqueda = (event.target as HTMLInputElement).value;
  
    if (!terminoBusqueda.trim()) {
      this.personajeService.getPersonajes().subscribe((data => {
        const personajesAPI = data.data.results.map((personaje: any) => ({
          id: personaje.id,
          name: personaje.name,
          image: `${personaje.thumbnail.path}.${personaje.thumbnail.extension}`,
          description: personaje.description
        }));
        this.personajes = [...this.avengers, ...personajesAPI];
      }));
      return;
    }
  
    const resultadosFiltrados = this.personajes.filter((personaje: any) =>
      personaje.name.toLowerCase().includes(terminoBusqueda.toLowerCase())
    );
  
    this.personajes = resultadosFiltrados;
  }
  avengers = [
    {
      "id": "1",
      "name": "Iron Man",
      "image": "https://i.pinimg.com/736x/87/8f/2a/878f2a1414528b60ba93ebebabcf51dd.jpg",
      "description": "Anthony Edward 'Tony Stark' is an American billionaire business magnate and philanthropist, playboy and ingenious scientist, who suffered a serious chest injury during a kidnapping in the Middle East."
    },
    {
      "id": "2",
      "name": "Captain America ",
      "image": "https://upload.wikimedia.org/wikipedia/en/b/bf/CaptainAmericaHughes.jpg",
      "description": "Steve Rogers was a would-be U.S. Army enlistee rejected by recruiters because of his small size. He volunteers to receive a top-secret serum and transforms into a “super-soldier.” Dubbed Captain America and clad in a red, white, and blue costume with a matching stars-and-stripes shield, Rogers joins the army."
    },
    {
      "id": "3",
      "name": "Thor",
      "image": "https://i.pinimg.com/564x/5b/eb/f1/5bebf147723add0dec80991da354c031.jpg",
      "description": "Thor is one of the gods of Asgard and the son of the Asgardian king Odin. In addition to his Asgardian strength and extended lifespan, Thor wields control over the weather, including rain and lightning. He also carries the enchanted hammer Mjolnir that enhances his abilities and grants him the ability to fly."
    },
    {
      "id": "4",
      "name": "Hulk",
      "image": "https://upload.wikimedia.org/wikipedia/en/a/aa/Hulk_%28circa_2019%29.png",
      "description": "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he's always been and the uncontrollable green monster powered by his rage. Exposed to heavy doses of gamma radiation, scientist Bruce Banner transforms into the mean, green rage machine called the Hulk."
    },
    {
      "id": "5",
      "name": "Black Widow",
      "image": "https://upload.wikimedia.org/wikipedia/en/1/1b/Black_Widow_1.png",
      "description": "Like her namesake arachnid, Romanoff is stealthy, precise, and absolutely lethal. She is the Black Widow. Black Widow is a deadly one-woman fighting force. An expert in many forms of martial arts, she is also a skilled gymnast and possesses superhuman strength, speed, agility, and endurance."
    },
    {
      "id": "6",
      "name": "Black Panter",
      "image": "https://upload.wikimedia.org/wikipedia/en/9/9f/Black_Panther_OS_Vol_1_2.png",
      "description": "T'Challa is the Black Panther—a righteous king, noble Avenger, and fearsome warrior. Under his leadership, the African nation of Wakanda has flourished as one of the most technologically advanced countries in the world."
    },
    {
      "id": "7",
      "name": "Spider Man",
      "image": "https://comicvine.gamespot.com/a/uploads/scale_medium/12/124259/8126579-amazing_spider-man_vol_5_54_stormbreakers_variant_textless.jpg  ",
      "description": "Bitten by a radioactive spider, Peter Parker's arachnid abilities give him amazing powers he uses to help others, while his personal life continues to offer plenty of obstacles. With amazing spider-like abilities, teenage science whiz Peter Parker fights crime and dreams of becoming an Avenger as Spider-Man."
    },
    {
      "id": "8",
      "name": "HawKeye",
      "image": "https://static.wikia.nocookie.net/marveldatabase/images/6/6c/Thunderbolts_Vol_4_1_Trading_Card_Variant_Textless.jpg/",
      "description": "Clinton Clint Barton a.k.a. Hawkeye is an American skilled marksman, archer, and former circus performer and minor super villain turned member of the Avengers, Earth's Mightiest Heroes. As a member of the Avengers, he always had friction with the team, but always returned to fight any threat."
    },
    {
      "id": "9",
      "name": "Ant Man",
      "image": "https://comicvine.gamespot.com/a/uploads/scale_medium/14/149570/4153676-ant-man-samnee-variant-a2299.jpg",
      "description": "By harnessing the might of Pym Particles, Ant-Man is able to shrink to the size of an ant – and sometimes smaller – or grow to dozens of feet tall. Scott Lang has internalized this ability, allowing him to change sizes with the power of his mind."
    },
    {
      "id": "10",
      "name": "Doctor Strange",
      "image": "https://static.wikia.nocookie.net/vsbattles/images/d/d0/Dr_strange_by_joeyvazquez-dbdnuf1.png/",
      "description": "Stephen Strange was a surgeon whose career was cut short when his steady hands were damaged in an accident. Seeking a cure to fix his hands that conventional medicine could not provide, Strange embarked on a quest to find the Ancient One, which saw him become Master of the Mystic Arts!"
    },
    {
      "id": "11",
      "name": "Falcon",
      "image": "https://upload.wikimedia.org/wikipedia/en/2/2e/TheFalcon.jpg",
      "description": "Samuel Wilson, or known as his superhero alias Falcon, uses mechanical wings to fly, defend, and attack. He also has limited telepathic and empathic control over birds. After Steve Rogers retires, Wilson becomes Captain America in All-New Captain America #1 (Jan. 2015) and leader of the Avengers."
    },
    {
      "id": "12",
      "name": "Kang",
      "image": "https://static.wikia.nocookie.net/marveldatabase/images/5/5f/Timeless_Vol_1_1_Textless.jpg/",
      "description": "Like others from his native era, Kang ages at a slightly slower rate than modern humanity and is more resistant to the effects of radiation; though, he can be harmed by concentrated doses. He is an expert in time travel and the manipulation of time, and has mastered his future's advanced technology."
    },
    {
      "id": "13",
      "name": "Captain Marevl",
      "image": "https://static01.nyt.com/images/2019/03/10/arts/10marvel-list1/merlin_151018680_8b11e0d6-d5d0-4dc2-9b72-b5a46205b550-superJumbo.jpg",
      "description": "Former Air Force pilot and intelligence agent Carol Danvers pursued her dream of space exploration as a NASA employee, but her life forever changed when she was accidentally transformed into a human-Kree hybrid with extraordinary powers."
    },
    {
      "id": "14",
      "name": "Vision",
      "image": "https://upload.wikimedia.org/wikipedia/en/e/ea/Avengers_Vol_4_24.1.jpg",
      "description": "The Vision is a synthezoid, a highly advanced artificial man, constructed by the evil Ultron, an anti-human robot, to be used as an instrument of revenge against his adversaries."
    },
    {
      "id": "15",
      "name": "Wanda",
      "image": "https://static.wikia.nocookie.net/marveldatabase/images/8/85/Scarlet_Witch_Vol_3_1_Dauterman_Second_Printing_Variant.jpg",
      "description": "Wanda Maximoff is a powerful witch, capable of altering reality and probability by using chaos magic. Witchcraft: Maximoff is a human of magical birthright which means she possesses the ability to manipulate magic since the very beginning."
    },
    {
      "id": "16",
      "name": "War Machine",
      "image": "https://static.wikia.nocookie.net/marveldatabase/images/8/8f/James_Rhodes_%28Earth-616%29_from_Invincible_Iron_Man_Vol_5_3_002.jpg",
      "description": "War Machine is the title adopted by James Rupert Rhodey Rhodes after he acquired the War Machine armor. He is a military veteran and pilot who began working for Tony Stark, eventually discovering that he was Iron Man and then taking Stark's place when he was incapacitated."
    },
    {
      "id": "17",
      "name": "Gamora",
      "image": "https://cdn.marvel.com/content/1x/022gam_com_mas_mob_03.jpg",
      "description": "Gamora is the adopted daughter of Thanos, and the last of her species. Her powers include superhuman strength and agility and an accelerated healing factor. She also is an elite combatant, being able to beat most of the opponents in the galaxy. She is a member of the superhero group known as the Infinity Watch."
    },
    {
      "id": "18",
      "name": "Nebula",
      "image": "https://static.wikia.nocookie.net/marveldatabase/images/f/f0/Nebula_%28Earth-616%29_from_Silver_Surfer_Vol_3_78_001.jpg/",
      "description": "As a pirate and mercenary with her intentions set on conquering other empires, this daughter of Thanos is feared by many across the star systems. The fierce warrior Nebula is the adopted daughter of Thanos and the “sister” of Gamora."
    },
    {
      "id": "20",
      "name": "Rocket Raccoon",
      "image": "https://upload.wikimedia.org/wikipedia/en/1/1b/Rocketraccoon.png",
      "description": "Rocket Raccoon is a genetically and cybernetically enhanced raccoon turned freelance mercenary turned member of the Guardians of the Galaxy. He is considered to have one of the best tactical minds in the galaxy."
    },
    {
      "id": "21",
      "name": "Mantis",
      "image": "https://static.wikia.nocookie.net/database-of-powers-and-abilities/images/7/74/Mantis.jpg/",
      "description": "Born of human parents, Mantis was raised by a Kree alien sect, worshipped as their Celestial Madonna. A former Avenger and Guardian of the Galaxy, she has psychic intuition and command of martial arts. Knowledge is power. And you have much to learn."
    },
    {
      "id": "22",
      "name": "Star-Lord",
      "image": "https://cdn.marvel.com/u/prod/marvel/i/mg/9/a0/582f39a4ddd43/clean.jpg",
      "description": "Star-Lord is a master strategist and problem solver who is an expert in close-quarter combat, various human and alien firearms, and battle techniques. He has extensive knowledge of various alien customs, societies, and cultures, and considerable knowledge about cosmic abstracts, such as Oblivion."
    },
    {
      "id": "23",
      "name": "Star-Lord",
      "image": "https://cdn.marvel.com/u/prod/marvel/i/mg/9/a0/582f39a4ddd43/clean.jpg",
      "description": "Star-Lord is a master strategist and problem solver who is an expert in close-quarter combat, various human and alien firearms, and battle techniques. He has extensive knowledge of various alien customs, societies, and cultures, and considerable knowledge about cosmic abstracts, such as Oblivion."
    },
    {
      "id": "24",
      "name": "Groot",
      "image": "https://cdn.marvel.com/u/prod/marvel/i/mg/3/10/526033c8b474a/standard_incredible.jpg",
      "description": "Groot is a Flora colossus from Planet X, the capital of the branch worlds. The Flora colossi are tree-like beings whose language is almost impossible to understand due to the stiffness of their larynxes, causing their speech to sound like they are repeating the phrase I am Groot"
    },
    {
      "id": "25",
      "name": "Modok",
      "image": "https://upload.wikimedia.org/wikipedia/en/e/eb/Modok.PNG",
      "description": "M.O.D.O.K.: Mental Organism Designed Only For Killing. As the brainchild of Advanced Idea Mechanics, (A.I.M.), M.O.D.O.K. has long terrorized Marvel heroes with his computer-like mind and psionic powers."
    },
    {
      "id": "26",
      "name": "Thanos",
      "image": "https://static.wikia.nocookie.net/marveldatabase/images/1/1c/Avengers_Assemble_Vol_2_3_Variant_Textless.jpg/",
      "description": "Physically, Thanos stands head and shoulders above the average human or humanoid, with powerful muscles, a broad face, and a purple-hued skintone. He often wears a protective suit of armor and his strength is such that he has been physically able to battle—and defeat—the likes of the Hulk."
    },
    {
      "id": "26",
      "name": "Loki",
      "image": "https://static.wikia.nocookie.net/marvel-dc/images/e/eb/250px-Loki_Laufeyson_Earth_616.jpg/",
      "description": "God of Mischief and brother to Thor, Loki's tricks and schemes wreak havoc across the realms. Loki, Prince of Asgard, Odinson, rightful heir of Jotunheim, and God of Mischief, is burdened with glorious purpose. His desire to be a king drives him to sow chaos in Asgard."
    },
    {
      "id": "26",
      "name": "Red Skull",
      "image": "https://static.wikia.nocookie.net/marveldatabase/images/3/30/Captain_America_Vol_9_13_Bring_on_the_Bad_Guys_Variant_Textless.jpg",
      "description": "The Red Skull is depicted as a Nazi agent and protégé of Adolf Hitler during World War II. Although he initially wears a fearsome blood-red skull mask, Shmidt suffers a horrific disfigurement decades later that causes his face to match his namesake."
    },
  ]
}

