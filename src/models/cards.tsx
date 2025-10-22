import { useTranslation } from "react-i18next";

import lookUp from "@public/lookUp.png";
import AngrySit from "@public/angrySit.png";
import jumpHappy from "@public/jumpHappy.png";
import hoddie3D from "@public/hoddie3D.png";
import drink3D from "@public/drink3D.png";
import drinkHappy from "@public/drinkHappy.png";

import type Card from "@src/types/card";

export const useCards = (): Card[] => {
    const { t } = useTranslation();

    const images = [lookUp, AngrySit, jumpHappy, hoddie3D, drink3D, drinkHappy];

    return images.map((image, index) => {
        const id = index + 1;
        return {
            id,
            image,
            title: t(`cards.${id}.title`),
            subTitle: t(`cards.${id}.subTitle`),
            content: t(`cards.${id}.content`),
        };
    });
};
