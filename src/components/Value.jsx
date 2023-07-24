// VALUE SECTION

// Importing component
import CardValue from './CardValue';

// Importing assets
import Light from '../assets/icone-valeur-ampoule.png';
import Earth from '../assets/icone-valeur-environnement.png';
import Balance from '../assets/icone-valeur-ethique.png';

//
function Value() {
    return (
        <section>
            <h2>Nos valeurs</h2>
            <CardValue
                content="Engagement envers l'innovation : Chez Fiatope Invest, nous valorisons l'innovation sous toutes ses formes. Nous croyons en la puissance des idées nouvelles et soutenons activement les entrepreneurs et les porteurs de projets novateurs. Notre engagement envers l'innovation se manifeste par notre volonté d'investir dans des projets qui ont le potentiel de transformer des secteurs et de créer un impact positif."
                image={<img src={Light} alt="icone d'une ampoule" />}
            />
            <CardValue
                content="Impact social et environnemental : Nous cherchons à investir dans des initiatives qui non seulement génèrent des retours financiers, mais qui contribuent également à résoudre des problèmes sociaux et environnementaux pressants. Nous croyons que les entreprises peuvent être des forces du changement et nous nous engageons à soutenir des projets qui créent une valeur durable."
                image={<img src={Earth} alt="icone de la planète verte" />}
            />
            <CardValue
                content="Transparence et éthique : Chez Fiatope Invest la transparence et l'éthique sont des valeurs fondamentales. Nous croyons en l'importance de communiquer de manière claire et honnête avec nos partenaires, investisseurs et entrepreneurs. Nous nous engageons à respecter les normes les plus élevées en matière d'éthique des affaires et de gouvernance. Notre objectif est de bâtir des relations solides et durables basées sur la confiance mutuelle et le respect."
                image={<img src={Balance} alt="icone d'une balance" />}
            />
        </section>
    );
}

export default Value;
