export class Card {
    constructor(
        public _id: string,
        public index: number,
        public guid: string,
        public isFavourite: boolean,
        public title: string,
        public company: string,
        public info: string,
        public description: string
        ) {}
}

