import { useI18n } from "../i18n/I18nContext";

const About = () => {
  const { t } = useI18n();
  return <h1>{t("aboutText")}</h1>;
};

export default About;
