import { Request, Response } from "express";
import {createMenuObject} from '../helpers/createMenuObject';
import { Pet } from "../models/pet";
export  const home = (req: Request, res: Response) => {

    let list = Pet.getAll();

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
        },
        list
    })


}
export  const dogs = (req: Request, res: Response) => {
    let list = Pet.getFromType("dogs");
    
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
        },
        list
    })

}

export  const cats = (req: Request, res: Response) => {
    let list = Pet.getFromType("cats");

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
        },
        list

    })


}

export  const fishes = (req: Request, res: Response) => {
    

    let list = Pet.getFromType("fishs");

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
        },
        list

    })


}