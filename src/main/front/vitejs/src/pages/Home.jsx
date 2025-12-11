import { useI18n } from "../i18n/I18nContext";

const Home = () => {
  const { t } = useI18n();
  return <h1>{t("welcome")}</h1>;
};

export default Home;
