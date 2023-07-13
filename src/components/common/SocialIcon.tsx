import { FC, ReactElement } from 'react';

import Email from '../../../public/assets/logos/email.svg';
import SharePoint from '../../../public/assets/logos/sharepoint.svg';
import Facebook from '../../../public/assets/logos/facebook.svg';
import Instagram from '../../../public/assets/logos/instagram.svg';
import Linkedin from '../../../public/assets/logos/linkedin.svg';

interface IProps {
  name: string;
  url: string;
  customStyle?: string;
}

const SocialIcon: FC<IProps> = ({ name, url, customStyle }): ReactElement => {
  const style = `rounded-full border ${customStyle}`;

  const renderIcon = (name: string) => {
    let Component = <Facebook className={style} />;

    switch (name) {
      case 'email':
        Component = <Email className={style} />;
        break;
      case 'sharepoint':
        Component = <SharePoint className={style} />;
        break;
      case 'instagram':
        Component = <Instagram className={style} />;
        break;
      case 'linkedin':
        Component = <Linkedin className={style} />;
        break;
      default:
        Component = <Facebook className={style} />;
    }

    return Component;
  };

  return (
    <a href={url} target="_blank" role="button" className="mr-1.5">
      {renderIcon(name)}
    </a>
  );
};

export default SocialIcon;
