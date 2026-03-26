import type { ReactElement } from 'react';

export interface Card {
    id: number;
    icon: ReactElement;
    image: ReactElement;
    title: string;
    subTitle: string;
    percentage: number;
    chapter: string;
    color: string;
}
