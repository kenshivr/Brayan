import run3D from '@public/run3D.png';
import lookUp from '@public/lookUp.png';
import jumpHappy from '@public/jumpHappy.png';
import { useTranslation } from 'react-i18next';
import topLeftCorner from '@public/fall3D.png';

import type Proyect from '@src/types/proyect';

export const useProyects = (): Proyect[] => {
    const { t } = useTranslation();

    const images = [topLeftCorner, jumpHappy, run3D, lookUp];

    const data = t('projects', { returnObjects: true }) as Array<{
        title: string;
        content: string;
        year: string;
        month: string;
        link?: string;
    }>;

    return data.map((proj, idx) => ({
        title: proj.title,
        image: images[idx],
        content: proj.content,
        year: proj.year,
        month: proj.month,
        link: proj.link
    }));
};
