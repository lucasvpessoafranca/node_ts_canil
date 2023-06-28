import { Request, Response } from "express";
import {createMenuObject} from '../helpers/createMenuObject';
export  const home = (req: Request, res: Response) => {
    res.render('pages/page', {
        // menu: {
        //     all:true,
        //     dogs:false,
        //     cats:false,
        //     fishes:false,
        // },
        menu: createMenuObject("all"),
        banner: {
            title:"todos os animais",
            background:"allanimals.jpg"
        }
    })


}
export  const dogs = (req: Request, res: Response) => {
    res.render('pages/page', {
        // menu: {
        //     all:false,
        //     dogs:true,
        //     cats:false,
        //     fishes:false,
        // }
        menu: createMenuObject("dogs"),
        banner: {
            title:"Cachorros",
            background:"banner_dog.jpg"
        }
    })

}

export  const cats = (req: Request, res: Response) => {
    res.render('pages/page', {
        // menu: {
        //     all:false,
        //     dogs:false,
        //     cats:true,
        //     fishes:false,
        // },
        menu: createMenuObject("cats"),
        banner: {
            title:"Gatos",
            background:"banner_cat.jpg"
        }
    })


}

export  const fishes = (req: Request, res: Response) => {
    
    res.render('pages/page', {
        // menu: {
        //     all:false,
        //     dogs:false,
        //     cats:false,
        //     fishes:true,
        // },
        menu: createMenuObject("fishes"),

        banner: {
            title:"Peixes",
            background:"banner_fish.jpg"
        }
    })


}