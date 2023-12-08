export type navbarLinkType = {
      title: string,
    href: string,
}

export type heroImg = {
    id: number;
    src: string;
    alt: string;
}

export type favoriteType = {
    id: number | string;
    src: string;
    name: string;
    description: string;
}

export type rocketsType = {
    rockets: favoriteType[]
}
