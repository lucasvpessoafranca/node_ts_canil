type PetType = "dogs" | "cats" | "fishs"
type Pet = {
    type: PetType,
    image:string,
    name:string,
    color:string,
    sex: "Masculino" | "Feminino"
 }
const data: Pet[] = 
    [
        {
            type: 'dogs',
            image: 'pastor-alemao.jpg',
            name: 'Pastor-alemão',
            color: 'Amarelo e Preto',
            sex: 'Masculino'
        },
        {
            type: 'dogs',
            image: 'labrador.jpg',
            name: 'Labrador-retriever',
            color: 'Branco',
            sex: 'Masculino'
        },
        {
            type: 'dogs',
            image: 'zwergspitz.jpg',
            name: 'Zwergspitz',
            color: 'Amarelo',
            sex: 'Feminino'
        },
        {
            type: 'dogs',
            image: 'husky.jpg',
            name: 'Husky Siberiano',
            color: 'Branco e Preto',
            sex: 'Masculino'
        },
        {
            type: 'dogs',
            image: 'golden.jpg',
            name: 'Golden Retriever',
            color: 'Amarelo',
            sex: 'Masculino'
        },
        {
            type: 'dogs',
            image: 'poodle.jpg',
            name: 'Poodle',
            color: 'Branco',
            sex: 'Feminino'
        },
        {
            type: 'dogs',
            image: 'bulldog.jpg',
            name: 'Bulldog',
            color: 'Branco e Amarelo',
            sex: 'Masculino'
        },
        {
            type: 'cats',
            image: 'persa.jpg',
            name: 'Persa',
            color: 'Amarelo',
            sex: 'Masculino'
        },
        {
            type: 'cats',
            image: 'mainecoon.jpg',
            name: 'Maine Coon',
            color: 'Preto e Branco',
            sex: 'Masculino'
        },
        {
            type: 'cats',
            image: 'bengal.jpg',
            name: 'Bengal',
            color: 'Branco, Preto e Amarelo',
            sex: 'Feminino'
        },
        {
            type: 'cats',
            image: 'siames.jpg',
            name: 'Siamês',
            color: 'Amarelo e Preto',
            sex: 'Masculino'
        },
        {
            type: 'cats',
            image: 'sphynx.jpg',
            name: 'Sphynx',
            color: 'Branco',
            sex: 'Masculino'
        },
        {
            type: 'fishs',
            image: 'neon.jpg',
            name: 'Tetra Neon',
            color: 'Vermelho e Azul',
            sex: 'Masculino'
        },
        {
            type: 'fishs',
            image: 'matogrosso.jpg',
            name: 'Mato Grosso',
            color: 'Laranja',
            sex: 'Masculino'
        },
        {
            type: 'fishs',
            image: 'limpavidro.jpg',
            name: 'Limpa Vidro',
            color: 'Verde e Branco',
            sex: 'Masculino'
        },
        {
            type: 'fishs',
            image: 'tanictis.jpg',
            name: 'Tanictis',
            color: 'Vermelho',
            sex: 'Masculino'
        },
        {
            type: 'fishs',
            image: 'acara.jpg',
            name: 'Acará Bandeira',
            color: 'Preto',
            sex: 'Masculino'
        },
]


export const Pet = {
    getAll: (): Pet[] => { return data;},
    getFromType: (type: PetType): Pet[] => {
        return data.filter(item => item.type === type);
    },

    getFromName: (name:string): Pet[] => {
        return data.filter(item => {
            if(item.name.toLowerCase().indexOf(name.toLocaleLowerCase())> -1)  {
                return true
            } else {
                return false
            }
        })
    }

}