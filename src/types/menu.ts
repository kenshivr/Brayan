import type { ReactNode } from 'react';

export interface SocialMediaInterface {
    icon: ReactNode;
    link: string;
}

export type Props = {
    socialMedias: SocialMediaInterface[];
};
