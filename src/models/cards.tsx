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

    return [
        {
            id: 1,
            image: lookUp,
            title: t("cards.1.title"),
            subTitle: t("cards.1.subTitle"),
            content: t("cards.1.content"),
        },
        {
            id: 2,
            image: AngrySit,
            title: t("cards.2.title"),
            subTitle: t("cards.2.subTitle"),
            content: t("cards.2.content"),
        },
        {
            id: 3,
            image: jumpHappy,
            title: t("cards.3.title"),
            subTitle: t("cards.3.subTitle"),
            content: t("cards.3.content"),
        },
        {
            id: 4,
            image: hoddie3D,
            title: t("cards.4.title"),
            subTitle: t("cards.4.subTitle"),
            content: t("cards.4.content"),
        },
        {
            id: 5,
            image: drink3D,
            title: t("cards.5.title"),
            subTitle: t("cards.5.subTitle"),
            content: t("cards.5.content"),
        },
        {
            id: 6,
            image: drinkHappy,
            title: t("cards.6.title"),
            subTitle: t("cards.6.subTitle"),
            content: t("cards.6.content"),
        },
    ];
};
