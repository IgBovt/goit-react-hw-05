import css from './NotFoundPage.module.css';
import { TfiFaceSad } from 'react-icons/tfi';

export default function NotFoundPage() {
  return (
    <>
      <div className={css.container}>
        <p className={css.text}>Sorry... we haven`t found this page...</p>
        <TfiFaceSad className={css.icon} />
      </div>
    </>
  );
}
